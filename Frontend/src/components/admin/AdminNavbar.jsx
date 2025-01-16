// import React from "react";

import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <>
      <nav className="bg-zinc-800 shadow-md sticky top-0 mx-5 rounded-b-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* <!-- Logo Section --> */}
          <div className="flex items-center space-x-4">
            <Link to="/admin" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-32 md:w-48 h-auto"
              />
            </Link>
            <button
              id="nav-toggle"
              className="md:hidden text-zinc-100 focus:outline-none"
            >
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg> */}
            </button>
          </div>

          {/* <!-- Desktop Menu --> */}
          <div className="hidden md:flex items-center space-x-6">
            <form
              action="/admin/dashboard/search"
              method="get"
              className="flex items-center"
            >
              <input
                type="text"
                name="q"
                placeholder="Search movies..."
                required
                className="bg-zinc-700 text-zinc-100 placeholder-zinc-400 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-zinc-500 w-64"
              />
              <button
                type="submit"
                className="bg-zinc-600 hover:bg-zinc-500 text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              >
                Search
              </button>
            </form>
            <select
              name="categories"
              id="categories"
              className="bg-zinc-700 text-zinc-100 border border-zinc-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            >
              <option value="">Select Category</option>
              <option value="">All Categories</option>
              <option value="Horror">Horror</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Romance">Romance</option>
            </select>
          </div>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div id="nav-menu" className="md:hidden hidden bg-zinc-800">
          <div className="px-4 py-4">
            <form
              action="/admin/dashboard/search"
              method="get"
              className="flex items-center mb-4"
            >
              <input
                type="text"
                name="q"
                placeholder="Search movies..."
                required
                className="bg-zinc-700 text-zinc-100 placeholder-zinc-400 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-zinc-500 w-full"
              />
              <button
                type="submit"
                className="bg-zinc-600 hover:bg-zinc-500 text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              >
                Search
              </button>
            </form>

            <span className="text-zinc-200 font-semibold mb-4 block">
              Welcome,username !
            </span>
            <a
              href="/admin/logout"
              className="block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out mb-2"
            >
              Logout
            </a>

            <a
              href="/admin/login"
              className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out mb-2"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
