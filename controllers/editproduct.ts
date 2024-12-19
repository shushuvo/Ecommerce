import { Router,Response } from 'express';

// Model schema importing section
import { Product } from "../modles/products"; // Corrected "modles" to "models"

const productedit = Router();
//varify import section
import { authMiddleware, AuthenticatedRequest } from "../ middleware/admin";
// Update product section
productedit.put('/productedit',authMiddleware, (req: AuthenticatedRequest, res: Response) => {
    const { productId, productname, productammount, price, offer, offerprice } = req.body; // Extracting fields from the request body

    // Find and update the product
    Product.findByIdAndUpdate(
        productId, // ID of the product to update
        { productname, productammount, price, offer, offerprice }, // Fields to update
        { new: true } // Return the updated document
    )
        .then((updatedProduct) => {
            // Respond with the updated product
            res.json({ message: "Product updated successfully", updatedProduct });
        })
        .catch((error) => {
            console.error("Error updating product:", error);
            res.status(500).json({ message: "An error occurred", error });
        });
});

export default productedit;
