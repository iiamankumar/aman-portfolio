import type { Express } from "express";
import { authStorage } from "./storage";

// Register auth-specific routes
export function registerAuthRoutes(app: Express): void {
  // Get current authenticated user
  app.get("/api/auth/user", async (req: any, res) => {
    try {
      // Check if user is authenticated
      if (!req.isAuthenticated() || !req.user) {
        return res.status(401).json({ message: "Not authenticated" });
      }

      // Handle different auth providers
      let userId: string;
      let userData: any;

      // GitHub OAuth user
      if (req.user.provider === "github") {
        userId = req.user.id;
        userData = {
          id: req.user.id,
          email: req.user.email,
          firstName: req.user.firstName,
          lastName: req.user.lastName,
          profileImageUrl: req.user.profileImageUrl,
        };
      }
      // Replit Auth (Google) user
      else if (req.user.claims) {
        userId = req.user.claims.sub;
        const user = await authStorage.getUser(userId);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        userData = user;
      }
      // Session-stored user data
      else {
        userData = req.user;
      }

      res.json(userData);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
}
