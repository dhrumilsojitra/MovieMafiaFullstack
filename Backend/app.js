const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConnect = require("./db");
const {
    isAuthenticated,
    ensureDefaultUser,
} = require("./src/middlewares/middleware");
const adminrouter = require("./src/routes/adminRouter");
const mainrouter = require("./src/routes/mainRouter");
const superadminrouter = require("./src/routes/superadminrouter");

// Initialize Express application
const app = express();

// Enable CORS for all origins
app.use( cors({
    origin: "http://localhost:5173", // Frontend origin
    credentials: true, // Allow cookies
  }));

// Load environment variables from a .env file
require("dotenv").config();

// Middleware to parse cookies
app.use(cookieParser());

// database connection
dbConnect();

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Serve static files (e.g., CSS, images) from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
// Serve files from 'uploads' directory (if you want this to be accessible directly)
app.use("/uploads", express.static(path.join(__dirname, "public", "uploads")));

// Middleware to parse incoming JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Run default user creation on server start
ensureDefaultUser();

// // Define the port for the server
const port = process.env.PORT || 3000;

// Define routes
app.use("/", mainrouter);
app.use("/admin", superadminrouter);
app.use("/admin/dashboard", isAuthenticated, adminrouter);
app.use("/validate-token", isAuthenticated, (req,res)=>{
    return res.json({valid:true})
});


// Custom 404 page middleware using res.render
app.use((req, res, next) => {
    res.status(404).render("404");
});
// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`App Server run on this port ${port}!`);
});
