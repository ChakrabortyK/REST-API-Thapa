require("dotenv").config();
const connectdb = require('./db/connect');
const product = require('./models/productSchema')


const ProductsJSON = require('./products.json')


const start = async()=>{
    try {

        await connectdb(process.env.MONGO_URL);
        await product.deleteMany();
        await product.create(ProductsJSON)

        console.log(process.env.MONGO_URL);
        console.log("Data push success");
        
        
    } catch (error) {
        console.log(error)
        
    }
}

start();