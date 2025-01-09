// import React from 'react'

import { useContext, useState } from "react";
import { UserContext } from "../utils/contextprovider";
const Learing = () => {
  const [formdata, setFormdata] = useState({ username: "", password: "" });
  const [error, serErrors] = useState({});
  const handleonchange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => {
      return { ...prev, [name]: value };
    });
    serErrors((prev) => {
      return { ...prev, [name]: "" };
    });
  };
  const handleonsubmit = (e) => {
    e.preventDefault();
    const vaildationerror = validation(formdata);
    console.log(vaildationerror);
    if (Object.keys(vaildationerror).length > 0) {
      serErrors(vaildationerror);
    } else {
      setFormdata({ username: "", password: "" });
      serErrors({});
      console.log(formdata);
    }
  };
  const validation = (data) => {
    const checks = [
      { regex: /[a-z]/, message: "at least one lowercase letter" },
      { regex: /[A-Z]/, message: "at least one uppercase letter" },
      { regex: /\d/, message: "at least one digit" },
      {
        regex: /[@.#$!%^&*.?]/,
        message: "at least one special character (@.#$!%^&*.?)",
      },
    ];
    console.log("error ", data);
    const errors = {};
    if (!data.username) {
      errors.username = "username is required";
    }
    if (!data.password) {
      errors.password = "password is required";
    } else {
      const failsCheck = checks.filter(({ regex }) => {
        return !regex.test(data.password);
      });
      if (data.password.length < 8) {
        errors.password = "password must be 8 character long";
      } else if (failsCheck.length > 0) {
        errors.password = "please password make strong";
        const someeror = failsCheck.map(({ message }) => {
          return message;
        });
        errors.password = someeror.join(", ");
      }
    }

    return errors;
  };
  const value = useContext(UserContext);
  console.log("context value", value);
  return (
    <>
      <form action="" onSubmit={handleonsubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={formdata.username}
            onChange={handleonchange}
          />
          {error.username && (
            <div style={{ color: "red" }}>{error.username}</div>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formdata.password}
            onChange={handleonchange}
          />
          {error.password && (
            <div style={{ color: "red" }}>{error.password}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Learing;
