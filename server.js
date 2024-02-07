const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./routes/User');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api",User);

const connectToDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/User');
        console.log('connect to mongoDB');
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

connectToDB();

const port = 4000;
app.listen(port,()=>{
    console.log("Server is running at PORT = 4000");
});