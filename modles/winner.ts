// user.model.ts
import mongoose from "mongoose";

const winnerSchema = new mongoose.Schema({
  username: String,
  psition: String,
},
{
  collection: "winner", // Specify collection name here
}
);

export const Winner = mongoose.model("Winner", winnerSchema);
//make the product id uniqe field