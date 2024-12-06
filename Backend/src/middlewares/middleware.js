const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecretKey = process.env.SECRET_KEY;

// middleware is for authentication
const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        const decoded = jwt.verify(token, jwtSecretKey);
        const user = await User.findById(decoded.userId);
        if (user) {
            res.locals.user = user;
            req.user = user; // Attach user information to req.user
            return next();
        }
    } else {
        res.clearCookie("token");
        return res.redirect("/admin/login");
    }
};

// Default user creation
const ensureDefaultUser = async () => {
    const saltRounds = 10;
    try {
        const userCount = await User.countDocuments();
        if (userCount === 0) {
            const defaultUser = {
                username: "dhrumil",
                email: "dhrumil@admin.com",

                password: await bcrypt.hash("dhrumiladmin", saltRounds),
            };
            await User.create(defaultUser);
            console.log("Default user created.");
        }
    } catch (error) {
        console.error("Error creating default user:", error);
    }
};

module.exports = { isAuthenticated, ensureDefaultUser };
