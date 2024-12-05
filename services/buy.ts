import { Router, Response} from "express";

import { Cart } from "../modles/cart";
import { Order } from "../modles/orderlist";

const buyall = Router();

//varify import section
import { authMiddleware, AuthenticatedRequest } from "../ middleware/verify";

// Fetch data from MongoDB
buyall.post('/buyall', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
const X = req.user ? JSON.parse(JSON.stringify(req.user)) : null; // Convert req.user to JSON
  try {
                const cartinfo = await Cart.find({ username: X.email});
                const Z = cartinfo ? JSON.parse(JSON.stringify(cartinfo)) : null; // Convert req.user to JSON
                if(Z){ 
                              for (let i = 0; i < Z.length; i++) {
                                await Cart.deleteOne({ username: Z[i].email });
                                // Insert a new order
                                const newOrder = new Order({
                                username: X.email,
                                productid: Z[i].productid,
                                });
        
                                // Save the user to the database
                                newOrder
                                .save()
                                .then(() => {
                                console.log("order saved successfully");
                                })
                            }res.status(200).json("order is made ^_^ ");                                     
                     }
                else{res.status(404).json("cart not found"); }
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default buyall;