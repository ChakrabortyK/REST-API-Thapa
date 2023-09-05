const Products = require('../models/productSchema')

const getallproducts = async(req,res)=>{

    //GETTING THE QUERY PARAMETERS
    const {company,name,price,featured,sort} = req.query;
    
    
    //IF PRESENT IN QUERY THEN PUSH THE QUERY FIELD INTO QUERYOBJ 
    let queryObject = {};
    if(company){
        queryObject.company = { $regex: company, $options: "i"}
    }
    if(price){
        queryObject.price = price
    }
    if(featured){
        queryObject.featured = featured
    }
    if(name){
        queryObject.name = { $regex: name, $options: "i"}
    }

    //SORTING OF FIELDS SEPERATED BY COMMA IN REQ.QUERY
    let findQuery = Products.find(queryObject);
    if (sort){
        let sortD = sort.replace(","," ");
        findQuery.sort(sortD);//IF THERE IS SORT IN QUERY, WE APPEND SORT() TO THE RESPONSE QUERY
    }    


    const data = await findQuery ;
    res.status(200).json(data)
}


//TESTING
const getallproductstest = async(req,res)=>{
    const {sort,select} = req.query;
    let queryObject = {};
    
    let findQuery = Products.find(queryObject);
    if (sort){
        let sortD = sort.replace(","," ");
        findQuery.sort(sortD);
    }    
    if (select){//https://mongoosejs.com/docs/api/query.html#Query.prototype.select()
        // let selectQ = select.replace(","," ");
        let selectQ = select.split(',').join(' ');

        findQuery.select(selectQ);
    }    

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 5;
    let skip = (page-1)*limit;
    findQuery = findQuery.skip(skip).limit(limit);


    const data = await findQuery ;
    res.status(200).json(data)
}

const paginated = async(req,res)=>{
    res.send("Pagination endpoint")
}

module.exports = {getallproducts,getallproductstest,paginated};