import { Router, Response} from "express";

import { Product } from "../modles/products";

const productdelt = Router();
//varify import section
import { authMiddleware, AuthenticatedRequest } from "../ middleware/admin";
// Fetch data from MongoDB
productdelt.delete('/productdelt',authMiddleware, async  (req: AuthenticatedRequest, res: Response)=> {
  try {
                const theproduct = await Product.findOne({ _id: req.body.id });
                const Z = req.user ? JSON.parse(JSON.stringify(req.user)) : null; // Convert req.user to JSON
                if(Z){ 
                               await Product.deleteOne({ _id: req.body.id });
                               // Send a success response
                               res.status(200).json({ message: "delete successful" });              
                               }
                else{res.status(404).json("product not found"); }
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default productdelt;