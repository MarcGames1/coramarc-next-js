
import {MobileContextProvider}   from '../../../context/MobileMenuToggleContext/mobileMenuToggleContext.jsx'
import { OffCanvasMobileMenu } from "../../OffCanvas"
import MobileHeader from "./mobileHeader"
const MobileMenuHeaderContext = ()=>{

    
    return(<>

            <MobileContextProvider>
            <MobileHeader />
            <OffCanvasMobileMenu />
            </MobileContextProvider>
        
    </>);
}

export default MobileMenuHeaderContext

