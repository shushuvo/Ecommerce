//make it a export function order list will run it if ifwallet has data in it
//reduce the wpoint from total cost and response the new cost

import { Router, Response, Request } from 'express';
import { Ifwallet } from '../modles/ifwallet';
import { Wallet } from '../modles/wallet';
// Fetch data from MongoDB
export const ifused = async (fullfinalresult: any[],req:Request, res: Response)=> {
    const pricew: any[] =[]
    const wfinel: any[] =[]
    try {
        const ZZ = fullfinalresult ? JSON.parse(JSON.stringify(fullfinalresult)) : null; // Convert req.user to JSON   
        const ifwalletlist = await Ifwallet.find({username: ZZ[0].customer}); // Fetch all 
        const Y = ifwalletlist ? JSON.parse(JSON.stringify(ifwalletlist)) : null; // Convert req.user to JSON                
        const wwpoint = Number(Y[0].wpoint);      
        console.log(ZZ);
        console.log(Y[0].wpoint);
        if (Y !== ""){
            for (let i = 0; i < ZZ.length; i++) {
                const a = Number(ZZ[i].price);
                pricew.push(a);
            }  
            console.log(pricew);
            // Using reduce to sum up all numbers
            const totalpricew = pricew.reduce((sum, value) => sum + value, 0);
            console.log(totalpricew);
           if(Number(totalpricew) >= Number(wwpoint)){
            const b = totalpricew-wwpoint;
            wfinel.push({totalprice:b, customer:ZZ[1].customer})
            console.log(wfinel);
            console.log("cost reduced");}else{const b = wwpoint -totalpricew
                                             await Wallet.deleteMany({ username: ZZ[1].customer });
                                             // Insert a new user
                                             const newWallet = new Wallet({
                                             username: ZZ[1].customer,
                                             wpoint: b,
                                             });
                                             newWallet
                                             .save()
                                             .then(() => {
                                             console.log("wallet activated");
                                             wfinel.push({totalpricew:"00.0", customer:ZZ[1].customer})
                                             })
                                             }
        }else{console.log("no wallet point")
            // Using reduce to sum up all numbers
            const totalpricew = pricew.reduce((sum, value) => sum + value, 0);            
            wfinel.push({totalpricew:totalpricew, customer:ZZ[1].customer})
        }
        return(wfinel);
                                              
  //res.status(200).json(wfinel);
  } 
  catch (error) {
  console.error('Error fetching users:', error);
  res.status(500).json({ message: 'Internal server error' });
  }
};