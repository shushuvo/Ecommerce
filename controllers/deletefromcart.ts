import { Router, Response} from "express";

import { Cart } from "../modles/cart";

const cartdelt = Router();

//varify import section
import { authMiddleware, AuthenticatedRequest } from "../ middleware/verify";

// Fetch data from MongoDB
cartdelt.delete('/cartdelt', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
const X = req.user ? JSON.parse(JSON.stringify(req.user)) : null; // Convert req.user to JSON
  try {
    const productdelt = await Cart.deleteOne({ username: X.email, productid: req.body.productid });
                if(productdelt){ 
                               // Send a success response
                               res.status(200).json({ message: "delete successful" });              
                               }
                else{res.status(404).json("product not found"); }
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default cartdelt;