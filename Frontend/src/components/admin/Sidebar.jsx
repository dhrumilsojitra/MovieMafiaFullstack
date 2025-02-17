// import React from 'react'

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside
        id="sidebar"
        className="bg-zinc-800 w-64 h-screen p-6 fixed top-0 left-0 overflow-y-auto transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-40"
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col mb-6">
            <div className="mb-4 text-zinc-100 mx-auto">
              <p className="text-2xl font-bold mb-4">
                Welcome, <br />
                <span className="text-indigo-400"> username </span>!
              </p>
              <div className="flex items-center space-x-4 justify-center">
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src="/uploads/tmp/"
                    alt=" profile picture"
                    className="w-full h-full object-cover rounded-full border-2 border-indigo-500 shadow-md"
                  />
                </div>
              </div>
            </div>

            <Link
              to="/admin/logout"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <span>Logout</span>
            </Link>

            <button
              id="sidebar-toggle"
              className="text-zinc-100 focus:outline-none mt-4 md:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path> */}
              </svg>
            </button>
          </div>

          <nav className="flex-grow">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/admin"
                  className="block px-4 py-3 text-zinc-100 hover:bg-zinc-700 rounded-md transition duration-200"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/admin/addmovie"
                  className="block px-4 py-3 text-zinc-100 hover:bg-zinc-700 rounded-md transition duration-200"
                >
                  Add Movie
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/registration"
                  className="block px-4 py-3 text-zinc-100 hover:bg-zinc-700 rounded-md transition duration-200"
                >
                  Add Admin
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/user"
                  className="block px-4 py-3 text-zinc-100 hover:bg-zinc-700 rounded-md transition duration-200"
                >
                  Admin List
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto">
            <p className="text-xs text-zinc-400 text-center">
              © 2024 Movie Mafia
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
