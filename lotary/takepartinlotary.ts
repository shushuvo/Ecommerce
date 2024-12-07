import e, { Router, Request, Response } from "express";

import { Lotary } from "../modles/lotary";
//varify import section
import { authMiddleware, AuthenticatedRequest } from "../ middleware/verify";

const joinlotary = Router();

//input taking section
joinlotary.post('/joinlotary', authMiddleware,async (req: AuthenticatedRequest, res: Response)=> {
const X = req.user ? JSON.parse(JSON.stringify(req.user)) : null; // Convert req.user to JSON

        try{            
                // Insert a new lotary
                const newLotary = new Lotary({
                email: X.email,
                });
                newLotary
                .save()
                .then(() => {
                console.log("Lotary saved successfully");
                res.status(404).json({ message: "you are included in lotary check back tommorow for result"});
                })          
        }catch{
    console.error("user not found");
    res.status(404).json({ message: "404"});
    }
}); 
export default joinlotary;