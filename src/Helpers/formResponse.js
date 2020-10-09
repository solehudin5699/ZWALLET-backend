const responseResult = {
  success: (res, data) => {
    const responseObject = {
      success: true,
      status: 200,
      data: {
        ...data,
      },
    };
    res.json(responseObject);
  },

  getContactSuccess: (req, res, data) => {
    const { name, sortBy, orderBy, page, limit } = req.query;
    const currentPage = Number(page);
    const numLimit = Number(limit);
    const lengthDataAll = data.dataAll.length;
    const lengthData = data.data.length;
    const totalPageData = Math.ceil(lengthData / numLimit);
    const totalPage = Math.ceil(lengthDataAll / numLimit);
    const prevPage =
      currentPage == 1
        ? ""
        : `/contact?name=${name}&sortBy=${sortBy}&orderBy=${orderBy}&limit=${numLimit}&page=${
            currentPage - 1
          }`;
    const nextPage =
      currentPage < totalPage
        ? `/contact?name=${name}&sortBy=${sortBy}&orderBy=${orderBy}&limit=${numLimit}&page=${
            currentPage + 1
          }`
        : "";
    const responseObject = {
      success: true,
      status: 200,
      data: data.data,
      pageInfo: {
        currentPage,
        limit: numLimit,
        prevPage,
        nextPage,
      },
    };
    res.json(responseObject);
  },
  getTransactionSuccess: (req, res, data) => {
    const { sortBy, orderBy, page, limit } = req.query;
    const { id } = req.params;
    const currentPage = Number(page);
    const numLimit = Number(limit);
    const lengthAllData = Number(data.dataAll.length);
    // const lengthData = Number(data.data.length);
    const totalPage = Math.ceil(lengthAllData / numLimit);
    console.log(totalPage);
    const prevPage =
      currentPage == 1
        ? ""
        : `/transaction/${id}?sortBy=${sortBy}&orderBy=${orderBy}&limit=${numLimit}&page=${
            currentPage - 1
          }`;
    const nextPage =
      currentPage < totalPage
        ? `/transaction/${id}?sortBy=${sortBy}&orderBy=${orderBy}&limit=${numLimit}&page=${
            currentPage + 1
          }`
        : "";
    const responseObject = {
      success: true,
      status: 200,
      data: data.data,
      pageInfo: {
        currentPage,
        limit: numLimit,
        prevPage,
        nextPage,
      },
    };
    res.json(responseObject);
  },
  error: (res, error) => {
    const responseObject = {
      success: false,
      status: 500,
      error: error,
    };
    res.json(responseObject);
  },
};

module.exports = responseResult;
