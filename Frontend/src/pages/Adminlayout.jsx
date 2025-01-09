// import React from 'react'

import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";
// import MovieTable from "../components/admin/MovieTable";
import Sidebar from "../components/admin/Sidebar";

const Adminlayout = () => {
  return (
    <>
      <Sidebar />
      <div className="flex-1 ml-0 md:ml-64 bg-zinc-900">
        <AdminNavbar />
        <div className="container mx-auto px-4 py-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Adminlayout;
