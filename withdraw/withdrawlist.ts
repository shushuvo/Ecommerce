import { Router, Response } from 'express';
import { Withdraw } from '../modles/withdraw';
import { authMiddleware, AuthenticatedRequest } from "../ middleware/admin";
const withdrawlist = Router();

// Fetch data from MongoDB
withdrawlist.get('/withdrawlist', authMiddleware, async (req: AuthenticatedRequest, res: Response)=> {
  try {
    const list = await Withdraw.find(); // Fetch all 
    res.status(200).json(list); 
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
withdrawlist.delete('/deltwithdraw', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
        await Withdraw.deleteOne({ email: req.body.username,});
        res.json({ message: 'wallet deleted'}); 
}); 


export default withdrawlist;
