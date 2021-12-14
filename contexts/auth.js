
import { createContext, useContext, useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const tokenURL = `${baseURL}api/token/`


const AuthContext = createContext();

export function useAuth() {
    const auth = useContext(AuthContext)
    if (!auth) throw new Error("Please use this context in a descendent of the AuthProvider")
    // console.log(auth)
    return auth
}

export function AuthProvider(props) {
    useEffect(()=>{
        let token = JSON.parse(localStorage.getItem('token'))
        if (token){
            const decodeAccess = jwt.decode(token.access);
            // console.log(decodeAccess);
            const newState = {
                tokens:token,
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
        
    },[])
   const [state,setState] = useState({
       tokens: null,
       user:null,
       login,
       logout,
   });
    async function login(username,password) {
        
        try{
            const response = await axios.post(tokenURL,{username,password});
            const decodeAccess = jwt.decode(response.data.access);
            // console.log(decodeAccess);
            localStorage.setItem('token', JSON.stringify(response.data))
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
        localStorage.clear()
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