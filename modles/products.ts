// user.model.ts
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productname: String,
  productammount: String,
  price: String,
},
{
  collection: "product", // Specify collection name here
}
);

export const Product = mongoose.model("Product", ProductSchema);
