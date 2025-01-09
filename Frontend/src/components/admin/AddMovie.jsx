// import React from "react";

const AddMovie = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-zinc-100 mb-6">Add New Movie</h2>

        <div className="bg-zinc-800 p-6 rounded-lg shadow-md">
          <form
            action="/admin/dashboard/addmovie"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-zinc-300 mb-1"
              >
                Movie Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter movie title"
                className="w-full p-2 bg-zinc-700 text-zinc-200 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-zinc-300 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Enter movie description"
                className="w-full p-2 bg-zinc-700 text-zinc-200 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="Category"
                className="block text-sm font-semibold text-zinc-300 mb-1"
              >
                Category
              </label>
              <div className="flex gap-4">
                <div>
                  <input
                    type="checkbox"
                    id="horror"
                    name="categories"
                    value="Horror"
                    className="mr-2"
                  />
                  <label htmlFor="horror" className="text-zinc-300">
                    Horror
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="action"
                    name="categories"
                    value="Action"
                    className="mr-2"
                  />
                  <label htmlFor="action" className="text-zinc-300">
                    Action
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="comedy"
                    name="categories"
                    value="Comedy"
                    className="mr-2"
                  />
                  <label htmlFor="comedy" className="text-zinc-300">
                    Comedy
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="romance"
                    name="categories"
                    value="Romance"
                    className="mr-2"
                  />
                  <label htmlFor="Romance" className="text-zinc-300">
                    Romance
                  </label>
                </div>
                {/* <!-- Add more categories as needed  --> */}
              </div>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-semibold text-zinc-300 mb-1"
              >
                Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Enter image URL"
                className="w-full p-2 bg-zinc-700 text-zinc-200 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="trailer"
                className="block text-sm font-semibold text-zinc-300 mb-1"
              >
                Trailer URL
              </label>
              <input
                type="text"
                id="trailer"
                name="trailer"
                placeholder="Enter Trailer URL"
                className="w-full p-2 bg-zinc-700 text-zinc-200 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="download"
                className="block text-sm font-semibold text-zinc-300 mb-1"
              >
                Download URL
              </label>
              <input
                type="text"
                id="download"
                name="download"
                placeholder="Enter Download URL"
                className="w-full p-2 bg-zinc-700 text-zinc-200 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
              >
                Add Movie
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMovie;
