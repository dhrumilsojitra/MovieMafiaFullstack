// import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <nav className="bg-zinc-800 shadow-md sticky top-0">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-zinc-100">
                        <Link to="/" className="flex items-center"
                        >
                            <img src="../../public/images/logo.png" alt="" width="200px" height="50px"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <form action="/search" method="get" className="flex items-center">
                            <input
                                type="text"
                                name="q"
                                placeholder="Search movies..."
                                required
                                className="bg-zinc-700 text-zinc-100 placeholder-zinc-400 px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                            />
                            <button
                                type="submit"
                                className="bg-zinc-600 hover:bg-zinc-500 text-white px-3 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                            >
                                Search
                            </button>
                        </form>
                        <select
                            name="categories"
                            id="categories-desktop"
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
                    <button id="nav-toggle" className="md:hidden text-zinc-100 focus:outline-none">
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
                <div id="nav-menu" className="md:hidden hidden">
                    <div className="px-4 py-4">
                        <form action="/search" method="get" className="flex items-center mb-4">
                            <input
                                type="text"
                                name="q"
                                placeholder="Search movies..."
                                required
                                className="bg-zinc-700 text-zinc-100 placeholder-zinc-400 px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                            />
                            <button
                                type="submit"
                                className="bg-zinc-600 hover:bg-zinc-500 text-white px-3 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                            >
                                Search
                            </button>
                        </form>
                        <select
                            name="categories"
                            id="categories-mobile"
                            className="bg-zinc-700 text-zinc-100 border border-zinc-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-500 w-full mb-4"
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
            </nav>
        </>
    )
}

export default Navbar
