// import React from 'react'
import { useState } from 'react';
import MovieList from '../components/client/MovieList'
import Navbar from '../components/navbar'

const Home = () => {

    const [searchdmovie, setSearchdmovie] = useState();

    return (
        <div>
            <Navbar setSearchdmovie={setSearchdmovie} />
            <MovieList searchdmovie={searchdmovie} />
        </div>
    )
}

export default Home
