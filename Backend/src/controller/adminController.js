const Movie = require("../model/movieModel");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");

exports.getHomePage = async (req, res) => {
    try {
        const { category } = req.query; // Get category from query parameters
        let filter = {};

        if (category && category !== "") {
            filter.categories = category; // Apply filter if category is provided
        }
        console.log(filter);
        const movies = await Movie.find(filter).sort({ _id: -1 });
        res.status(200).json({ movies }); // Pass filtered movies to the view
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
};
exports.getAddMoviePage = (req, res) => {
    res.render("addmovie"); // For the add movie page
};
exports.postAddMoviePage = async (req, res) => {
    const { title, description, image, download, categories, trailer } =
        req.body;
    try {
        const addData = await Movie.create({
            title,
            description,
            image,
            download,
            categories,
            trailer,
        });
        console.log("movie added");
        res.redirect("/admin");
    } catch (error) {
        console.log(error);
    }
};
// exports.viewMoviePage = async (req, res) => {
//     try {
//         const { category } = req.query; // Get category from query parameters
//         let filter = {};

//         if (category && category !== "") {
//             filter.categories = category; // Apply filter if category is provided
//         }
//         console.log(filter);
//         const movies = await Movie.find(filter);
//         res.render("index", { movies }); // Pass filtered movies to the view
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Server Error" });
//     }
// };
exports.deleteMoviePage = async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json({delete:"Movie Deleted"});
    } catch (error) {
        console.error("Error deleting movie:", error);
        res.status(500).send("Internal Server Error");
    }
};
exports.getEditMoviePage = async (req, res) => {
    try {
        const moviedata = await Movie.findById(req.params.id);
        res.render("updatemovie", { moviedata });
    } catch (error) {
        console.error("Error updating movie:", error);
        res.status(500).send("Internal Server Error");
    }
};
exports.postEditMoviePage = async (req, res) => {
    try {
        const { title, description, image, download, categories, trailer } =
            req.body;
        const updateData = await Movie.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                image,
                download,
                categories,
                trailer,
            },
            { new: true }
        );
        console.log("movie updated");
        res.redirect("/admin");
    } catch (error) {
        console.error("Error updating movie:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.searchMovie = async (req, res) => {
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
        res.render("index", { movies });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};

// admin registation
exports.getregistrationUser = async (req, res) => {
    res.render("registration");
};

exports.registrationUser = async (req, res) => {
    const { username, email, password } = req.body;
    const profilepic = req.file ? req.file.filename : "default-avtar.jpg"; // Use default image if no file is uploaded
    console.log("Profile picture:", profilepic);
    const saltRounds = 10;
    try {
        // check exsisting user
        const existingUser = await User.findOne({ username });
        console.log(existingUser);
        if (existingUser) {
            return res.render("registration", {
                error: "Username already exists",
            });
        }

        // create new user
        const hashpw = await bcrypt.hash(password, saltRounds);
        const user = await User.create({
            username,
            email,
            password: hashpw,
            profilepic,
        });
        res.redirect("/admin/dashboard");
    } catch (error) {
        console.log(error);
        res.render("registration", {
            error: "An error occurred during registration",
        });
    }
};

exports.getregisterdUser = async (req, res) => {
    try {
        const users = await User.find();
        res.render("users", { users });
    } catch (error) {
        console.log(error);
    }
};
exports.deleteUser = async (req, res) => {
    const userIdToDelete = req.params.id;
    try {
        const users = await User.find();
        if (userIdToDelete === req.user._id.toString()) {
            return res.render("users", {
                error: "Cannot delete the currently logged-in user",
                users: users,
            });
        }

        await User.findByIdAndDelete(userIdToDelete);
        res.redirect("/admin/dashboard/user");
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Internal Server Error");
    }
};
