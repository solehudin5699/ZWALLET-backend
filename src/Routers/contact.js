//Package import
const express = require("express");
const contactRouter = express.Router();
//Filepath import
const contactController = require("../Controllers/contact");
const uploadProfileController = require("../Helpers/Middleware/uploadProfileImages");
const checkToken = require("../Helpers/Middleware/checkToken");

//IMPLEMENTATION
//PUBLIC
//#get contact
contactRouter.get("/", contactController.getContact);

module.exports = contactRouter;
