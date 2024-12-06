
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import MovieDetail from './components/client/MovieDetail'
import Home from './pages/Home'
import Admin from './pages/Admin'
// import Sidebar from './components/sidebar'

function App() {


  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-movie/:id" element={<MovieDetail />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
