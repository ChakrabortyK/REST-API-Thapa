const mongoose = require ("mongoose");

// const uri = "mongodb+srv://SunnyNvm:ksaulnpnayk@testproject.5pkcsfx.mongodb.net/?retryWrites=true&w=majority";
const connectdb = (uri)=>{

    try {
        console.log("DB connection req");
        return mongoose.connect(uri,{useNewUrlParser: true});
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;