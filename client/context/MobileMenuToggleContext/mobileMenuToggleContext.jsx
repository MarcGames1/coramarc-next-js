import { createContext, useState } from 'react';



 const MobileContext = createContext();

const MobileContextProvider = ({ children }) => {
    const [open, setOpen] = useState("")

    const handleOpen = () => {
        setOpen('open')
    }

    const handleClose = () => {
        setOpen("")
    }
    return (
        < MobileContext.Provider

            value={[open, handleClose, handleOpen]}>
            {children}
        </MobileContext.Provider>
    )
}


export   {MobileContextProvider, MobileContext}