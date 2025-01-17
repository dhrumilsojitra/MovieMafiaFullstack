// import React from "react";

import { useEffect, useState } from "react";
import apiInstance from "../../api/api";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const MovieTable = () => {
  const [moviedata, setMovieData] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const getMovieData = async ()=>{
    try {
      setIsLoading(true);
      const response = await apiInstance.get('/admin/dashboard');
      console.log(response.data.movies)
      setMovieData(response.data.movies);
     
      setIsLoading(false);
    } catch (error) {
      console.log(error)
    }
  }
const handleDeleteOnClick = (deletemovie)=>{
  console.log("delete clicked",deletemovie);
  const alertvalue = window.confirm("Are you sure you want to Delete this movie")
  if(alertvalue){

    apiInstance.post(`/admin/dashboard/deletemovie/${deletemovie}`);
  alert("Movie Deleted Suucesfully")

  }else{
    console.log("delete cancelled")
  }
  getMovieData();
} 
  useEffect(()=>{
    
    getMovieData()
  },[])
  return (
    <>
    {isLoading && <Loader/>}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between space-x-4 bg-zinc-900 py-5">
          <h2 className="text-xl font-bold text-zinc-100">Movies Table</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-zinc-800 rounded-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-zinc-700 text-left text-xs font-semibold text-zinc-100 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 border-b-2 border-zinc-700 text-left text-xs font-semibold text-zinc-100 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 border-b-2 border-zinc-700 text-left text-xs font-semibold text-zinc-100 uppercase tracking-wider">
                  Categories
                </th>
                <th className="px-6 py-3 border-b-2 border-zinc-700 text-left text-xs font-semibold text-zinc-100 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 border-b-2 border-zinc-700 text-left text-xs font-semibold text-zinc-100 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
                {moviedata && moviedata.length>0 ? moviedata.map((movie,id)=>{
                  return (<tr key={id}>
                    <td className="px-6 py-4 border-b border-zinc-700">
                      <img
                        src={`${movie.image}`}
                        alt="Movie Image"
                        className="w-24 h-24 object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 border-b border-zinc-700 text-zinc-100">
                    {movie.title}
                    </td>
                    <td className="px-6 py-4 border-b border-zinc-700">
                    {movie.categories?.map((category,id)=>{
                      return(<span key={id} className="bg-blue-600 text-blue-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        {category}
                      </span>)
                      
                    })}
                    </td>
                    <td className="px-6 py-4 border-b border-zinc-700 text-zinc-400 overflow-hidden max-h-16">
                    {movie.description}
                    </td>
                    <td className="px-6 py-4 border-b border-zinc-700 text-zinc-100">
                      <div className="flex gap-3 items-center flex-wrap">
                        {/* <form action="/admin/dashboard/editmovie/" method="get"> */}
                          <button
                            type="submit"
                            className="text-yellow-400 hover:text-yellow-300 font-semibold"
                          >
                            Edit
                          </button>
                        {/* </form> */}
                        {/* <form action="/admin/dashboard/deletemovie/" method="post"> */}
                          <button
                            onClick={()=>handleDeleteOnClick(`${movie._id}`)}
                            className="text-red-400 hover:text-red-300 font-semibold"
                          >
                            Delete
                          </button>
                        {/* </form> */}
                        <Link
                          to={movie.trailer}
                          target="_blank"
                          className="text-red-800 hover:text-red-500 font-semibold"
                        >
                          <img
                            src="/images/youtube-icon.png"
                            alt=""
                            width="20px"
                            height="20px"
                          />
                        </Link>
                        <Link
                          to={movie.download}
                          target="_blank"
                          className="text-blue-400 hover:text-blue-300 font-semibold"
                        >
                          Download
                        </Link>
                      </div>
                    </td>
                  </tr>)
                }):  <tr>
                <td
                  colSpan="5"
                  className="px-6 py-4 border-b border-zinc-700 text-center text-zinc-400"
                >
                  No movies available.
                </td>
              </tr>}
              

             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MovieTable;
