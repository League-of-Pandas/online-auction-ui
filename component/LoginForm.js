import React from "react"
import {useAuth} from "../contexts/auth"
function LoginForm({login}) {
    // const {login} = useAuth();
    // const [username,setUserName] =React.useState({
        
    // }) 
    function handlelogin(e) {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        login(username,password)

        
    }
    return (
        <>
            <div className="w-2/3 h-56 mx-auto my-10 bg-green-200">

                <form className="w-3/4 p-2 mx-auto my-4 bg-green-200 " onSubmit={handlelogin}>
                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="username" >User name</label>
                        <br />
                        <input type="text" name="username" id="username" className="flex-grow w-10/12 bg-gray-200 rounded-sm" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="password" >Password</label>
                        <br />
                        <input type="password" name="password" id="password" className="flex-grow w-10/12 mt-2 bg-gray-200 rounded-sm" />
                    </div>
                    <br />
                    <div className="flex-grow w-10/12 mx-auto my-1 font-semibold bg-green-500 rounded ">
                        <button className="h-12 text-xl " >Log in </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm