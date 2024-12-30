import e, { Router, Request, Response } from "express";

import { Lotary } from "../modles/lotary";
import { Wallet } from "../modles/wallet";
//varify import section
import { authMiddleware, AuthenticatedRequest } from "../ middleware/verify";

const withdraw = Router();

//input taking section
withdraw.post('/withdraw', authMiddleware,async (req: AuthenticatedRequest, res: Response)=> {
const X = req.user ? JSON.parse(JSON.stringify(req.user)) : null; // Convert req.user to JSON
        try{            
                const Z = await Wallet.findOne({username:X.email});
                const XX = Z ? JSON.parse(JSON.stringify(Z)) : null; // Convert req.user to JSON
                const wpoint = XX.wpoint;
                await Wallet.deleteMany({ username: X.email,});
                // Insert a new lotary
                const newLotary = new Lotary({
                email: X.email,
                wpoint: wpoint,
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
export default withdraw;