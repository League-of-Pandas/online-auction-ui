import SignUpForm from "../component/SignUpForm"

function signUpForm() {
 

    return (
        <>
        <SignUpForm />
        </>
    )
}

export default signUpForm
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