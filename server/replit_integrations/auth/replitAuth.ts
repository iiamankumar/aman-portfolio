import passport from "passport";
import session from "express-session";
import type { Express, RequestHandler } from "express";

const IS_REPLIT = !!process.env.REPL_ID;

export async function setupAuth(app: Express) {
  app.set("trust proxy", 1);

  if (!IS_REPLIT) {
    console.log("[auth] Running locally - Replit auth disabled.");
    app.use(
      session({
        secret: process.env.SESSION_SECRET || "local-dev-secret",
        resave: false,
        saveUninitialized: false,
        cookie: { httpOnly: true, secure: false },
      })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    return;
  }

  const connectPg = (await import("connect-pg-simple")).default;
  const pgStore = connectPg(session);
  const sessionTtl = 7 * 24 * 60 * 60 * 1000;
  const sessionStore = new pgStore({
    conString: process.env.DATABASE_URL,
    createTableIfMissing: false,
    ttl: sessionTtl,
    tableName: "sessions",
  });

  app.use(
    session({
      secret: process.env.SESSION_SECRET!,
      store: sessionStore,
      resave: false,
      saveUninitialized: false,
      cookie: { httpOnly: true, secure: true, maxAge: sessionTtl },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  const client = await import("openid-client");
  const { Strategy } = await import("openid-client/passport");
  const { authStorage } = await import("./storage");

  let config: any;
  try {
    config = await client.discovery(
      new URL(process.env.ISSUER_URL ?? "https://replit.com/oidc"),
      process.env.REPL_ID!
    );
  } catch (e) {
    console.error("[auth] Failed to load OIDC config:", e);
    return;
  }

  const registeredStrategies = new Set<string>();

  const ensureStrategy = (domain: string) => {
    const strategyName = `replitauth:${domain}`;
    if (!registeredStrategies.has(strategyName)) {
      const strategy = new Strategy(
        {
          name: strategyName,
          config,
          scope: "openid email profile offline_access",
          callbackURL: `https://${domain}/api/callback`,
        },
        async (tokens: any, verified: any) => {
          const user: any = {};
          user.claims = tokens.claims();
          user.access_token = tokens.access_token;
          user.refresh_token = tokens.refresh_token;
          user.expires_at = user.claims?.exp;
          await authStorage.upsertUser({
            id: tokens.claims()["sub"],
            email: tokens.claims()["email"],
            firstName: tokens.claims()["first_name"],
            lastName: tokens.claims()["last_name"],
            profileImageUrl: tokens.claims()["profile_image_url"],
          });
          verified(null, user);
        }
      );
      passport.use(strategy);
      registeredStrategies.add(strategyName);
    }
  };

  passport.serializeUser((user: Express.User, cb) => cb(null, user));
  passport.deserializeUser((user: Express.User, cb) => cb(null, user));

  app.get("/api/login", (req, res, next) => {
    ensureStrategy(req.hostname);
    passport.authenticate(`replitauth:${req.hostname}`, {
      prompt: "login consent",
      scope: ["openid", "email", "profile", "offline_access"],
    })(req, res, next);
  });

  app.get("/api/callback", (req, res, next) => {
    ensureStrategy(req.hostname);
    passport.authenticate(`replitauth:${req.hostname}`, {
      successReturnToOrRedirect: "/",
      failureRedirect: "/api/login",
    })(req, res, next);
  });

  app.get("/api/logout", (req, res) => {
    req.logout(() => {
      res.redirect("/");
    });
  });
}

export const isAuthenticated: RequestHandler = async (req, res, next) => {
  if (!IS_REPLIT) {
    return res.status(401).json({ message: "Authentication not available in local mode" });
  }

  const user = req.user as any;
  if (!req.isAuthenticated() || !user?.expires_at) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const now = Math.floor(Date.now() / 1000);
  if (now <= user.expires_at) {
    return next();
  }

  const refreshToken = user.refresh_token;
  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const client = await import("openid-client");
    const config = await client.discovery(
      new URL(process.env.ISSUER_URL ?? "https://replit.com/oidc"),
      process.env.REPL_ID!
    );
    const tokenResponse = await client.refreshTokenGrant(config, refreshToken);
    user.claims = (tokenResponse as any).claims();
    user.access_token = tokenResponse.access_token;
    user.refresh_token = tokenResponse.refresh_token;
    user.expires_at = user.claims?.exp;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
