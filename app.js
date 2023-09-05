const express = require("express");
const app = express();
const db = require('./db/connect');
const PORT = process.env.PORT || 80;
require("dotenv").config();


//TEST ROUTE
app.get('/',(req,res)=>{
    res.send("testroute")
})


//ROUTES
const products_route = require('./routes/productRoute');
app.use('/api/products',products_route);

const test_route = require('./routes/test');
app.use('/test',test_route);



//SERVER INIT
const start = async()=>{
    try {
        await db(process.env.MONGO_URL);
        

        app.listen(PORT,()=>{
            console.log("Server started");
        })
    } catch (error) {
        
    }
}


start();
