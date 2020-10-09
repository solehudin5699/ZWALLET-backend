const multer = require("multer");
const path = require("path");
// const { extname } = require("path");

//Disk for save file
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/profileImages");
  },
  filename: (req, file, cb) => {
    const nameFormat = `${Date.now()}-${file.fieldname}${path.extname(
      file.originalname
    )}`;
    cb(null, nameFormat);
  },
});

//Limit filesize
const limits = {
  fileSize: 10 * 1000 * 1000,
};

//Filter for File
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpg|jpeg|gif|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  if (extName) {
    cb(null, true);
  } else {
    cb("Error: Image Only");
  }
};

const upload = multer({
  storage,
  limits,
  fileFilter,
});

const uploadProfileController = {
  singleUpload: (req, res, next) => {
    const singleUpload = upload.single("image");
    singleUpload(req, res, (err) => {
      if (err) {
        res.json({
          success: false,
          status: 500,
          error: err,
        });
      } else if (!req.file) {
        next();
      } else {
        try {
          req.body.image = `/profileImages/${req.file.filename}`;
          next();
        } catch (err) {
          res.json({
            success: false,
            status: 500,
            error: err,
          });
        }
      }
    });
  },
};
module.exports = uploadProfileController;
