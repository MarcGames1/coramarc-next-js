import Main_Nav from "../components/navbar/Navbar"
import {  AuthContext } from "../context/auth"
import { useContext } from "react"

const HomePage = () =>{
    const [auth, setAuth]=useContext(AuthContext)


    return(
        <>
        <Main_Nav />

        
            <pre>
                {JSON.stringify(auth,null,5)}
            </pre>
        
        </>
    )



}


export default HomePage