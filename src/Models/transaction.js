const dbConnect = require("../Configs/dbConnect");

const transactionModel = {
  addTransaction: (body) => {
    return new Promise((resolve, reject) => {
      let selectBalanceSender =
        "SELECT username, name, balance from users WHERE user_id=?";
      dbConnect.query(
        selectBalanceSender,
        [body.id_sender],
        (err, dataSender) => {
          if (err) {
            reject(err);
          } else {
            let selectBalanceReceiver =
              "SELECT balance from users WHERE user_id=?";
            dbConnect.query(
              selectBalanceReceiver,
              [body.id_receiver],
              (error, dataReceiver) => {
                if (error) {
                  reject(error);
                } else {
                  let balanceSender =
                    Number(dataSender[0].balance) - Number(body.nominal);
                  let balanceReceiver =
                    Number(dataReceiver[0].balance) + Number(body.nominal);
                  let addTransaction = "INSERT INTO transactions SET ?";
                  dbConnect.query(
                    addTransaction,
                    body,
                    (errorAdd, resultAdd) => {
                      if (errorAdd) {
                        reject(errorAdd);
                      } else {
                        let updateUserReceiver =
                          "UPDATE users AS receiver SET receiver.balance=" +
                          balanceReceiver +
                          " WHERE receiver.user_id=" +
                          body.id_receiver;
                        dbConnect.query(
                          updateUserReceiver,
                          (errorReceiver, resultReceiver) => {
                            if (errorReceiver) {
                              reject(errorReceiver);
                            } else {
                              let updateUserSender =
                                "UPDATE users AS sender SET sender.balance=" +
                                balanceSender +
                                " WHERE sender.user_id=" +
                                body.id_sender;
                              dbConnect.query(
                                updateUserSender,
                                (errorSender, resultSender) => {
                                  if (errorSender) {
                                    reject(errorSender);
                                  } else {
                                    resolve({
                                      ...body,
                                      usernameSender: dataSender[0].username,
                                      nameSender: dataSender[0].name,
                                    });
                                  }
                                }
                              );
                            }
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    });
  },

  getTransaction: (params, query) => {
    return new Promise((resolve, reject) => {
      const { id } = params;
      const { sortBy, orderBy, page, limit } = query;
      const offset = (page - 1) * limit;
      let selectAllQuery = `SELECT * FROM transactions WHERE id_receiver=${id} OR id_sender=${id}`;
      dbConnect.query(selectAllQuery, (error, dataAll) => {
        if (error) {
          reject(error);
        } else {
          const queryString = `SELECT users.user_id, users.username,users.name, users.image, transactions.id_transaction , transactions.id_receiver,transactions.id_sender, transactions.nominal, transactions.type_transaction, transactions.transaction_date as date FROM users JOIN transactions ON users.user_id = transactions.id_sender WHERE transactions.id_receiver =${id} UNION SELECT users.user_id, users.username,users.name, users.image, transactions.id_transaction , transactions.id_receiver,transactions.id_sender, transactions.nominal, transactions.type_transaction, transactions.transaction_date as date FROM users JOIN transactions ON users.user_id = transactions.id_receiver WHERE transactions.id_sender = ${id} ORDER BY ${sortBy} ${orderBy} LIMIT ${limit} OFFSET ${offset} `;
          dbConnect.query(queryString, (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve({ data, dataAll });
            }
          });
        }
      });
    });
  },
};

module.exports = transactionModel;
