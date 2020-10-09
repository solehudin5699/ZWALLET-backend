//Package import
const express = require("express");
const transactionRouter = express.Router();
//Filepath import
const transactionController = require("../Controllers/transaction");
const checkToken = require("../Helpers/Middleware/checkToken");
const dbConnect = require("../Configs/dbConnect");
//IMPLEMENTATION
//PUBLIC
//#add transaction
transactionRouter.post("/", transactionController.addTransaction);
//#get transaction
transactionRouter.get("/:id/", transactionController.getTransaction);

module.exports = transactionRouter;
