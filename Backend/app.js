const express=require('express');
const dotenv=require('dotenv');
const path=require('path');
const app=express();
const cors=require('cors');
dotenv.config({path:path.join(__dirname,'config','config.env')})
const product=require('./Router/product');
const order=require('./Router/order');
const connectDatabase=require('./config/connectDataBase')

connectDatabase();
app.use(cors());
app.use(express.json());
app.use('/api/v1/product',product);
app.use('/api/v1',order);

app.listen(process.env.PORT,()=>{
  console.log(`The server port ${process.env.PORT} is successfully in ${process.env.NODE_ENV}`);
})
