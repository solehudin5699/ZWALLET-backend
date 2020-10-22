const transactionModel = require("../Models/transaction");
const responseResult = require("../Helpers/formResponse");
const { io } = require("../socket/socket");

const transactionController = {
  addTransaction: (req, res) => {
    transactionModel
      .addTransaction(req.body)
      .then((data) => {
        responseResult.success(res, data);
        const title = "Transaction";
        let sender;
        if (data.nameSender) {
          sender = data.nameSender;
        } else {
          sender = data.usernameSender;
        }
        let message = `${sender} has transferred you Rp${req.body.nominal}`;
        io.to(Number(req.body.id_receiver)).emit("transaction", {
          title,
          message,
        });
      })
      .catch((err) => {
        responseResult.error(res, err);
      });
  },
  getTransaction: (req, res) => {
    transactionModel
      .getTransaction(req.params, req.query)
      .then((data) => {
        responseResult.getTransactionSuccess(req, res, data);
      })
      .catch((err) => {
        responseResult.error(res, err);
      });
  },
};

module.exports = transactionController;
