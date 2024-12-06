// import React from 'react'
import MovieList from '../components/client/MovieList'
import Navbar from '../components/navbar'

const Home = () => {

    const [searchdmovie, setSearchdmovie] = useState();

    return (
        <div>
            <Navbar />
            <MovieList />
        </div>
    )
}

export default Home
