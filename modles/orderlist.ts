// user.model.ts
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  username: String,
  productid: String,
},
{
  collection: "order", // Specify collection name here
}
);

export const Order = mongoose.model("Order", OrderSchema);
//make the product id uniqe field