const express = require("express");
const adminController = require("../controller/adminController");
const upload = require("../config/profileupload");

const adminrouter = express.Router();

adminrouter.get("/", adminController.getHomePage);

adminrouter.get("/addmovie", adminController.getAddMoviePage);

adminrouter.post("/addmovie", adminController.postAddMoviePage);

adminrouter.post("/deletemovie/:id", adminController.deleteMoviePage);

adminrouter.get("/editmovie/:id", adminController.getEditMoviePage);

adminrouter.post("/editmovie/:id", adminController.postEditMoviePage);

adminrouter.get("/search", adminController.searchMovie);

// admin registration
adminrouter.get("/registration", adminController.getregistrationUser);

adminrouter.post(
    "/registration",
    upload.single("profile"),
    adminController.registrationUser
);

// get users
adminrouter.get("/user", adminController.getregisterdUser);
// deleteuser
adminrouter.post("/deleteuser/:id", adminController.deleteUser);
// edit user
// adminrouter.get("/edituser/:id", adminController.getEditUser);
// adminrouter.post("/edituser/:id", adminController.postEditUser);

module.exports = adminrouter;
