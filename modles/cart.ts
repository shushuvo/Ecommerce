// user.model.ts
import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  username: String,
  productid: String,
},
{
  collection: "cart", // Specify collection name here
}
);

export const Cart = mongoose.model("Cart", CartSchema);
