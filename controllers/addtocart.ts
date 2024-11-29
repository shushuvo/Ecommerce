import { Router, Request, Response } from "express";

//model schema importing section
import { Cart } from "../modles/cart";

//varify import section
import { authMiddleware, AuthenticatedRequest } from "../ middleware/verify";

const cart = Router();

//input taking section
cart.post('/cart', authMiddleware, (req: AuthenticatedRequest, res: Response)=> {
const body = req.body; 
const X = req.user ? JSON.parse(JSON.stringify(req.user)) : null; // Convert req.user to JSON
console.log('Request body:', body); 
res.json({ message: 'Data received', body }); 
                
                // Insert a new user
                const newCart = new Cart({
                username: X.email,
                productid: body.productid,
                });
    
                // Save the user to the database
                newCart
                .save()
                .then(() => {
                console.log("User saved successfully");
                })
}); 



export default cart;