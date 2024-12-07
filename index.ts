//starting server
//connecting with mongodb


//rout importing section
import routes from './routes/rout';
import regform from './routes/regform';
import product from './controllers/product';
import productlist from './controllers/productlist';
import loginjwt from './routes/auth';
import protectedrout from './routes/protected';
import cart from './controllers/addtocart';
import productdelt from './controllers/deleteproduct';
import cartdelt from './controllers/deletefromcart';
import productedit from './controllers/editproduct';
import cartlist from './controllers/listproductofcart';
import buyall from './services/buy';
import orderlist from './controllers/ordrelist';
import joinlotary from './lotary/takepartinlotary';
import lotaryresult from './lotary/result';
import listofperticipents from './lotary/listofperticipents';

//dependencies
import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import orderdelt from './controllers/delivered';

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
app.use('/',cart);
app.use('/',productdelt);
app.use('/',cartdelt);
app.use('/', productedit);
app.use('/', cartlist);
app.use('/', buyall);
app.use('/',orderlist);
app.use('/',orderdelt);
app.use('/', joinlotary);
app.use('/',lotaryresult);
app.use('/',listofperticipents); 