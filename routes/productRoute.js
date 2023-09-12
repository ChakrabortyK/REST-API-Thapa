const express = require('express');
const router = express.Router();


//MODELS
const Products = require('../models/productSchema')

//CONTROLLERS
const {getallproducts,getallproductstest} = require("../controllers/productController");

//MIDDLEWARES
const getPaginatedResults = require("../middleware/paginationMiddleware");


router.route('/').get(getallproducts);
router.route('/test').get(getallproductstest)

// router.route('/pagination').get(getPaginatedResults(Products),paginated)


module.exports = router;