import { Router, Response } from 'express';
import { Order } from '../modles/orderlist';
import { samorder } from '../services/ordersumary';

import { authMiddleware, AuthenticatedRequest } from "../ middleware/admin";
const orderlist = Router();
const userarray: any[] =[]
// Fetch data from MongoDB
orderlist.get('/orderlist', authMiddleware, async (req: AuthenticatedRequest, res: Response)=> {
    try 
    {
    const allorderlist = await Order.find(); // Fetch all 
    const Y = allorderlist ? JSON.parse(JSON.stringify(allorderlist)) : null; // Convert req.user to JSON
    for (let i = 0; i < Y.length; i++) {
                                       userarray.push(Y[i].username); 
                                       }
    // Create a Set to remove duplicates, then convert it back to an array
    const uniqueArray = [...new Set(userarray)];                                      
    // Sort the array
    uniqueArray.sort((a, b) => a - b); 
    console.log(uniqueArray);
   // for (let i = 0; i < uniqueArray.length; i++) {
                                                 const oneorderlist = await Order.find({username: uniqueArray[0]}); // Fetch all 
                                                 const Z = oneorderlist ? JSON.parse(JSON.stringify(oneorderlist)) : null; // Convert req.user to JSON                   
                                                 console.log(Z);
                                                 await samorder(Z, req, res);
                                          //       }
    } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default orderlist;
