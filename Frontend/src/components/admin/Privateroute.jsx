// import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../Loader";

const Privateroute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  useEffect(()=>{
    const validateToken = async()=>{
      try {
        const response =await axios.get('http://localhost:8090/validate-token',{
          withCredentials:true,
        })
        // console.log(response.data)
        if(response.data.valid === true){
          setIsAuth(true)
        }else{
          setIsAuth(false)
        }
      } catch (error) {
        setIsAuth(false)
        console.log(error)
      } 
    } 
    validateToken()
  },[])
  // const token = localStorage.getItem("token");
  if(isAuth==null){
    return <Loader/>;
  }
  return <>{isAuth ? children : <Navigate to="/superadmin"></Navigate>}</>;
};

export default Privateroute;
