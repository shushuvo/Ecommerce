import { Router } from 'express';
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_hardcoded_secret_key";

const router = Router();

//rendering page section

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

router.get('/s', (req, res) => {
  res.send('Helsssssssslo, world!');
});

router.get('/logout', (req, res) => {
  const token = jwt.sign({}, JWT_SECRET, { expiresIn: "1ms" });
  // Set the token as an HTTP-only cookie
  res.cookie("token", token, 
  {
  httpOnly: true, // Prevents client-side access
  secure: process.env.NODE_ENV === "production", // Ensures HTTPS in production
  maxAge: 1, // short time
  });
  
  res.send('logged out');
});

export default router;