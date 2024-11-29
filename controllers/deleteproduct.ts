import { Router} from "express";

import { Product } from "../modles/products";

const productdelt = Router();

// Fetch data from MongoDB
productdelt.delete('/productdelt', async (req, res) => {
  try {
    const productdelt = await Product.deleteOne({ _id: req.body.id });
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

export default productdelt;