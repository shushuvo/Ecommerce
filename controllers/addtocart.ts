import e, { Router, Request, Response } from "express";

//model schema importing section
import { Cart } from "../modles/cart";
import { Product } from "../modles/products";
import { redupdateProduct } from "../services/reduceproduct";

//varify import section
import { authMiddleware, AuthenticatedRequest } from "../ middleware/verify";

const cart = Router();

//input taking section
cart.post('/cart', authMiddleware,async (req: AuthenticatedRequest, res: Response)=> {
const body = req.body; 
const X = req.user ? JSON.parse(JSON.stringify(req.user)) : null; // Convert req.user to JSON
console.log('Request body:', body); 
//res.json({ message: 'Data received', body }); DON'T SEND MULTIPLE RESPONSE IT WILL CAUSE ERROR
        try{            
                const productlist = await Product.findOne({_id:body.productid}); // Fetch all  
                const Z = productlist ? JSON.parse(JSON.stringify(productlist)) : null; // Convert req.user to JSON 
                const pamount = Z.productammount;
                const pamounttonumber = Number(pamount);
                console.log(productlist);
                if(pamounttonumber>0){   
                // Insert a new user
                const newCart = new Cart({
                username: X.email,
                productid: body.productid,
                });
                await redupdateProduct(req,res);
                // Save the user to the database
                newCart
                .save()
                .then(() => {
                console.log("User saved successfully");
                })          } 
                            else{(console.log("ran out of stock"));
                            res.status(200).json({ message: "ran out of stock"})
                            }
                
        }catch{
    console.error("product not found");
    res.status(404).json({ message: "404"});
    }
}); 



export default cart;