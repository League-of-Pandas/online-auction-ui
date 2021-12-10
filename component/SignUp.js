import React from "react"
// import useResource from "../hooks/useResource";
// import { useAuth } from "../contexts/auth"

function SignUp() {
    // const { resources, loading, createResource } = useResource();

    // const {login} = useAuth();
    // const [username,setUserName] =React.useState({

    // }) 
   

    function handleSignUp(e) {
        console.log(csrftoken);
        if (csrftoken) {
            e.preventDefault()
            const email = e.target.email.value
            const password1 = e.target.password1.value
            // login(email, password)
            const newUser = {
                email: email,
                password1: password1,
            }
            console.log(newUser);
            createResource(newUser)
        }



    }
    
    return (
        <>
            <form onSubmit={handleSignUp}>
                {/* csrf_token */}
                <input type="hidden" name="remember" value="true" />
                <div >
                    <div>
                        <label  >Email address</label>
                        <input id="id_email" name="email" type="email" required placeholder="E-mail address" />

                    </div>
                    <div>
                        <label  >Password</label>
                        <input id="id_password1" name="password1" type="password" required placeholder="Password" />

                    </div>
                </div>

                <div>
                    <button className="h-12 text-xl " > Sign Up </button>

                </div>
            </form>
        </>
    )
}

export default SignUp