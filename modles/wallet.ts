// user.model.ts
import mongoose from "mongoose";

const WalletSchema = new mongoose.Schema({
  username: String,
  wpoint: String,
},
{
  collection: "wallet", // Specify collection name here
}
);

export const Wallet = mongoose.model("Wallet", WalletSchema);
