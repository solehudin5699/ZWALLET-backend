const jwt = require("jsonwebtoken");

const checkToken = {
  users: (req, res, next) => {
    const bearerToken = req.header("x-access-token");
    if (!bearerToken) {
      res.json({
        status: 500,
        msg: "Please Login First",
      });
    }
    try {
      const token = bearerToken.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.decodedToken = decoded;
      next();
    } catch (err) {
      res.json({
        status: 500,
        msg: "Token is Wrong",
      });
    }
  },
};

module.exports = checkToken;
