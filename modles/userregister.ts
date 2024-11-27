// user.model.ts
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
},
{
  collection: "register", // Specify collection name here
}
);

export const User = mongoose.model("User", userSchema);
