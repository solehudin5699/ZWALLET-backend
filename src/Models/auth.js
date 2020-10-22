const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dbConnect = require("../Configs/dbConnect");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.DB_HOST,
  port: process.env.NODEMAILER_PORT, //(defaults to 587 if is secure is false or 465 if true)
  secure: false,
  service: process.env.NODEMAILER_EMAIL_SERVICE,
  auth: {
    user: process.env.NODEMAILER_EMAIL_USER,
    pass: process.env.NODEMAILER_EMAIL_PASSWORD,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

const authModel = {
  registration: (body) => {
    return new Promise((resolve, reject) => {
      //CHECK AVAILABILITY OF USERNAME
      const { username, email } = body;
      const checkAvailability =
        "SELECT username, email FROM users WHERE username=? OR email=?";
      dbConnect.query(checkAvailability, [username, email], (err, data) => {
        if (err) {
          reject({ msg: "Something is wrong." });
        } else if (data.length) {
          if (data[0].username === username) {
            reject({ msg: "Username already registered" });
          } else if (data[0].email === email) {
            reject({ msg: "Email already registered" });
          }
        } else {
          //DO THIS IF USERNAME IS NOT ALREADY
          bycrypt.genSalt(10, (err, salt) => {
            if (err) {
              reject({ msg: "Something is wrong." });
            }
            const { password } = body;
            bycrypt.hash(password, salt, (err, hashedPassword) => {
              if (err) {
                reject({ msg: "Something is wrong." });
              }
              console.log(hashedPassword);
              const newBody = {
                ...body,
                password: hashedPassword,
              };
              const postQuery = "INSERT INTO users SET ?";
              dbConnect.query(postQuery, newBody, (err, data) => {
                if (!err) {
                  //CREATE TOKEN FOR CREATE PIN IN FRONT END
                  let randomKey = Math.random()
                    .toFixed(6)
                    .toString()
                    .split(".")[1];
                  let payload = { randomKey };
                  let secretKey = process.env.SECRET_KEY;
                  const token = jwt.sign(payload, secretKey, {
                    expiresIn: "12h",
                  });
                  const msg = "Registration is success";
                  resolve({ msg, token, user_id: data.insertId });
                } else {
                  reject({ msg: "Registration is failed" });
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
                expiresIn: "12h",
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
  updateUsers: (decodedToken, body, params) => {
    return new Promise((resolve, reject) => {
      const { id } = params;
      //Update non-password
      if (!body.password && !body.otp) {
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
      } else if (body.password && !body.newPassword && body.otp) {
        if (decodedToken.otp !== body.otp) {
          reject({ msg: "OTP code is wrong" });
        } else {
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
                password: hashedPassword,
              };
              const postQuery = "UPDATE users SET ? WHERE user_id=" + id;
              dbConnect.query(postQuery, newBody, (err, data) => {
                if (!err) {
                  const msg = "Password has been changed.";
                  resolve({ msg });
                } else {
                  reject(err);
                }
              });
            });
          });
        }
      }
      //Check OTP Code
      else if (!body.password && !body.newPassword && body.otp) {
        // console.log(decodedToken, body);
        if (decodedToken.otp !== body.otp.toString()) {
          reject({ msg: "OTP code is wrong" });
        } else {
          resolve({ otp: body.otp, msg: "OTP is true" });
        }
      }
    });
  },
  requestResetPassword: (body) => {
    return new Promise((resolve, reject) => {
      console.log(body);
      const { email } = body;
      const checkQuery = "SELECT user_id, email FROM users WHERE email=?";
      dbConnect.query(checkQuery, [email], (err, data) => {
        if (err) {
          reject({ msg: "Something is wrong" });
        } else if (!data.length) {
          reject({ msg: "Email not registered" });
        } else {
          let otp = Math.random().toFixed(6).toString().split(".")[1];
          const payload = { otp, user_id: data[0].user_id };
          let secretKey = process.env.SECRET_KEY;
          const token = jwt.sign(payload, secretKey, {
            expiresIn: 300,
          });
          const mailOptions = {
            from: process.env.NODEMAILER_EMAIL_USER,
            to: `${email}`,
            subject: "Reset Password Zwallet",
            html: `<p>This is OTP code to reset your password Zwallet account. OTP will expire in 5 minutes.</p>\n
              <p>OTP: ${otp}</p>`,
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              reject({ msg: "Can't send OTP code, please try again." });
            } else {
              resolve({
                token,
                user_id: data[0].user_id,
                msg: "Please open your email to get OTP code",
              });
            }
          });
        }
      });
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
