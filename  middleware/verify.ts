import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = "your_hardcoded_secret_key";

export interface AuthenticatedRequest extends Request {
    user?: string | JwtPayload;
}

export const authMiddleware = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): void => {
    const token = req.cookies?.token; // Extract token from cookie named 'token'

    if (!token) {
        res.status(403).json({ message: "Access denied. No token provided." });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
        console.log(decoded);
        req.user = decoded; // Attach decoded payload to the request
        next();//next action
    } catch (error) {
        res.status(401).json({ message: "Invalid token." });
    }
};
