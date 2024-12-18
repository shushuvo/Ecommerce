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
        const ifwalletlist = await Ifwallet.find({username: ZZ[1].customer}); // Fetch all 
        const Y = ifwalletlist ? JSON.parse(JSON.stringify(ifwalletlist)) : null; // Convert req.user to JSON                
        const wwpoint = Number(Y.wpoint);
        if (Y !== ""){
            for (let i = 0; i < ZZ.length; i++) {
                const a = Number(ZZ[i].price);
                pricew.push(a);
            }
            // Using reduce to sum up all numbers
            const totalpricew = pricew.reduce((sum, value) => sum + value, 0);
            if(totalpricew>=wwpoint){
            const b = totalpricew-wwpoint;
            wfinel.push({totalpricew:b, customer:ZZ[1].customer})
            console.log("cost reduced");}else{const b = wwpoint -totalpricew
                                // Insert a new user
                                const newIfwallet = new Ifwallet({
                                username: ZZ[1].customer,
                                wpoint: b,
                                });
                                newIfwallet
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
                                              
  //res.status(200).json(fullfinalresult);
  } 
  catch (error) {
  console.error('Error fetching users:', error);
  res.status(500).json({ message: 'Internal server error' });
  }
};


