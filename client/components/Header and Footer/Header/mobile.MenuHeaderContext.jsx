
import {MobileContextProvider}   from '../../../context/MobileMenuToggleContext/mobileMenuToggleContext.jsx'
import { CategoryProvider } from '../../admin/AdminPanel/index.jsx';
import { OffCanvasMobileMenu } from "../../OffCanvas"
import MobileHeader from "./mobileHeader"
const MobileMenuHeaderContext = ()=>{

    
    return (
      <>
        <CategoryProvider>
          <MobileContextProvider>
            <MobileHeader />
            <OffCanvasMobileMenu />
          </MobileContextProvider>
        </CategoryProvider>
      </>
    );
}

export default MobileMenuHeaderContext

