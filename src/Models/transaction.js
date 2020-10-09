const bodyParser = require("body-parser");
const dbConnect = require("../Configs/dbConnect");

// const transactionModel = {
//   addTransaction: (body) => {
//     return new Promise((resolve, reject) => {
//       let selectBalanceSender = "SELECT balance from users WHERE user_id=?";
//       dbConnect.query(
//         selectBalanceSender,
//         [body.id_sender],
//         (err, dataSender) => {
//           if (err) {
//             reject(err);
//           } else {
//             let selectBalanceReceiver =
//               "SELECT balance from users WHERE user_id=?";
//             dbConnect.query(
//               selectBalanceReceiver,
//               [body.id_receiver],
//               (error, dataReceiver) => {
//                 if (error) {
//                   reject(error);
//                 } else {
//                   let balanceSender =
//                     Number(dataSender[0].balance) - Number(body.nominal);
//                   let balanceReceiver =
//                     Number(dataReceiver[0].balance) + Number(body.nominal);
//                   let startTrans = "START TRANSACTION; ";
//                   let addTransaction =
//                     "INSERT INTO testing SET id_sender=" +
//                     body.id_sender +
//                     ", " +
//                     "id_receiver=" +
//                     body.id_receiver +
//                     ", " +
//                     "nominal=" +
//                     body.nominal +
//                     ", type_transaction=" +
//                     "'" +
//                     body.type_transaction +
//                     "'" +
//                     ", notes=" +
//                     "'" +
//                     body.notes +
//                     "'" +
//                     "; ";
//                   let updateUserReceiver =
//                     "UPDATE users AS receiver SET receiver.balance=" +
//                     balanceReceiver +
//                     " WHERE receiver.user_id=" +
//                     body.id_receiver +
//                     "; ";
//                   let updateUserSender =
//                     "UPDATE users AS sender SET sender.balance=" +
//                     balanceSender +
//                     " WHERE sender.user_id=" +
//                     body.id_sender +
//                     "; ";
//                   let commit = "COMMIT;";
//                   const addQuery =
//                     startTrans +
//                     addTransaction +
//                     updateUserSender +
//                     updateUserReceiver +
//                     commit;
//                   dbConnect.query(addQuery, (errorTrans, result) => {
//                     if (!errorTrans) {
//                       resolve(result);
//                     } else {
//                       reject(errorTrans);
//                     }
//                   });
//                 }
//               }
//             );
//           }
//         }
//       );
//     });
//   },
// };

// module.exports = transactionModel;
const transactionModel = {
  addTransaction: (body) => {
    return new Promise((resolve, reject) => {
      let selectBalanceSender =
        "SELECT username, balance from users WHERE user_id=?";
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
                  // let addTransaction =
                  //   "INSERT INTO transactions SET id_sender=" +
                  //   body.id_sender +
                  //   ", " +
                  //   "id_receiver=" +
                  //   body.id_receiver +
                  //   ", " +
                  //   "nominal=" +
                  //   body.nominal +
                  //   ", type_transaction=" +
                  //   "'" +
                  //   body.type_transaction +
                  //   "'" +
                  //   ", notes=" +
                  //   "'" +
                  //   body.notes +
                  //   "'";
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
                                      sender: dataSender[0].username,
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
          const queryString = `SELECT * FROM transactions  WHERE id_receiver=${id} OR id_sender=${id} ORDER BY transactions.${sortBy} ${orderBy} LIMIT ${Number(
            limit
          )} OFFSET ${offset}`;
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
