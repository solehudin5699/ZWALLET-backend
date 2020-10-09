const contactModel = require("../Models/contact");
const responseResult = require("../Helpers/formResponse");

const contactController = {
  getContact: (req, res) => {
    contactModel
      .getContact(req.query)
      .then((result) => {
        // res.json(result);
        responseResult.getContactSuccess(req, res, result);
      })
      .catch((err) => {
        responseResult.error(res, err);
      });
  },
};
module.exports = contactController;
