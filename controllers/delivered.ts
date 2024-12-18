//delete collections based on users 
import { Router, Response } from 'express';
import { Order } from '../modles/orderlist';
import { deliverifused } from '../wallet/deliverifused';

import { authMiddleware, AuthenticatedRequest } from "../ middleware/admin";
const orderdelt = Router();
// Fetch data from MongoDB
orderdelt.delete('/orderdelt', authMiddleware, async (req: AuthenticatedRequest, res: Response)=> {
  const X = req.user ? JSON.parse(JSON.stringify(req.user)) : null; // Convert req.user to JSON
    try 
    {
    await deliverifused(X,req,res);
    const allorderlist = await Order.deleteMany({username:req.body.username}); // Fetch all 
    res.status(200).json(req.body.username);
    } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default orderdelt;
