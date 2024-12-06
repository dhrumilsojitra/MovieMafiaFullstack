const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const mongoURI = process.env.MONGODB_URI;

const mongoConnect = async () => {
    try {
        // Connect to MongoDB using Mongoose
        await mongoose.connect(mongoURI);
        console.log("Database Server Connected");
    } catch (error) {
        console.error("Database Connection Error:", error.message);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = mongoConnect;
