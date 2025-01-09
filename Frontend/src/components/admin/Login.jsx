// import React from 'react'

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

const Login = () => {
  const [logindata, setLogindata] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleonchange = (e) => {
    const { name, value } = e.target;
    setLogindata(() => {
      return {
        ...logindata,
        [name]: value,
      };
    });
    setError(null);
  };
  const loginapicall = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8090/admin/login`,
        logindata,
        { withCredentials: true }
      );
      localStorage.setItem("token", response?.data?.token);
      navigate("/admin/dashboard");
    } catch (error) {
      const val = error?.response?.data?.error;
      setError(val);
      localStorage.removeItem("token");
    }
  };
  const handleonsubmit = (e) => {
    e.preventDefault();
    // console.log(logindata);
    loginapicall();
    setLogindata({
      username: "",
      password: "",
    });
  };
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-zinc-600 rounded p-6">
          <h2 className="text-2xl font-bold text-zinc-100 mb-6">Admin Login</h2>
          <form action="/admin/login" method="POST" onSubmit={handleonsubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-zinc-200 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 leading-tight text-zinc-200 bg-zinc-700 rounded focus:outline-none focus:bg-zinc-800"
                placeholder="Enter your username"
                value={logindata.username}
                onChange={handleonchange}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-zinc-200 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 leading-tight text-zinc-200 bg-zinc-700 rounded focus:outline-none focus:bg-zinc-800"
                placeholder="Enter your password"
                value={logindata.password}
                onChange={handleonchange}
                required
              />
            </div>

            {error && (
              <div className="mb-4 p-4 text-red-800 bg-red-200 rounded border border-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
