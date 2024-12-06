const express = require("express");

const Movie = require("../model/movieModel");

const mainrouter = express.Router();

mainrouter.get("/", async (req, res) => {
    try {
        const { category } = req.query; // Get category from query parameters
        let filter = {};

        if (category && category !== "") {
            filter.categories = category; // Apply filter if category is provided
        }
        // console.log(filter);
        const movies = await Movie.find(filter).sort({ _id: -1 });
        // res.render("frontindex", { movies }); // Pass filtered movies to the view
        res.status(200).json(movies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});
mainrouter.get("/view-movie/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await Movie.findById(id);
        // res.render("viewmovie", { movie }); // Pass filtered movies to the view
        res.status(200).json(movie);
    } catch (err) {
        console.log(err);
    }
});

mainrouter.get("/search", async (req, res) => {
    // const search_data = req.query.q;
    // try {
    //     const movies = await Movie.find({
    //         $or: [
    //             { title: { $regex: search_data, $options: "i" } },
    //             { description: { $regex: search_data, $options: "i" } },
    //         ],
    //     });
    //     res.render("index", { movies });
    // } catch (error) {
    //     console.log(error);
    // }

    const search_data = req.query.q || "";
    const category = req.query.category || "";

    // Create a filter object
    const filter = {};

    // Add text search filter
    if (search_data.trim() !== "") {
        filter.$or = [
            { title: { $regex: search_data, $options: "i" } },
            { description: { $regex: search_data, $options: "i" } },
        ];
    }

    // Add category filter if provided
    if (category.trim() !== "") {
        filter.categories = category;
    }

    try {
        const movies = await Movie.find(filter);
        res.render("frontindex", { movies });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
});

module.exports = mainrouter;
