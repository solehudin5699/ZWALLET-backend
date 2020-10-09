//Package import
const express = require("express");

//Filepath import
// const walletRouter = require("./wallet");
// const orderRouter = require("./order");
const authRouter = require("./auth");
const contactRouter = require("./contact");
const transactionRouter = require("./transaction");
// const checkToken = require("../Helpers/Middleware/checkToken");
//Declaration
const indexRouter = express.Router();

//PUBLIC ROUTE
indexRouter.use("/auth", authRouter);
indexRouter.use("/contact", contactRouter);
indexRouter.use("/transaction", transactionRouter);

//Export
module.exports = indexRouter;
