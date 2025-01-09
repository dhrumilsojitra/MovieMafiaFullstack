import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MovieDetail from "./components/client/MovieDetail";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Adminlayout from "./pages/Adminlayout";
import Privateroute from "./components/admin/Privateroute";
import MovieTable from "./components/admin/MovieTable";
import AddMovie from "./components/admin/AddMovie";
// import Learing from "./pages/Learing";
// import Sidebar from './components/sidebar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-movie/:id" element={<MovieDetail />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <Privateroute>
                <Adminlayout />
              </Privateroute>
            }
          >
            <Route index element={<MovieTable />} />
            <Route path="/admin/addmovie" element={<AddMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
