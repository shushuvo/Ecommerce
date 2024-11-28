import { Router} from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = "your_hardcoded_secret_key";

// Login route
import { User } from "../modles/userregister";

const loginjwt = Router();

// Fetch data from MongoDB
loginjwt.post('/login', async (req, res) => {
  try {
    const loginjwt = await User.findOne({ email: req.body.email });
                if(loginjwt){
                           // res.status(200).json(loginjwt); 
                                        if(loginjwt.password == req.body.password)
                                        {
                                         
                                          const token = jwt.sign({ email: req.body.email }, JWT_SECRET, { expiresIn: "1h" });
                                          // Set the token as an HTTP-only cookie
                                          res.cookie("token", token, 
                                          {
                                          httpOnly: true, // Prevents client-side access
                                          secure: process.env.NODE_ENV === "production", // Ensures HTTPS in production
                                          maxAge: 3600000, // 1 hour
                                          });
                                          
                                          // Send a success response
                                          res.status(200).json({ message: "Login successful" });

                                        }
                            }
                else{res.status(404).json("username or password incorrect"); }
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default loginjwt;