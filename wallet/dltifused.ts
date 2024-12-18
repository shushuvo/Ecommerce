//make it a export function buyall will run it if ifwallet has data in it 
//delete wallet

import { Router, Response, Request } from 'express';
import { Ifwallet } from '../modles/ifwallet';
import { Wallet } from '../modles/wallet';

// Fetch data from MongoDB
export const dltifused = async (X: any[],req:Request, res: Response)=> {
    try {
        const ZZ = X ? JSON.parse(JSON.stringify(X)) : null; // Convert req.user to JSON   
        const ifwalletlist = await Ifwallet.find({username: ZZ.email}); // Fetch all 
        const Y = ifwalletlist ? JSON.parse(JSON.stringify(ifwalletlist)) : null; // Convert req.user to JSON                
        if (Y !== ""){
            await Wallet.deleteMany({ username: ZZ.email,});
            console.log("wallet deleted");
        }else{console.log("no need to delete wallet")}
                                              
  //res.status(200).json(fullfinalresult);
  } 
  catch (error) {
  console.error('Error fetching users:', error);
  res.status(500).json({ message: 'Internal server error' });
  }
};


