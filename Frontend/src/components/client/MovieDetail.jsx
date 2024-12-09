import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar";

const MovieDetail = () => {
  const id = useParams();
  console.log("id is", id?.id);
  const [movie, setMovie] = useState();

  const data = async () => {
    const response = await axios.get(
      `http://localhost:8090/view-movie/${id?.id}`
    );
    setMovie(response.data);
  };
  useEffect(() => {
    data();
  }, []);

  console.log("viewmovie", movie);
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src={movie?.image}
              alt="The Dark Knight Poster"
              className="rounded-lg shadow-lg w-3/4 lg:w-full h-auto"
            />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
              {movie?.title}
            </h1>
            category
            <div className="flex flex-wrap gap-2 my-2">
              {movie &&
                movie.categories.map((category, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-blue-600 text-blue-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                    >
                      {category}
                    </span>
                  );
                })}
            </div>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 leading-relaxed">
              {movie?.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={movie?.download}
                target="_blank"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"
              >
                Download Movie
              </Link>
              <Link
                to={movie?.trailer}
                target="_blank"
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
              >
                <img
                  src="/images/youtube-icon.png"
                  alt="Watch Trailer"
                  className="w-5 h-5 mr-2"
                />
                Watch Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
