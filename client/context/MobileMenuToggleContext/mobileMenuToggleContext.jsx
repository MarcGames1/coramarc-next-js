import { createContext, useState } from 'react';



 const MobileContext = createContext();

const MobileContextProvider = ({ children }) => {
    const [open, setOpen] = useState('false')

    const handleOpen = () => {
        setOpen('open')
    }

    const handleClose = () => {
        setOpen('false')
    }
    return (
        < MobileContext.Provider

            value={[open, handleClose, handleOpen]}>
            {children}
        </MobileContext.Provider>
    )
}


export   {MobileContextProvider, MobileContext}