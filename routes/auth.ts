import { Router} from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
//import { authMiddleware, AuthenticatedRequest } from "../middlewares/authMiddleware";


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
                                          res.status(200).json("login successfull"); 
                                        }
                            }
                else{res.status(404).json("username or password incorrect"); }
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default loginjwt;