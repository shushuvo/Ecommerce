import { Router } from 'express';
import { Product } from "../modles/products";

const productlist = Router();

// Fetch data from MongoDB
productlist.get('/productlist', async (req, res) => {
  try {
    const productlist = await Product.find(); // Fetch all 
    res.status(200).json(productlist); 
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default productlist;
