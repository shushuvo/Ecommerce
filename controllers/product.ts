import { Router,Response } from 'express';

//model schema importing section
import { Product } from "../modles/products";

const product = Router();
//varify import section
import { authMiddleware, AuthenticatedRequest } from "../ middleware/admin";
//input taking section
product.post('/productupdate', authMiddleware,(req: AuthenticatedRequest, res: Response) => {
const body = req.body; 
console.log('Request body:', body); 
res.json({ message: 'Data received', body }); 
                
                // Insert a new product
                const newProduct = new Product({
                productname: body.productname,
                productammount: body.productammount,
                });
    
                // Save the user to the database
                newProduct
                .save()
                .then(() => {
                console.log("User saved successfully");
                })
}); 


export default product;