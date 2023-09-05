const express = require("express");
const app = express();
const router = express.Router()
const PORT = process.env.PORT || 80;
require("dotenv").config();


function fn (req, res, next) {
    console.log('I come here')
    next()
  }
  router.get('/foo', fn, (req, res, next) => {
    console.log('I dont come here 1')
    next('router')
  })
  router.get('/foo', (req, res, next) => {
    console.log('I dont come here 2')
    next()
  })

  app.use('/foo',router, (req, res) => {
    console.log(' I come here too')
    res.end('good')
  })
//TEST ROUTE
app.get('/',(req,res)=>{
    res.send("testroute")
})







//SERVER INIT
const start = async()=>{
    try {
     
        

        app.listen(PORT,()=>{
            console.log("Server started");
        })
    } catch (error) {
        
    }
}


start();
