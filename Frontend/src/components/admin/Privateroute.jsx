// import React from "react";

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../Loader";
import apiInstance from "../../api/api";

const Privateroute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  useEffect(()=>{
    const validateToken = async()=>{
      try {
        const response =await apiInstance.get('/validate-token')
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
