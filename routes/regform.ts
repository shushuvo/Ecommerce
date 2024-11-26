import { Router } from 'express';

//model schema importing section
import { User } from "../modles/userregister";

const regform = Router();

//user input taking section
regform.post('/data', (req, res) => {
const body = req.body; 
console.log('Request body:', body); 
res.json({ message: 'Data received', body }); 
                
                // Insert a new user
                const newUser = new User({
                name: body.name,
                email: body.email,
                });
    
                // Save the user to the database
                newUser
                .save()
                .then(() => {
                console.log("User saved successfully");
                })
}); 



export default regform;