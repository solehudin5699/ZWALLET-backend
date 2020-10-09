const authModel = require("../Models/auth");
const responseResult = require("../Helpers/formResponse");

const authController = {
  registration: (req, res) => {
    authModel
      .registration(req.body)
      .then((data) => {
        responseResult.success(res, data);
      })
      .catch((err) => {
        responseResult.error(res, err);
      });
  },
  login: (req, res) => {
    authModel
      .login(req.body)
      .then((data) => {
        responseResult.success(res, data);
      })
      .catch((err) => {
        responseResult.error(res, err);
      });
  },
  updateUsers: (req, res) => {
    authModel
      .updateUsers(req.body, req.params)
      .then((result) => {
        if (result.affectedRows !== 0) {
          let detailUpdate;
          if (req.body.password) {
            detailUpdate = {
              ...result,
              ...req.body,
              password: "",
              newPassword: "",
            };
          } else {
            detailUpdate = {
              ...req.body,
            };
          }

          responseResult.success(res, detailUpdate);
        } else {
          const msg = `Id user = ${req.params.id} is not found`;
          responseResult.error(res, { msg });
        }
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  getUserInfo: (req, res) => {
    authModel
      .getUserInfo(req.params)
      .then((data) => {
        responseResult.success(res, data);
      })
      .catch((err) => {
        responseResult.error(res, err);
      });
  },
};

module.exports = authController;
