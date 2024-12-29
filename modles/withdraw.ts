// user.model.ts
import mongoose from "mongoose";

const withdrawSchema = new mongoose.Schema({
  email: String,
  wpoint: String,
},
{
  collection: "withdraw", // Specify collection name here
}
);

export const Withdraw = mongoose.model("Withdraw", withdrawSchema);