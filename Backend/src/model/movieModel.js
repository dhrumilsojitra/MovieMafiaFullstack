const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    download: {
        type: String,
        required: true,
    },
    trailer: {
        type: String,
        required: true,
    },
    categories: {
        type: [String], // Array of strings to store multiple categories
        default: [], // Default to an empty array if no categories are provided
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
