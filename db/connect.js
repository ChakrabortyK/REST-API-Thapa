const mongoose = require ("mongoose");

const connectdb = (uri)=>{

    try {
        console.log("DB connection req");
        return mongoose.connect(uri,{useNewUrlParser: true});
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;
