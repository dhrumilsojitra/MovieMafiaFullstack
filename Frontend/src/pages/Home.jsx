// import React from 'react'
import { useState } from "react";
import MovieList from "../components/client/MovieList";
import Navbar from "../components/navbar";

const Home = () => {
  const [searchdmovie, setSearchdmovie] = useState();
  const [category, setCategory] = useState("all");
  return (
    <div>
      <Navbar
        setSearchdmovie={setSearchdmovie}
        setCategory={setCategory}
        category={category}
      />
      <MovieList searchdmovie={searchdmovie} category={category} />
    </div>
  );
};

export default Home;
