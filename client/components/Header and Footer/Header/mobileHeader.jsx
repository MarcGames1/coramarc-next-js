import { useContext, useState, useEffect} from "react"
import { MobileContext } from "../../../context/MobileMenuToggleContext/mobileMenuToggleContext"
import { ScrollPosition } from "../../../context/ScrollPositionContext/ScrollPositionContext"
import { ShoppingCart } from "./components";


const MobileHeader = () =>{

    const [open, handleClose, handleOpen] = useContext(MobileContext)
    const [sticky, setSticky] = useState('sticky')
    const [scroolPosition] = useContext(ScrollPosition)

    const addSticky = () => {
        setSticky('sticky is-sticky')
    }


    const removeSticky = () => {
        setSticky('sticky')
    }

    useEffect(() => {
        if (scroolPosition < 100) {
            removeSticky()
        }
        else {
            addSticky()
        }

    }, [scroolPosition])

    return(<>
        {/* <!-- mobile header start --> */}
        <div className={`mobile-header d-lg-none d-md-block sticky black-soft ${sticky}`}>
            {/* <!--mobile header top start --> */}
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="mobile-main-header">
                            <div className="mobile-logo">
                                <a href="index.html">
                                    <img src="assets/img/logo/logo.png" alt="Brand Logo" />
                                </a>
                            </div>
                            <div className="mobile-menu-toggler">
                                <ShoppingCart itemsCount={2}/>
                                <button onClick={handleOpen} className="mobile-menu-btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- mobile header top start --> */}
        </div>
        {/* <!-- mobile header end --> */}
    </>)
}

export default MobileHeader