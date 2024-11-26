// user.model.ts
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
},
{
  collection: "customUsersCollection", // Specify collection name here
}
);

export const User = mongoose.model("User", userSchema);
