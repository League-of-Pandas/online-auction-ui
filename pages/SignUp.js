import axios from "axios";
import React from "react"
import { useAuth } from "../contexts/auth";
import useResource from "../hooks/useResource";
import bcrypt from 'bcryptjs'
// import useResourceUser from "../hooks/useResources";
// import useResource from "../hooks/useResources";
// import axios from 'axios'

function SignUp() {
    const { user } = useAuth();
    console.log(user);
    // login("admin","auction123")
    const {  createResource } = useResource();
    const salt = bcrypt.genSaltSync(10)

    // const {login} = useAuth();
    // const [username,setUserName] =React.useState({

    // }) 
   

    async function handleSignUp(e) {
        // console.log(csrftoken);
        e.preventDefault()
        const email = e.target.email.value
        const password1 = e.target.password1.value
        const hashedPassword = bcrypt.hashSync(password1, salt) // hash created previously created upon sign up
        // bcrypt.has
        // login(email, password)
        const newUser = {
            // email: email,
            // password1: password1,
            // username: "asdsa",
            // first_name: "",
            // last_name: "",
            password:hashedPassword,
            username: "tahany3",
            first_name: "",
            last_name: "",
            email: "tahany3@yahoo.com"
        }
        // console.log(hashedPassword);
        // console.log(salt);
        // console.log(newUser);
        // createResource(newUser)
        // await axios.post("http://127.0.0.1:8000/user/", newUser)
        // let userN = await axios.post("http://127.0.0.1:8000/user/", newUser);
        
        // console.log(newUser);

        // createResource(newUser)




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