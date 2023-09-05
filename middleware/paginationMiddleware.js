const pageSize = 4;

async function paginationMiddleware(Model) {
  // Default page size

  return async(req, res, next) => {
    const { page } = req.query;

    // Parse page value to int
    const currentPage = parseInt(page) || 1;

    // Calculate skip value
    const skip = (currentPage-1) * pageSize;

    // Create pagination input and output objects
    const paginationInput = {
      firstRequestTimeStamp : new Date(),
      page: currentPage,
      pageSize: pageSize,
    };

    const paginationOutput = {
      limit: pageSize,
      skip: skip,
    };

    // Create pagination for frontend objects
    const paginateNextPage = {
      firstRequestTimeStamp: new Date(),
      current: currentPage+1,
      prev: currentPage,
      next: currentPage+2 ,
      pageSize: pageSize,
      
    };

    const paginatePrevPage = {
      firstRequestTimeStamp:new Date(),
      current: currentPage-1,
      prev: currentPage-2,
      next: currentPage,
      pageSize: pageSize,
    };

    // Attach pagination objects to the request object
    res.paginationInput = paginationInput;
    res.paginationOutput = paginationOutput;
    res.paginateNextPage = paginateNextPage;
    res.paginatePrevPage = paginatePrevPage;


    let queryObject = {};
    let findQuery = Model.find(queryObject);
    findQuery = findQuery.skip(skip).limit(pageSize);


    data = await findQuery ;

    res.obj = data
    console.log(res.obj);
    next(); // Move to the next middleware
  }
}

module.exports = paginationMiddleware;