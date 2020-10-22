//Package import
const express = require("express");
const authRouter = express.Router();
//Filepath import
const authController = require("../Controllers/auth");
const uploadProfileController = require("../Helpers/Middleware/uploadProfileImages");
const checkToken = require("../Helpers/Middleware/checkToken");
const dbConnect = require("../Configs/dbConnect");

//IMPLEMENTATION
//#registration
authRouter.post("/registration", authController.registration);
//#login
authRouter.post("/login", authController.login);
//#edit profile
authRouter.patch(
  "/update/:id",
  checkToken.users,
  uploadProfileController.singleUpload,
  authController.updateUsers
);
//#check token (valid or not)
authRouter.post("/validate", checkToken.users, (req, res) => {
  res.json({ status: 200, token: true });
});
//#request to reset password
authRouter.post("/reset", authController.requestResetPassword);
//#get user info
authRouter.get("/user/:id", authController.getUserInfo);
// authRouter.post("/try", (req, res) => {
//   const qs = "INSERT INTO users SET ?";
//   const data = { name: req.body.name };
//   dbConnect.query(qs, data, (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

module.exports = authRouter;
