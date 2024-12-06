const express = require("express");
const superadminrouter = express.Router();

const superAdminController = require("../controller/superAdminController");

// adminrouter.get("/registration", adminController.getregistrationUser);

// adminrouter.post("/registration", adminController.registrationUser);

superadminrouter.get("/", superAdminController.getHome);

superadminrouter.get("/login", superAdminController.getloginUser);

superadminrouter.get("/logout", superAdminController.logoutUser);

superadminrouter.post("/login", superAdminController.loginUser);

module.exports = superadminrouter;
