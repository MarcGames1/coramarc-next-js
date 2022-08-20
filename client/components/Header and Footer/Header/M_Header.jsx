import { useContext } from "react"
import { OffCanvasSearchContext } from "../../../context/offCanvasSearchContext/offCanvasSearchContext"
import { UserInfo, UserSocialLinks } from "./components"
import HeaderMiddleArea from "./HeaderMiddleArea"


import MobileMenuHeaderContext from "./mobile.MenuHeaderContext"
const M_Header = () =>{

    const [show, setShow] = useContext(OffCanvasSearchContext)
   
    return (
      <>
        {/* <!-- Start Header Area --> */}
        <header className="header-area">
          {/* <!-- main header start --> */}
          <div className="main-header d-none d-lg-block">
            {/* <!-- header top start --> */}
            <div className="header-top black-bg">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    
                  </div>
                  <div className="col-lg-6 d-flex justify-content-end">
                    <UserSocialLinks />
                 
                    <UserInfo />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- header top end --> */}

            <HeaderMiddleArea />
          </div>
          {/* <!-- main header start --> */}
          <MobileMenuHeaderContext />

          {/* <!-- mobile header start --> */}
          {/* <!-- mobile header end --> */}

          {/* <!-- offcanvas mobile menu start --> */}
          {/* <!-- off-canvas menu end --> */}
          {/* <!-- offcanvas mobile menu end --> */}
        </header>
        {/* <!-- end Header Area --> */}
      </>
    );
}

export default M_Header

