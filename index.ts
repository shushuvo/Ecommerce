//starting server
//connecting with mongodb


//rout importing section
import routes from './routes/rout';
import regform from './routes/regform';


import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';

const app = express();
app.listen(3000,()=>{console.log("server_running")});

mongoose.connect("mongodb+srv://petdoe4:thisismyworkspace@cluster0.qvxh7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

//to read request body
app.use(bodyParser.json());


//rout calling section
app.use('/', routes);
app.use('/', regform);
