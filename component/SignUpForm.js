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
        console.log(newUser);

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
                            className="w-auto h-12 mx-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
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
                                <label htmlFor="username" className="sr-only">
                                    UserName
                                </label>
                                <input
                                    id="username"
                                    name="UserName"
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
                                    name="password1"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
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
            // <form onSubmit={handleSignUp}>
            //     {/* csrf_token */}
            //     <input type="hidden" name="remember" value="true" />
            //     <div >
            //         <div>
            //             <label  >Email address</label>
            //             <input id="id_email" name="email" type="email" required placeholder="E-mail address" />

            //         </div>
            //         <div>
            //             <label  >UserName</label>
            //             <input id="id_UserName" name="UserName" type="text" required placeholder="UserName" />

            //         </div>
            //         <div>
            //             <label  >Password</label>
            //             <input id="id_password1" name="password1" type="password" required placeholder="Password" />

            //         </div>
            //     </div>

            //     <div>
            //         <button className="h-12 text-xl " > Sign Up </button>

            //     </div>
            // </form>