import { Router } from 'express';

//model schema importing section
import { Product } from "../modles/products";

const product = Router();

//input taking section
product.post('/productupdate', (req, res) => {
const body = req.body; 
console.log('Request body:', body); 
res.json({ message: 'Data received', body }); 
                
                // Insert a new user
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