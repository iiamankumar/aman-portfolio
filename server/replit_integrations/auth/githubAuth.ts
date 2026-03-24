import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import type { Express } from "express";
import { authStorage } from "./storage";

export function setupGitHubAuth(app: Express) {
  // Only set up GitHub auth if credentials are provided
  if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    console.log("[auth] GitHub OAuth credentials not found - GitHub auth disabled");
    return;
  }

  const callbackURL = process.env.GITHUB_CALLBACK_URL || "http://localhost:5000/api/auth/github/callback";
  
  console.log("[auth] Setting up GitHub OAuth");

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: callbackURL,
        scope: ["user:email"],
      },
      async (accessToken: string, refreshToken: string, profile: any, done: any) => {
        try {
          // Extract user info from GitHub profile
          const email = profile.emails && profile.emails[0] ? profile.emails[0].value : `${profile.username}@github.local`;
          const firstName = profile.displayName ? profile.displayName.split(" ")[0] : profile.username;
          const lastName = profile.displayName ? profile.displayName.split(" ").slice(1).join(" ") : "";
          
          // Save or update user in database
          await authStorage.upsertUser({
            id: `github_${profile.id}`,
            email: email,
            firstName: firstName,
            lastName: lastName,
            profileImageUrl: profile.photos && profile.photos[0] ? profile.photos[0].value : null,
          });

          // Create user object for session
          const user = {
            id: `github_${profile.id}`,
            email: email,
            firstName: firstName,
            lastName: lastName,
            profileImageUrl: profile.photos && profile.photos[0] ? profile.photos[0].value : null,
            provider: "github",
          };

          done(null, user);
        } catch (error) {
          console.error("[auth] GitHub authentication error:", error);
          done(error, null);
        }
      }
    )
  );

  // GitHub login route
  app.get("/api/auth/github", passport.authenticate("github", { scope: ["user:email"] }));

  // GitHub callback route
  app.get(
    "/api/auth/github/callback",
    passport.authenticate("github", { failureRedirect: "/wall" }),
    (req, res) => {
      // Successful authentication, redirect to wall
      res.redirect("/wall");
    }
  );
}
