import { Router, Response } from 'express';

import { Wallet } from '../modles/wallet';

import { authMiddleware, AuthenticatedRequest } from "../ middleware/verify";
const walletlist = Router();

// Fetch data from MongoDB
walletlist.get('/walletlist', authMiddleware, async (req: AuthenticatedRequest, res: Response)=> {
    const X = req.user ? JSON.parse(JSON.stringify(req.user)) : null; // Convert req.user to JSON
    try {
    const walletlist = await Wallet.find({username: X.email}); // Fetch all 
    res.status(200).json({ message: walletlist });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default walletlist;
