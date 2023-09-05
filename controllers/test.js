const testResult = async(req,res)=> {
    await res.json(res.object);
    // console.log("test result sent");
}

module.exports = testResult;