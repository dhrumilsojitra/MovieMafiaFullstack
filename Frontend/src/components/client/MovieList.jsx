// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const MovieList = () => {

    const [moviedata, setMovieData] = useState([]);

    const getMovieData = async () => {
        try {
            const response = await axios.get('http://localhost:8090/');
            console.log(response.data);
            setMovieData(response.data); // Update the state with API data
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    }
    useEffect(() => {
        getMovieData();
    }, []);
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-xl font-bold text-zinc-100 mb-6">Available Movies</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {
                        (moviedata == null ? <div className="bg-zinc-800 p-6 rounded-lg shadow-md text-center">
                            <p className="text-zinc-400">No movies available.</p>
                        </div> : moviedata.map((movie, index) => {
                            return (
                                <div className="bg-zinc-800 shadow-md rounded-lg overflow-hidden" key={index}>
                                    <Link to="/list" >
                                        <img
                                            src={movie.image}
                                            alt="Movie Image"
                                            className="w-full h-48 object-cover"
                                        />
                                    </Link>
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold text-zinc-100">{movie.title}</h3>
                                        <div className="flex flex-wrap gap-2 my-2">
                                            category
                                            <span
                                                className="bg-blue-600 text-blue-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                                            >
                                                category
                                            </span>

                                        </div>
                                        <p className="text-zinc-400 h-[60px] overflow-auto">
                                            {movie.description}
                                        </p>
                                        <div className="mt-4 flex gap-3 items-start justify-between flex-wrap">
                                            <div className="text-blue-400 hover:text-blue-300 font-semibold">
                                                <Link href={movie.download} target="_blank">Download</Link>
                                            </div>
                                            <div className="text-red-500 font-semibold">
                                                <Link
                                                    href={movie.trailer}
                                                    target="_blank"
                                                    className="flex items-center gap-2"
                                                ><img
                                                        src="/images/youtube-icon.png"
                                                        alt=""
                                                        width="20px"
                                                        height="20px"
                                                    /> Watch Trailer </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }))
                    }






                </div>
            </div>
        </>
    )
}

export default MovieList
