import { Express, Request, Response, NextFunction } from 'express';
import { z } from 'zod';

declare global {
  namespace Express {
    interface User {
      claims: {
        sub: string;
        email: string;
        first_name?: string;
        last_name?: string;
        profile_image_url?: string;
      };
    }
    interface Request {
      user?: User;
    }
  }
}

export function setupAuth(app: Express) {
  // Setup authentication middleware
  // For now, we'll use a basic session-based approach
}

export function registerAuthRoutes(app: Express) {
  // Register auth routes if needed
  app.post('/api/auth/logout', (req: Request, res: Response) => {
    req.session?.destroy(() => {
      res.json({ success: true });
    });
  });
}

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};
