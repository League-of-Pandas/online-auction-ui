import React, { useEffect, useState } from "react"
import { useAuth } from "../contexts/auth"
import Main from "./main";

export default function LoginForm() {
    const { login, user } = useAuth();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handlelogin(e) {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        setUsername(username => [...username, username])
        setPassword(password => [...password, password])
        login(username, password)
        // console.log(user);
    }

    return (
        <>
            {
                (user) ? (
                    <>
                        <Main />
                    </>

                ) : (
                    <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
                        <div className="w-full max-w-md space-y-8">
                            <div>
                                <img
                                    className="w-auto h-12 mx-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt="Workflow"
                                />
                                <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>

                            </div>
                            <form className="mt-8 space-y-6" onSubmit={handlelogin} >
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="-space-y-px rounded-md shadow-sm">
                                    <div>
                                        <label htmlFor="username" className="sr-only">
                                            UserName
                                        </label>
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            autoComplete="username"
                                            required
                                            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="User Name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            {/* <LockClosedIcon className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                                        </span>
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }

        </>
    )
}

                    // <div className="w-2/3 h-56 mx-auto my-10 bg-green-200">

                    //     <form className="w-3/4 p-2 mx-auto my-4 bg-green-200 " onSubmit={handlelogin}>
                    //         <div className="flex flex-col items-center justify-center">
                    //             <label htmlFor="username" >User name</label>
                    //             <br />
                    //             <input type="text" name="username" id="username" className="flex-grow w-10/12 bg-gray-200 rounded-sm" />
                    //         </div>

                    //         <div className="flex flex-col items-center justify-center">
                    //             <label htmlFor="password" >Password</label>
                    //             <br />
                    //             <input type="password" name="password" id="password" className="flex-grow w-10/12 mt-2 bg-gray-200 rounded-sm" />
                    //         </div>
                    //         <br />
                    //         <div className="flex-grow w-10/12 mx-auto my-1 font-semibold bg-green-500 rounded ">
                    //             {/* <Link href="/" passHref > */}
                    //             <button className="h-12 text-xl " > Log in</button>
                    //             {/* </Link> */}

                    //         </div>
                    //     </form>
                    // </div>