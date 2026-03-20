import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define a type for the user
interface AuthenticatedUser extends Express.User {
    id: string;
    email: string;
}

// Middleware function to validate JWT and attach user to request
const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }

        req.user = user as AuthenticatedUser; // Attach user to request
        next();  // Proceed to next middleware
    });
};

export default authenticate;
