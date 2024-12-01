//this code is to verify if the user is admin to change product on the website 

import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = "your_hardcoded_secret_key_for_admin";

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
        const X = req.user ? JSON.parse(JSON.stringify(req.user)) : null; // Convert req.user to JSON
        if(X.email == "admin"){
        next();}else{res.status(403).json({ message: "403" });}
    } catch (error) {
        res.status(401).json({ message: "Invalid token." });
    }
};
