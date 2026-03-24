import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import type { Express, Request } from "express";
import { User } from "../../models";
import { connectDB } from "../../db";

export function setupGitHubAuth(app: Express) {
  // Only set up GitHub auth if credentials are provided
  if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    console.log("[auth] GitHub OAuth credentials not found - GitHub auth disabled");
    return;
  }

  console.log("[auth] Setting up GitHub OAuth");

  // Dynamic callback URL based on request hostname
  const getCallbackURL = (req: Request) => {
    const protocol = req.secure || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http';
    const host = req.get('host');
    return `${protocol}://${host}/api/auth/github/callback`;
  };

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://placeholder.local/callback", // Will be overridden
        scope: ["user:email"],
        passReqToCallback: true,
      },
      async (req: any, accessToken: string, refreshToken: string, profile: any, done: any) => {
        try {
          await connectDB();
          
          // Extract user info from GitHub profile
          const email = profile.emails && profile.emails[0] ? profile.emails[0].value : `${profile.username}@github.local`;
          const firstName = profile.displayName ? profile.displayName.split(" ")[0] : profile.username;
          const lastName = profile.displayName ? profile.displayName.split(" ").slice(1).join(" ") : "";
          
          // Save or update user in database
          const user = await User.findOneAndUpdate(
            { email: email },
            {
              email: email,
              firstName: firstName,
              lastName: lastName,
              profileImageUrl: profile.photos && profile.photos[0] ? profile.photos[0].value : null,
            },
            { upsert: true, new: true }
          );

          // Create user object for session
          const sessionUser = {
            id: user._id.toString(),
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            profileImageUrl: user.profileImageUrl,
            provider: "github",
          };

          done(null, sessionUser);
        } catch (error) {
          console.error("[auth] GitHub authentication error:", error);
          done(error, null);
        }
      }
    )
  );

  // GitHub login route
  app.get("/api/auth/github", (req, res, next) => {
    const callbackURL = getCallbackURL(req);
    passport.authenticate("github", { 
      scope: ["user:email"],
      callbackURL: callbackURL,
    })(req, res, next);
  });

  // GitHub callback route
  app.get(
    "/api/auth/github/callback",
    (req, res, next) => {
      const callbackURL = getCallbackURL(req);
      passport.authenticate("github", { 
        failureRedirect: "/wall",
        callbackURL: callbackURL,
      })(req, res, next);
    },
    (req, res) => {
      // Successful authentication, redirect to wall
      res.redirect("/wall");
    }
  );
}
