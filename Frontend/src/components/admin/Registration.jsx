// import React from 'react'

import { useState } from "react"


const Registration = () => {
    const [registration, setRegistration] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const [error, setError] = useState({
        password: "",
    });

    const validate = () => {

        let tmpErrors = {}
        let isValid = true;

        if (registration.password !== registration.confirmpassword) {
            tmpErrors.password = "Passwords does not match"
            isValid = false;
        }

        setError(tmpErrors);
        return isValid;
    }

    const handleonchange = (e) => {
        const { name, value } = e.target;
        setRegistration(() => {
            return { ...registration, [name]: value }
        })
    }
    const handleonsubmit = (e) => {
        e.preventDefault();
        if (validate()) {

            console.log(registration);
            setRegistration({
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
            })
        }
    }

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto bg-zinc-600 rounded p-6">
                    <h2 className="text-2xl font-bold text-zinc-100 mb-6">
                        Admin Registration
                    </h2>
                    <form action="/admin/dashboard/registration" method="POST" encType="multipart/htmlForm-data" onSubmit={handleonsubmit}>

                        <div className="mb-4">
                            <label htmlFor="username" className="block text-zinc-200 mb-2">Username</label>
                            <input type="text" id="username" name="username"
                                className="w-full px-3 py-2 leading-tight text-zinc-200 bg-zinc-700 rounded focus:outline-none focus:bg-zinc-800"
                                placeholder="Enter your username" value={registration.username} onChange={handleonchange} required />
                        </div>


                        <div className="mb-4">
                            <label htmlFor="email" className="block text-zinc-200 mb-2">Email</label>
                            <input type="email" id="email" name="email"
                                className="w-full px-3 py-2 leading-tight text-zinc-200 bg-zinc-700 rounded focus:outline-none focus:bg-zinc-800"
                                placeholder="Enter your email address" value={registration.email} onChange={handleonchange} required />
                        </div>


                        <div className="mb-6">
                            <label htmlFor="password" className="block text-zinc-200 mb-2">Password</label>
                            <input type="password" id="password" name="password"
                                className="w-full px-3 py-2 leading-tight text-zinc-200 bg-zinc-700 rounded focus:outline-none focus:bg-zinc-800"
                                placeholder="Enter your password" value={registration.password} onChange={handleonchange} required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirmpassword" className="block text-zinc-200 mb-2">Confirm Password</label>
                            <input type="password" id="confirmpassword" name="confirmpassword"
                                className="w-full px-3 py-2 leading-tight text-zinc-200 bg-zinc-700 rounded focus:outline-none focus:bg-zinc-800"
                                placeholder="Enter confirm password" value={registration.confirmpassword} onChange={handleonchange} required />
                        </div>

                        {/* 
                        {registration.password !== registration.confirmpassword ? <div className="mb-4 p-4 text-red-800 bg-red-200 rounded border border-red-300"> Password does not match </div> : null} */}


                        {
                            error.password && (
                                <div className="mb-4 p-4 text-red-800 bg-red-200 rounded border border-red-300">
                                    {error.password}
                                </div>
                            )
                        }

                        {/* <div className="mb-6">
                            <label htmlFor="password" className="block text-zinc-200 mb-2">Profie Picture</label>
                            <input type="file" id="Profie" name="profile"
                                className="w-full px-3 py-2 leading-tight text-zinc-200 bg-zinc-700 rounded focus:outline-none focus:bg-zinc-800" />
                        </div> */}
                        {/* <% if (typeof error !=='undefined' ) { %>
          <div className="mb-4 p-4 text-red-800 bg-red-200 rounded border border-red-300">
            <%= error %>
          </div>
          <% } %> */}

                        <button type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registration
