import { useContext } from "react"
import { MobileContext } from '../../context/MobileMenuToggleContext/mobileMenuToggleContext'



const OffCanvasMobileMenu = () =>{

    const [open, handleClose] =useContext(MobileContext)




    return (<>
        {/* <!-- off-canvas menu start --> */}
        <aside className={`off-canvas-wrapper ${open}`}>
            <div onClick={handleClose} className="off-canvas-overlay"></div>
            <div className="off-canvas-inner-content">
                <div onClick={handleClose} className="btn-close-off-canvas">
                    <i className="fa fa-close"></i>
                </div>

                <div className="off-canvas-inner">
                    {/* <!-- search box start --> */}
                    <div className="search-box-offcanvas">
                        <form>
                            <input type="text" placeholder="Search Here..." />
                            <button className="search-btn"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                    {/* <!-- search box end --> */}

                    {/* <!-- mobile menu start --> */}
                    <div className="mobile-navigation">

                        {/* <!-- mobile menu navigation start --> */}
                        <nav>
                            <ul className="mobile-menu">
                                <li className="menu-item-has-children"><a href="index.html">Home</a>
                                    <ul className="dropdown">
                                        <li><a href="index.html">Home version 01</a></li>
                                        <li><a href="index-2.html">Home version 02</a></li>
                                        <li><a href="index-3.html">Home version 03</a></li>
                                        <li><a href="index-4.html">Home version 04</a></li>
                                        <li><a href="index-5.html">Home version 05</a></li>
                                        <li><a href="index-6.html">Home version 06</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="#">pages</a>
                                    <ul className="megamenu dropdown">
                                        <li className="mega-title menu-item-has-children"><a href="#">column 01</a>
                                            <ul className="dropdown">
                                                <li><a href="shop.html">shop grid left
                                                    sidebar</a></li>
                                                <li><a href="shop-grid-right-sidebar.html">shop grid right
                                                    sidebar</a></li>
                                                <li><a href="shop-list-left-sidebar.html">shop list left sidebar</a></li>
                                                <li><a href="shop-list-right-sidebar.html">shop list right sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="mega-title menu-item-has-children"><a href="#">column 02</a>
                                            <ul className="dropdown">
                                                <li><a href="product-details.html">product details</a></li>
                                                <li><a href="product-details-affiliate.html">product
                                                    details
                                                    affiliate</a></li>
                                                <li><a href="product-details-variable.html">product details
                                                    variable</a></li>
                                                <li><a href="product-details-group.html">product details
                                                    group</a></li>
                                            </ul>
                                        </li>
                                        <li className="mega-title menu-item-has-children"><a href="#">column 03</a>
                                            <ul className="dropdown">
                                                <li><a href="cart.html">cart</a></li>
                                                <li><a href="checkout.html">checkout</a></li>
                                                <li><a href="compare.html">compare</a></li>
                                                <li><a href="wishlist.html">wishlist</a></li>
                                            </ul>
                                        </li>
                                        <li className="mega-title menu-item-has-children"><a href="#">column 04</a>
                                            <ul className="dropdown">
                                                <li><a href="my-account.html">my-account</a></li>
                                                <li><a href="login-register.html">login-register</a></li>
                                                <li><a href="about-us.html">about us</a></li>
                                                <li><a href="contact-us.html">contact us</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children "><a href="#">shop</a>
                                    <ul className="dropdown">
                                        <li className="menu-item-has-children"><a href="#">shop grid layout</a>
                                            <ul className="dropdown">
                                                <li><a href="shop.html">shop grid left sidebar</a></li>
                                                <li><a href="shop-grid-right-sidebar.html">shop grid right sidebar</a></li>
                                                <li><a href="shop-grid-full-3-col.html">shop grid full 3 col</a></li>
                                                <li><a href="shop-grid-full-4-col.html">shop grid full 4 col</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">shop list layout</a>
                                            <ul className="dropdown">
                                                <li><a href="shop-list-left-sidebar.html">shop list left sidebar</a></li>
                                                <li><a href="shop-list-right-sidebar.html">shop list right sidebar</a></li>
                                                <li><a href="shop-list-full-width.html">shop list full width</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">products details</a>
                                            <ul className="dropdown">
                                                <li><a href="product-details.html">product details</a></li>
                                                <li><a href="product-details-affiliate.html">product details affiliate</a></li>
                                                <li><a href="product-details-variable.html">product details variable</a></li>
                                                <li><a href="product-details-group.html">product details group</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children "><a href="#">Blog</a>
                                    <ul className="dropdown">
                                        <li><a href="blog-left-sidebar.html">blog left sidebar</a></li>
                                        <li><a href="blog-list-left-sidebar.html">blog list left sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html">blog right sidebar</a></li>
                                        <li><a href="blog-list-right-sidebar.html">blog list right sidebar</a></li>
                                        <li><a href="blog-grid-full-width.html">blog grid full width</a></li>
                                        <li><a href="blog-details.html">blog details</a></li>
                                        <li><a href="blog-details-left-sidebar.html">blog details left sidebar</a></li>
                                        <li><a href="blog-details-audio.html">blog details audio</a></li>
                                        <li><a href="blog-details-video.html">blog details video</a></li>
                                        <li><a href="blog-details-image.html">blog details image</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact-us.html">Contact us</a></li>
                            </ul>
                        </nav>
                        {/* <!-- mobile menu navigation end --> */}
                    </div>
                    {/* <!-- mobile menu end --> */}

                    <div className="mobile-settings">
                        <ul className="nav">
                            <li>
                                <div className="dropdown mobile-top-dropdown">
                                    <a href="#" className="dropdown-toggle" id="currency" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Currency
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="currency">
                                        <a className="dropdown-item" href="#">$ USD</a>
                                        <a className="dropdown-item" href="#">$ EURO</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown mobile-top-dropdown">
                                    <a href="#" className="dropdown-toggle" id="myaccount" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        My Account
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="myaccount">
                                        <a className="dropdown-item" href="my-account.html">my account</a>
                                        <a className="dropdown-item" href="login-register.html"> login</a>
                                        <a className="dropdown-item" href="login-register.html">register</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- offcanvas widget area start --> */}
                    <div className="offcanvas-widget-area">
                        <div className="off-canvas-contact-widget">
                            <ul>
                                <li><i className="fa fa-mobile"></i>
                                    <a href="#">0123456789</a>
                                </li>
                                <li><i className="fa fa-envelope-o"></i>
                                    <a href="#">info@yourdomain.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="off-canvas-social-widget">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-pinterest-p"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-youtube-play"></i></a>
                        </div>
                    </div>
                    {/* <!-- offcanvas widget area end --> */}
                </div>
            </div>
        </aside>
    </>
    )
}

export default OffCanvasMobileMenu