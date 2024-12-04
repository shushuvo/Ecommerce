import { Router, Response } from 'express';
import { Cart } from "../modles/cart";
import { samcart } from '../services/cartsumary';

import { authMiddleware, AuthenticatedRequest } from "../ middleware/verify";
const cartlist = Router();

// Fetch data from MongoDB
cartlist.get('/cartlist', authMiddleware, async (req: AuthenticatedRequest, res: Response)=> {
    const X = req.user ? JSON.parse(JSON.stringify(req.user)) : null; // Convert req.user to JSON
    try {
    const cartlist = await Cart.find({username: X.email}); // Fetch all 
    const Z = cartlist ? JSON.parse(JSON.stringify(cartlist)) : null; // Convert req.user to JSON
    await samcart(Z, req, res);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default cartlist;
