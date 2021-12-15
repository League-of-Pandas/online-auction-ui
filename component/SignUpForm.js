import axios from "axios";
import React from "react"
import { useAuth } from "../contexts/auth";
import useUsers from "../hooks/useUsers";

function SignUpForm() {
    const { createResource } = useUsers();


    async function handleSignUp(e) {
        e.preventDefault()
        const newUser = {
            password: e.target.password1.value,
            username: e.target.UserName.value,
            email: e.target.email.value
        }
        console.log('register user',newUser);

        createResource(newUser)
        // NEXT_PUBLIC_RESOURCE_URLS
        // await axios.post(apiUrl, info);
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="w-auto h-32 mx-auto"
                            src="https://i.pinimg.com/474x/7d/9c/1f/7d9c1fb259e09760c50fc9f336ffe21f.jpg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Register your new account</h2>

                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSignUp} >
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div>
                                <label htmlFor="username-register" className="sr-only">
                                    UserName
                                </label>
                                <input
                                    id="username-register"
                                    name="UserName"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="User Name"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="password-register" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password-register"
                                    name="password1"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        

                        <div className="bg-indigo-500 rounded-lg">
                            <button
                                type="submit"
                                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                </span>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUpForm
