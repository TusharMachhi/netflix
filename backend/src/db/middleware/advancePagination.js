const advancePagination = (model, populate) => {
  return async (req, res, next) => {
    
   
    const queryObj = { ...req.query };

    //remove fields so it doesnt query in db

    const excludeFields = ["limit", "sort", "page", "select", "fields","type"];
    excludeFields.forEach((val) => delete queryObj[val]);
    

    //Advance filttering

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt|i|regex|options)\b/g, (match) => `$${match}`);
    

    let query = model.find(JSON.parse(queryStr))
    console.log('querystr',JSON.parse(queryStr));

    //sorting
    if (req.query.sort) {
      const Mysort = req.query.sort.split(",").join(" ");
      query = query.sort(Mysort);
    } else {
      query = query.sort("-createdAt");

    }

    


   // select specific fields
    if (req.query.select) {
      console.log(req.query.select);
      const selFields = req.query.select.split(",").join(" ");
      console.log(selFields);
      query = query.select(selFields);
    } else {
      query = query.select("-createdAt");
    }

    
    //pagination

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const totalDoc = await model.countDocuments();

    query = query.skip(startIndex).limit(limit);

    const pagination = {};
    if (endIndex < totalDoc) {
      pagination.next = {
        page: page + 1,
        limit,
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit,
      };
    }

    //exicute query
    
    
    
    const movies = await query;
    res.myPagination = {
      count: movies.length,
      pagination,
      data: movies,
    };
    
    next();

  };
};
export { advancePagination };
