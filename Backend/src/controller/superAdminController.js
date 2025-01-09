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
        return res.status(404).json( { error: "user is not exsist" });
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
        // localStorage.setItem("token",token)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000, // 1 hour in milliseconds
        });
        return res.status(200).json({message:"Login Suucesfull",token});
    } else {
        res.cookie("token", "", {
            expires: new Date(0),
            httpOnly: true,
            secure: false,
        });
        return res.status(500).json( { error: "Password is Incorrect" });
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
