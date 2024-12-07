// user.model.ts
import mongoose from "mongoose";

const lotarySchema = new mongoose.Schema({
  email: String,
},
{
  collection: "lotary", // Specify collection name here
}
);

export const Lotary = mongoose.model("Lotary", lotarySchema);
