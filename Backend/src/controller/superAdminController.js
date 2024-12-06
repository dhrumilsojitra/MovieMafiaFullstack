const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const jwtSecretKey = process.env.SECRET_KEY;
// login user
exports.getloginUser = async (req, res) => {
    res.render("login");
};
exports.getHome = async (req, res) => {
    res.redirect("/admin/dashboard");
};
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.render("login", { error: "user is not exsist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, user: user.username },
            jwtSecretKey,
            {
                expiresIn: "1h", // Set token expiration time as per your needs
            }
        );
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000, // 1 hour in milliseconds
        });
        res.redirect("/admin/dashboard");
    } else {
        res.cookie("token", "", {
            expires: new Date(0),
            httpOnly: true,
            secure: false,
        });
        return res.render("login", { error: "Password is incorrect" });
    }
};
exports.logoutUser = async (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0),
        httpOnly: true,
        secure: false,
    });
    res.redirect("/admin/login");
};
