import { Router, Request, Response } from 'express';

//model schema importing section
import { Ifwallet } from '../modles/ifwallet';
import { Wallet } from '../modles/wallet';

import { authMiddleware, AuthenticatedRequest } from "../ middleware/verify";

const ifwallet = Router();

//user input taking section
ifwallet.post('/ifwallet', authMiddleware,async (req: AuthenticatedRequest, res: Response)=>{
    const X = req.user ? JSON.parse(JSON.stringify(req.user)) : null; // Convert req.user to JSON
    const walletlist = await Wallet.find({username: X.email}); // Fetch all 
    const Z = walletlist ? JSON.parse(JSON.stringify(walletlist)) : null; // Convert req.user to JSON
                // Insert a new user
                const newIfwallet = new Ifwallet({
                username: X.email,
                wpoint: Z.wpoint,
                });
                const ifwalletlist = await Ifwallet.find({username: X.email}); // Fetch all 
                const ZZ = ifwalletlist ? JSON.parse(JSON.stringify(ifwalletlist)) : null; // Convert req.user to JSON                
                // Save the user to the database
                if(ZZ !== "" && Number(ZZ.wpoint) > 0){
                newIfwallet
                .save()
                .then(() => {
                console.log("wallet activated");
                })
                res.json({ message: 'ifwallet active'}); 
            }else{ res.json({ message: 'ifwallet active'}); }
}); 
ifwallet.delete('/ifwalletdelt', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
    const X = req.user ? JSON.parse(JSON.stringify(req.user)) : null; // Convert req.user to JSON
    const ifwalletlist = await Ifwallet.find({username: X.email}); // Fetch all 
    const ZZ = ifwalletlist ? JSON.parse(JSON.stringify(ifwalletlist)) : null; // Convert req.user to JSON                
        // Save the user to the database
        if(ZZ !== "" && Number(ZZ.wpoint) > 0){
        await Ifwallet.deleteMany({ username: X.email,});
        res.json({ message: 'wallet deleted'}); 
        }else{ res.json({ message: 'no wallet to delete'}); }
}); 


export default ifwallet;