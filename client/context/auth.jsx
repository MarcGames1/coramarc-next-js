import axios from "axios";
import { useEffect, useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider=({children})=>{
    const [auth, setAuth]=useState({
        user:null,
        token:'',
    })

    //config axios
    if(process.server) {
        axios.defaults.baseURL = process.env.API
    } else{
        axios.defaults.baseURL = process.env.NEXT_PUBLIC_API
    }

    
    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setAuth(JSON.parse(localStorage.getItem("auth")));
        }
    }, []);

    
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )


}

export{AuthProvider, AuthContext}