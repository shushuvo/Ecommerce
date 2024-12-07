//delete collections based on users 
import { Router, Response } from 'express';
import { Order } from '../modles/orderlist';

import { authMiddleware, AuthenticatedRequest } from "../ middleware/admin";
const orderdelt = Router();
// Fetch data from MongoDB
orderdelt.delete('/orderdelt', authMiddleware, async (req: AuthenticatedRequest, res: Response)=> {
    try 
    {
    const allorderlist = await Order.deleteMany({username:req.body.username}); // Fetch all 
    res.status(200).json(req.body.username);
    } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default orderdelt;
