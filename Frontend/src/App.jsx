
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Login from './components/admin/Login'

import Navbar from './components/navbar'
// import MovieList from './components/client/MovieList'
import MovieDetail from './components/client/MovieDetail'
import Home from './pages/Home'
import Admin from './pages/Admin'
// import Sidebar from './components/sidebar'

function App() {


  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-movie/:id" element={<MovieDetail />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>


      {/* <MovieDetail /> */}
    </>
  )
}

export default App
