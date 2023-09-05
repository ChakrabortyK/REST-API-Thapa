const testMid =  async(req,res,next)=>{
    const object = {
        name: 'test',
        id: 1
    }

    res.object = object
    next();

}

module.exports = testMid;