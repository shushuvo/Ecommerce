import { Router, Request, Response } from 'express';
import jwt from "jsonwebtoken";

import { Winner } from '../modles/winner';
import { Lotary } from '../modles/lotary';

import { authMiddleware, AuthenticatedRequest } from "../ middleware/admin";

const JWT_SECRET = "your_hardcoded_secret_key";
const userarray: any[] =[]
const lotaryresult = Router();

//rendering page section

lotaryresult.get('/lotaryresult', async (req, res) => {
    const lotarywinners = await Winner.find(); // Fetch all 
    const Y = lotarywinners ? JSON.parse(JSON.stringify(lotarywinners)) : null; // Convert req.user to JSON
    res.status(404).json(Y);
});

lotaryresult.get('/winnerselector',authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
    await Winner.deleteMany();
    const lotaryperticipents = await Lotary.find(); // Fetch all 
    await Lotary.deleteMany();
    const X = lotaryperticipents ? JSON.parse(JSON.stringify(lotaryperticipents)) : null; // Convert req.user to JSON
    for (let i = 0; i < X.length; i++) {
        userarray.push(X[i].email); 
        }
    const randomIndex = Math.floor(Math.random() * userarray.length);
    // Pick the random item
    const randomItem = userarray[randomIndex];    
    try{            
        // Insert a new lotary
        const newWinner = new Winner({
        username: randomItem,
        position: "1st",
        });
        newWinner
        .save()
        .then(() => {
        console.log("winner saved successfully");
        res.status(404).json({ message: randomItem});
        })          
}catch{
console.error("user not found");
res.status(404).json({ message: "404"});
}
});

export default lotaryresult;