const dbConnect = require("../Configs/dbConnect");

const contactModel = {
  //search and paginate users/contact
  getContact: (query) => {
    return new Promise((resolve, reject) => {
      const { name, sortBy, orderBy, page, limit } = query;
      const offset = (page - 1) * limit;
      const checkData = `SELECT * FROM users WHERE users.name LIKE '%${name}%'`;
      const queryString = `SELECT users.user_id, users.image, users.name,users.username,users.noHp from users WHERE users.name LIKE '%${name}%' ORDER BY users.${sortBy} ${orderBy} LIMIT ${Number(
        limit
      )} OFFSET ${offset}`;
      dbConnect.query(checkData, (err, dataAll) => {
        if (err) {
          reject(err);
        } else {
          dbConnect.query(queryString, (err, data) => {
            if (!err) {
              resolve({ dataAll, data });
            } else {
              reject(err);
            }
          });
        }
      });
    });
  },
};

module.exports = contactModel;
