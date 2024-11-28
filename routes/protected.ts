import { Router, Request, Response } from "express";
const protectedrout = Router();
import { authMiddleware, AuthenticatedRequest } from "../ middleware/verify";

// Protected route
protectedrout.get("/profile", authMiddleware, (req: AuthenticatedRequest, res: Response) => {
    console.log(req.user);
    res.status(200).json({ message: req.user});
});

export default protectedrout;
