// user.model.ts
import mongoose from "mongoose";

const IfwalletSchema = new mongoose.Schema({
  username: String,
  wpoint: String,
},
{
  collection: "ifwallet", // Specify collection name here
}
);

export const Ifwallet = mongoose.model("Ifwallet", IfwalletSchema);
