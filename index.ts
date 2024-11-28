//starting server
//connecting with mongodb


//rout importing section
import routes from './routes/rout';
import regform from './routes/regform';
import product from './routes/product';
import productlist from './routes/productlist';
import loginjwt from './routes/auth';
import protectedrout from './routes/protected';

//dependencies
import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";


const app = express();
app.listen(3000,()=>{console.log("server_running")});

mongoose.connect("mongodb+srv://petdoe4:thisismyworkspace@cluster0.qvxh7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

//to read request body
app.use(bodyParser.json());

//to parse cookies
app.use(cookieParser());

//rout calling section
app.use('/', routes);
app.use('/', regform);
app.use('/', product);
app.use('/', productlist);
app.use('/', loginjwt);
app.use('/', protectedrout);
