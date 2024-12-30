//delete collections based on users 
import { Router, Response } from 'express';
import { Order } from '../modles/orderlist';
import { deliverifused } from '../wallet/deliverifused';

import { authMiddleware, AuthenticatedRequest } from "../ middleware/admin";
const orderdelt = Router();
// Fetch data from MongoDB
orderdelt.delete('/orderdelt', authMiddleware, async (req: AuthenticatedRequest, res: Response)=> {
  const x = { email: req.body.username};
  const X = x ? JSON.parse(JSON.stringify(x)) : null; // Convert req.user to JSON
  console.log(X);
    try 
    {
    const allorderlist = await Order.deleteMany({username:req.body.username}); // Fetch all 
    await deliverifused(X,req,res);
    res.status(200).json(X);
    } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default orderdelt;
