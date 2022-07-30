import { createContext, useState, useEffect } from 'react';



const OffCanvasSearchContext = createContext();

 const OffCanvasSearchContextProvider = ({children}) =>{
    const [show, setShow] = useState("")
     const escKeyPressEventSearch = (event) => {
        

             if (event.key === "Escape") {
                 setShow("")
             }

         
     }
    useEffect(() =>{
        if (typeof window !== "undefined") {
      
            // Client-side-only code
        window.addEventListener('keydown', escKeyPressEventSearch)
        }
    },[])


    const hideSearch = ()=>{
        setShow("")
    }

     const showSearch = () => {
         setShow("show")
     }
     
    return(
        < OffCanvasSearchContext.Provider
            
        value={[show, hideSearch, showSearch]}>
            {children}
            </OffCanvasSearchContext.Provider>
    )
}


export { OffCanvasSearchContextProvider, OffCanvasSearchContext }