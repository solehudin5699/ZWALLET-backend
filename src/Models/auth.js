const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dbConnect = require("../Configs/dbConnect");
const { changeUser } = require("../Configs/dbConnect");

const authModel = {
  registration: (body) => {
    return new Promise((resolve, reject) => {
      //CHECK AVAILABILITY OF USERNAME
      const { username } = body;
      const checkUsername = "SELECT username FROM users WHERE username=?";
      dbConnect.query(checkUsername, [username], (err, data) => {
        if (err) {
          reject(err);
        } else if (data.length) {
          reject({ msg: "Username already registered" });
        } else {
          //DO THIS IF USERNAME IS NOT ALREADY
          bycrypt.genSalt(10, (err, salt) => {
            if (err) {
              reject(err);
            }
            const { password } = body;
            bycrypt.hash(password, salt, (err, hashedPassword) => {
              if (err) {
                reject(err);
              }
              console.log(hashedPassword);
              const newBody = {
                ...body,
                password: hashedPassword,
              };
              const postQuery = "INSERT INTO users SET ?";
              dbConnect.query(postQuery, newBody, (err, data) => {
                if (!err) {
                  const msg = "Registration is succes";
                  resolve({ msg });
                } else {
                  reject(err);
                }
              });
            });
          });
        }
      });
    });
  },
  login: (body) => {
    return new Promise((resolve, reject) => {
      const { email } = body;
      const loginQuery =
        "SELECT user_id, name, username, email, password, image,pin, balance, noHp FROM users WHERE email=?";
      dbConnect.query(loginQuery, [email], (err, data) => {
        // dbConnect.query(loginQuery, body.username, (err, data) => {
        if (err) {
          reject(err);
        } else if (!data.length) {
          reject({ msg: "Data not Found" });
        } else {
          bycrypt.compare(body.password, data[0].password, (err, result) => {
            if (result) {
              const {
                user_id,
                name,
                username,
                email,
                image,
                pin,
                balance,
                noHp,
              } = data[0];
              const payload = {
                username,
                email,
              };

              let secretKey = process.env.SECRET_KEY;

              //CREATE TOKEN
              const token = jwt.sign(payload, secretKey, {
                expiresIn: "10h",
              });
              const msg = "Login Succes";
              resolve({
                msg,
                user_id,
                name,
                username,
                email,
                image,
                pin,
                balance,
                token,
                noHp,
              });
            }
            if (!result) {
              reject({ msg: "Wrong Password" });
            }
            if (err) {
              reject(err);
            }
          });
        }
      });
    });
  },
  //Update User
  updateUsers: (body, params) => {
    return new Promise((resolve, reject) => {
      const { id } = params;
      //Update non-password
      if (!body.password) {
        let updateQuery = `UPDATE users SET ? WHERE user_id=${id}`;
        dbConnect.query(updateQuery, body, (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        //Change password
      } else if (body.password && body.newPassword) {
        const selectQuery = "SELECT password FROM users WHERE user_id=" + id;
        dbConnect.query(selectQuery, (err, data) => {
          if (err) {
            reject(err);
          } else if (!data.length) {
            reject({ msg: "Data not Found" });
          } else if (data.length) {
            bycrypt.compare(
              body.password,
              data[0].password,
              (errcomp, result) => {
                if (result) {
                  bycrypt.genSalt(10, (errbyc, salt) => {
                    if (errbyc) {
                      reject(errbyc);
                    } else {
                      const { newPassword } = body;
                      bycrypt.hash(
                        newPassword,
                        salt,
                        (errhash, hashedPassword) => {
                          if (errhash) {
                            reject(errhash);
                          } else {
                            const newBody = {
                              password: hashedPassword,
                            };
                            const updateQuery =
                              "UPDATE users SET ? WHERE user_id=" + id;
                            dbConnect.query(
                              updateQuery,
                              newBody,
                              (errupdate, data) => {
                                if (!errupdate) {
                                  const msg =
                                    "User information is succes to be updated.";
                                  resolve({ msg });
                                } else {
                                  reject(errupdate);
                                }
                              }
                            );
                          }
                        }
                      );
                    }
                  });
                } else if (!result) {
                  reject({ msg: "Wrong Password" });
                } else if (errcomp) {
                  reject(err);
                }
              }
            );
          }
        });
        //Reset password
      } else if (body.password && !body.newPassword) {
        bycrypt.genSalt(10, (err, salt) => {
          if (err) {
            reject(err);
          }
          const { password } = body;
          bycrypt.hash(password, salt, (err, hashedPassword) => {
            if (err) {
              reject(err);
            }
            console.log(hashedPassword);
            const newBody = {
              ...body,
              password: hashedPassword,
            };
            const postQuery = "UPDATE users SET ? WHERE user_id=" + id;
            dbConnect.query(postQuery, newBody, (err, data) => {
              if (!err) {
                const msg = "User information is succes to be updated.";
                resolve({ msg });
              } else {
                reject(err);
              }
            });
          });
        });
      }
    });
  },
  //get user info
  getUserInfo: (params) => {
    return new Promise((resolve, reject) => {
      const { id } = params;
      const queryString = `SELECT users.name, users.image,users.noHp, users.balance FROM users WHERE users.user_id= ${id}`;
      dbConnect.query(queryString, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data[0]);
        }
      });
    });
  },
};

module.exports = authModel;
