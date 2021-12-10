import { createContext, useContext, useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const tokenURL = `${baseURL}api/token/`

const AuthContext = createContext();

export function useAuth() {
    const auth = useContext(AuthContext)
    if (!auth) throw new Error("Please use this context in a descendent of the AuthProvider")
    return auth
}

export function AuthProvider(props) {
   const [state,setState] = useState({
       tokens: null,
       user:null,
       login,
       logout,
   });
    async function login(username,password) {
        try{
            const response = await axios.post(tokenURL,{username,password});
            // console.log(response);
            const decodeAccess = jwt.decode(response.data.access);
            // console.log(decodeAccess);
            
            const newState = {
                tokens:response.data,
                user:{
                    username: decodeAccess.username,
                    email: decodeAccess.email,
                    id: decodeAccess.user_id,
                }
            }
            // setState(newState)
            setState((prevState)=>({...prevState, ...newState}))
            // 
        }
        catch(error){
            console.log(error);

        }
    }
    function logout() {
        const newState = {
            tokens:null,
            user:null
        }
        setState((prevState)=>({...prevState, ...newState}))
    }
    return(
        <AuthContext.Provider value={state}>
            {
                props.children
            }    
        </AuthContext.Provider>
    )
}