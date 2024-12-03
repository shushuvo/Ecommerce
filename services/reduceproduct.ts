import { Request, Response } from "express";
import { Product } from "../modles/products";

export const redupdateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body; 
        const { productid } = req.body; // Extracting fields from the request body
        const theproduct = await Product.findOne({ _id: body.productid }); // Fetch one
        const willbetheproducttoint = theproduct?.productammount;
        const theproductisnumber = Number(willbetheproducttoint);
        if(theproductisnumber>0){
        const productammount = theproductisnumber - 1;
        // Find and update the product
        const updatedProduct = await Product.findByIdAndUpdate(
            productid, // ID of the product to update
            { productammount }, // Fields to update
            { new: true } // Return the updated document
        );
        // Respond with the updated product
        res.json({ message: "Product updated successfully", updatedProduct });
        }else{res.json("sorry product is out of stock")}
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "An error occurred", error });
    }
};
