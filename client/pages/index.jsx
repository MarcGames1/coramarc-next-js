import Main_Nav from "../components/navbar/Navbar"
import {  AuthContext } from "../context/auth"
import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faHeart, faCart as faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Head from "next/head"
import Slider from "../components/HomePage/Slider/Slider"

const HomePage = () =>{
    const [auth, setAuth]=useContext(AuthContext)


    return(
        <>
       

        
            <pre>
                {JSON.stringify(auth,null,5)}
            </pre>

    {/* <!-- Start Header Area --> */}
    <header className="header-area">
        {/* <!-- main header start --> */}
        <div className="main-header d-none d-lg-block">
            {/* <!-- header top start --> */}
            <div className="header-top black-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="top-left-navigation">
                                <ul className="nav align-items-center">
                                    <li className="language">
                                        <img src="assets/img/icon/en.png" alt="flag" /> ENGLISH
                                        <i className="fa fa-angle-down"></i>
                                        <ul className="dropdown-list">
                                            <li><a href="#"><img src="assets/img/icon/en.png" alt="flag" /> English</a></li>
                                            <li><a href="#"><img src="assets/img/icon/fr.png" alt="flag" /> French</a></li>
                                        </ul>
                                    </li>
                                    <li className="curreny-wrap">
                                        $ CURRENCY
                                        <i className="fa fa-angle-down"></i>
                                        <ul className="dropdown-list curreny-list">
                                            <li><a href="#">$ USD</a></li>
                                            <li><a href="#">€ EURO</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <div className="header-social-link">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                            </div>
                            <ul className="user-info-block">
                                <li><a href="my-account.html"><i className="fa fa-user-circle"></i> My Account</a></li>
                                <li><a href="checkout.html"><i className="fa fa-credit-card"></i> Checkout</a></li>
                                <li><a href="login-register.html"><i className="fa fa-sign-in"></i> Sign In</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- header top end --> */}

            {/* <!-- header middle area start --> */}
            <div className="header-main-area black-soft sticky">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        {/* <!-- start logo area --> */}
                        <div className="col-auto">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="assets/img/logo/logo.png" alt="Brand Logo" />
                                </a>
                            </div>
                        </div>
                        {/* <!-- start logo area --> */}

                        {/* <!-- main menu area start --> */}
                        <div className="col-auto position-static">
                            <div className="main-menu-area">
                                <div className="main-menu">
                                    {/* <!-- main menu navbar start --> */}
                                    <nav className="desktop-menu">
                                        <ul>
                                            <li className="active"><a href="index.html">Home <i className="fa fa-angle-down"></i></a>
                                                <ul className="dropdown">
                                                    <li><a href="index.html">Home version 01</a></li>
                                                    <li><a href="index-2.html">Home version 02</a></li>
                                                    <li><a href="index-3.html">Home version 03</a></li>
                                                    <li><a href="index-4.html">Home version 04</a></li>
                                                    <li><a href="index-5.html">Home version 05</a></li>
                                                    <li><a href="index-6.html">Home version 06</a></li>
                                                </ul>
                                            </li>
                                            <li className="position-static"><a href="#">pages <i className="fa fa-angle-down"></i></a>
                                                <ul className="megamenu dropdown">
                                                    <li className="mega-title"><span>column 01</span>
                                                        <ul>
                                                            <li><a href="shop.html">shop grid left
                                                                    sidebar</a></li>
                                                            <li><a href="shop-grid-right-sidebar.html">shop grid right
                                                                    sidebar</a></li>
                                                            <li><a href="shop-list-left-sidebar.html">shop list left sidebar</a></li>
                                                            <li><a href="shop-list-right-sidebar.html">shop list right sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-title"><span>column 02</span>
                                                        <ul>
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
                                                    <li className="mega-title"><span>column 03</span>
                                                        <ul>
                                                            <li><a href="cart.html">cart</a></li>
                                                            <li><a href="checkout.html">checkout</a></li>
                                                            <li><a href="compare.html">compare</a></li>
                                                            <li><a href="wishlist.html">wishlist</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-title"><span>column 04</span>
                                                        <ul>
                                                            <li><a href="my-account.html">my-account</a></li>
                                                            <li><a href="login-register.html">login-register</a></li>
                                                            <li><a href="about-us.html">about us</a></li>
                                                            <li><a href="contact-us.html">contact us</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="shop.html">shop <i className="fa fa-angle-down"></i></a>
                                                <ul className="dropdown">
                                                    <li><a href="#">shop grid layout <i className="fa fa-angle-right"></i></a>
                                                        <ul className="dropdown">
                                                            <li><a href="shop.html">shop grid left sidebar</a></li>
                                                            <li><a href="shop-grid-right-sidebar.html">shop grid right sidebar</a></li>
                                                            <li><a href="shop-grid-full-3-col.html">shop grid full 3 col</a></li>
                                                            <li><a href="shop-grid-full-4-col.html">shop grid full 4 col</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">shop list layout <i className="fa fa-angle-right"></i></a>
                                                        <ul className="dropdown">
                                                            <li><a href="shop-list-left-sidebar.html">shop list left sidebar</a></li>
                                                            <li><a href="shop-list-right-sidebar.html">shop list right sidebar</a></li>
                                                            <li><a href="shop-list-full-width.html">shop list full width</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">products details <i className="fa fa-angle-right"></i></a>
                                                        <ul className="dropdown">
                                                            <li><a href="product-details.html">product details</a></li>
                                                            <li><a href="product-details-affiliate.html">product details affiliate</a></li>
                                                            <li><a href="product-details-variable.html">product details variable</a></li>
                                                            <li><a href="product-details-group.html">product details group</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="blog-left-sidebar.html">Blog <i className="fa fa-angle-down"></i></a>
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
                                    {/* <!-- main menu navbar end --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- main menu area end --> */}

                        {/* <!-- mini cart area start --> */}
                        <div className="col-auto ms-auto">
                            <div className="header-right">
                                <div className="header-configure-area">
                                    <ul className="nav">
                                        <li>
                                            <a href="#" className="search-trigger"><i className="fa fa-search"></i></a>
                                        </li>
                                        <li className="mini-cart-wrap">
                                            <a href="#" className="minicart-btn">
                                                <i className="fa fa-shopping-cart"></i>
                                                <span className="notification">2</span>
                                            </a>
                                            <div className="cart-list-wrapper">
                                                <ul className="cart-list">
                                                    <li>
                                                        <div className="cart-img">
                                                            <a href="product-details.html"><img src="assets/img/cart/cart-1.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="cart-info">
                                                            <h6 className="product-name"><a href="product-details.html">7th Generation classNameic</a></h6>
                                                            <span className="cart-qty">Qty: 1</span>
                                                            <span className="item-price">$60.00</span>
                                                        </div>
                                                        <div className="del-icon">
                                                            <i className="fa fa-times"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="cart-img">
                                                            <a href="product-details.html"><img src="assets/img/cart/cart-2.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="cart-info">
                                                            <h6 className="product-name"><a href="product-details.html">Digital 8th generation</a></h6>
                                                            <span className="cart-qty">Qty: 2</span>
                                                            <span className="item-price">$70.00</span>
                                                        </div>
                                                        <div className="del-icon">
                                                            <i className="fa fa-times"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul className="minicart-pricing-box">
                                                    <li>
                                                        <span>Sub-Total</span>
                                                        <span><strong>$300.00</strong></span>
                                                    </li>
                                                    <li>
                                                        <span>Eco Tax (-2.00)</span>
                                                        <span><strong>$10.00</strong></span>
                                                    </li>
                                                    <li>
                                                        <span>VAT (20%)</span>
                                                        <span><strong>$60.00</strong></span>
                                                    </li>
                                                    <li className="total">
                                                        <span>Total</span>
                                                        <span><strong>$370.00</strong></span>
                                                    </li>
                                                </ul>
                                                <div className="minicart-button">
                                                    <a href="cart.html"><i className="fa fa-shopping-cart"></i> View Cart</a>
                                                    <a href="cart.html"><i className="fa fa-share"></i> Checkout</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- mini cart area end --> */}

                    </div>
                </div>
            </div>
            {/* <!-- header middle area end --> */}
        </div>
        {/* <!-- main header start --> */}

        {/* <!-- mobile header start --> */}
        {/* <!-- mobile header start --> */}
        <div className="mobile-header d-lg-none d-md-block sticky black-soft">
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
                                <div className="mini-cart-wrap">
                                    <a href="cart.html">
                                        <i className="fa fa-shopping-cart"></i>
                                        <div className="notification">0</div>
                                    </a>
                                </div>
                                <button className="mobile-menu-btn">
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
        {/* <!-- mobile header end --> */}

        {/* <!-- offcanvas mobile menu start --> */}
        {/* <!-- off-canvas menu start --> */}
        <aside className="off-canvas-wrapper">
            <div className="off-canvas-overlay"></div>
            <div className="off-canvas-inner-content">
                <div className="btn-close-off-canvas">
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
        {/* <!-- off-canvas menu end --> */}
        {/* <!-- offcanvas mobile menu end --> */}
    </header>
    {/* <!-- end Header Area --> */}


    {/* <!-- offcanvas search form start --> */}
    <div className="offcanvas-search-wrapper">
        <div className="offcanvas-search-inner">
            <div className="offcanvas-close">
                <i className="fa fa-close"></i>
            </div>
            <div className="container">
                <div className="offcanvas-search-box">
                    <form className="d-flex bdr-bottom w-100">
                        <input type="text" placeholder="Search entire storage here..." />
                        <button className="search-btn"><i className="fa fa-search"></i>search</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- offcanvas search form end --> */}

    <main>
       <Slider />

        {/* <!-- service policy start --> */}
        <section className="service-policy bg-gray mtn-100">
            <div className="container">
                <div className="row row-10">
                    <div className="col-lg-3 col-sm-6">
                        <div className="policy-block text-center">
                            <div className="policy-icon">
                                <i className="fa fa-heart-o"></i>
                            </div>
                            <div className="policy-text">
                                <h4 className="policy-title">Great Value</h4>
                                <p className="policy-desc">Nunc id ante quis tellus faucibus dictum in eget metus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="policy-block text-center">
                            <div className="policy-icon">
                                <i className="fa fa-truck"></i>
                            </div>
                            <div className="policy-text">
                                <h4 className="policy-title">Worlwide Delivery</h4>
                                <p className="policy-desc">Nunc id ante quis tellus faucibus dictum in eget metus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="policy-block text-center">
                            <div className="policy-icon">
                                <i className="fa fa-credit-card"></i>
                            </div>
                            <div className="policy-text">
                                <h4 className="policy-title">Safe Payment</h4>
                                <p className="policy-desc">Nunc id ante quis tellus faucibus dictum in eget metus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="policy-block text-center">
                            <div className="policy-icon">
                                <i className="fa fa-headphones"></i>
                            </div>
                            <div className="policy-text">
                                <h4 className="policy-title">24/7 Help Center</h4>
                                <p className="policy-desc">Nunc id ante quis tellus faucibus dictum in eget metus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- service policy end --> */}

        {/* <!-- about us area start --> */}
        <section className="about-us bg-gray section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-thumb js-tilt" data-tilt-perspective="1000" data-tilt-scale="1" data-tilt-speed="500" data-tilt-max="15">
                            <img className="w-100" src="assets/img/about/about.jpg" alt="about thumb" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <h2 className="about-title">PULLMAN SNEAKER ABOUT US.</h2>
                            <h3 className="about-subtitle">Investigationes demonstraverunt lectores legere me.</h3>
                            <p>Quisque consequat venenatis rutrum. Quisque posuere enim augue, in rhoncus diam dictum non.Nunc id ante quis tellus faucibus</p>
                            <ul className="about-info">
                                <li className="add"><i className="fa fa-home"></i>Manchester Road 123-78B, Silictown 7854MD, Great Country</li>
                                <li className="phone"><i className="fa fa-phone"></i>Phone: +46 123 456 789</li>
                                <li className="mail"><i className="fa fa-envelope"></i>Email: hello@sitename.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- about us area end --> */}

        {/* <!-- product gallery area start -->  */}
        <section className="product-gallery section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="title">NEW ARRIVALS PRODUCTS</h3>
                            <h4 className="sub-title">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas est etiam processus dynamicus, qui sequitur mutationem.</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="product-carousel--4 slick-row-5 slick-arrow-style">
                            {/* <!-- product single item start --> */}
                            <div className="product-item">
                                <div className="product-thumb">
                                    <a href="product-details.html">
                                        <img src="assets/img/product/product-1.jpg" alt="product thumb" />
                                    </a>
                                    <div className="button-group">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                    </div>
                                    <div className="product-label">
                                        <span>new</span>
                                    </div>
                                    <div className="discount-label">
                                        <span>-10% Off</span>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-caption">
                                        <h6 className="product-name">
                                            <a href="product-details.html">Quickiin Mens shoes</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-old"><del>$90.00</del></span>
                                            <span className="price-regular">$70.00</span>
                                        </div>
                                        <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                    </div>
                                    <div className="ratings">
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- product single item end --> */}

                            {/* <!-- product single item start --> */}
                            <div className="product-item">
                                <div className="product-thumb">
                                    <a href="product-details.html">
                                        <img src="assets/img/product/product-2.jpg" alt="product thumb" />
                                    </a>
                                    <div className="button-group">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                    </div>
                                    <div className="product-label">
                                        <span>new</span>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-caption">
                                        <h6 className="product-name">
                                            <a href="product-details.html">New Womens High Hills</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-old"><del>$80.00</del></span>
                                            <span className="price-regular">$60.00</span>
                                        </div>
                                        <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                    </div>
                                    <div className="ratings">
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- product single item end --> */}

                            {/* <!-- product single item start --> */}
                            <div className="product-item">
                                <div className="product-thumb">
                                    <a href="product-details.html">
                                        <img src="assets/img/product/product-3.jpg" alt="product thumb" />
                                    </a>
                                    <div className="button-group">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                    </div>
                                    <div className="product-label">
                                        <span>new</span>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-caption">
                                        <h6 className="product-name">
                                            <a href="product-details.html">Leather Mens slippers</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-old"><del>$60.00</del></span>
                                            <span className="price-regular">$50.00</span>
                                        </div>
                                        <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                    </div>
                                    <div className="ratings">
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- product single item end --> */}

                            {/* <!-- product single item start --> */}
                            <div className="product-item">
                                <div className="product-thumb">
                                    <a href="product-details.html">
                                        <img src="assets/img/product/product-4.jpg" alt="product thumb" />
                                    </a>
                                    <div className="button-group">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                    </div>
                                    <div className="product-label">
                                        <span>new</span>
                                    </div>
                                    <div className="discount-label">
                                        <span>-15% Off</span>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-caption">
                                        <h6 className="product-name">
                                            <a href="product-details.html">Rexpo Womens shoes</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-old"><del>$100.00</del></span>
                                            <span className="price-regular">$85.00</span>
                                        </div>
                                        <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                    </div>
                                    <div className="ratings">
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- product single item end --> */}

                            {/* <!-- product single item start --> */}
                            <div className="product-item">
                                <div className="product-thumb">
                                    <a href="product-details.html">
                                        <img src="assets/img/product/product-5.jpg" alt="product thumb" />
                                    </a>
                                    <div className="button-group">
                                        <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><FontAwesomeIcon icon= {faHeart} /></a>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                    </div>
                                    <div className="product-label">
                                        <span>new</span>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-caption">
                                        <h6 className="product-name">
                                            <a href="product-details.html">Primitive Mens shoes</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-old"><del>$75.00</del></span>
                                            <span className="price-regular">$55.00</span>
                                        </div>
                                        <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                    </div>
                                    <div className="ratings">
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                    
                                    </div>
                                </div>
                            </div>
                            {/* <!-- product single item end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- product gallery area end --> */}

        {/* <!-- banner statistics area start --> */}
        <div className="banner-statistics-area">
            <div className="container">
                <div className="row mtn-30">
                    <div className="col-md-6">
                        <div className="banner-statistics mt-30">
                            <a href="#">
                                <img src="assets/img/banner/banner_1.2.jpg" alt="banner thumb" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-statistics mt-30">
                            <a href="#">
                                <img src="assets/img/banner/banner_1.3.jpg" alt="banner thumb" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- banner statistics area end --> */}

        {/* <!-- product tab area start --> */}
        <section className="product-tab-area section-padding">
            <div className="container">
                <div className="pos-special-products">
                    <div className="row">
                        <div className="col-lg-6 col-right">
                            <div className="deals-tab-wrapper">
                                <div className="deals-tab-area">
                                    <div className="deals-nav-carousel">
                                        <div className="deals-nav-item">
                                            <img src="assets/img/product/product-1.jpg" alt="deals thumb" />
                                        </div>
                                        <div className="deals-nav-item">
                                            <img src="assets/img/product/product-2.jpg" alt="deals thumb" />
                                        </div>
                                        <div className="deals-nav-item">
                                            <img src="assets/img/product/product-3.jpg" alt="deals thumb" />
                                        </div>
                                        <div className="deals-nav-item">
                                            <img src="assets/img/product/product-4.jpg" alt="deals thumb" />
                                        </div>
                                        <div className="deals-nav-item">
                                            <img src="assets/img/product/product-5.jpg" alt="deals thumb" />
                                        </div>
                                        <div className="deals-nav-item">
                                            <img src="assets/img/product/product-6.jpg" alt="deals thumb" />
                                        </div>
                                    </div>
                                </div>
                                <div className="deals-content-wrapper">
                                    <div className="deals-content-carousel">
                                        {/* <!-- single slide item start --> */}
                                        <div className="deals-slide-item">
                                            <div className="deals-content-item">
                                                <h2 className="deals-title"><a href="product-details.html">Top Mens slippers</a></h2>
                                                <div className="ratings">
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                </div>
                                                <p className="deals-desc">Canon's first 4K UHD Camcorder, the GX10 has a compact and portable design that delivers ...</p>
                                                <div className="price-box">
                                                    <span className="price-old"><del>$80.00</del></span>
                                                    <span className="price-regular">$26.10</span>
                                                </div>
                                                <a className="shop-btn" href="shop.html">Add To Cart</a>
                                                <div className="product-countdown" data-countdown="2021/10/20"></div>
                                            </div>
                                        </div>
                                        {/* <!-- single slide item end --> */}
                                        {/* <!-- single slide item start --> */}
                                        <div className="deals-slide-item">
                                            <div className="deals-content-item">
                                                <h2 className="deals-title"><a href="product-details.html">Top Mens slippers</a></h2>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                                <p className="deals-desc">Canon's first 4K UHD Camcorder, the GX10 has a compact and portable design that delivers ...</p>
                                                <div className="price-box">
                                                    <span className="price-old"><del>$80.00</del></span>
                                                    <span className="price-regular">$26.10</span>
                                                </div>
                                                <a className="shop-btn" href="shop.html">Add To Cart</a>
                                                <div className="product-countdown" data-countdown="2021/09/20"></div>
                                            </div>
                                        </div>
                                        {/* <!-- single slide item end --> */}
                                        {/* <!-- single slide item start --> */}
                                        <div className="deals-slide-item">
                                            <div className="deals-content-item">
                                                <h2 className="deals-title"><a href="product-details.html">Top Mens slippers</a></h2>
                                                <div className="ratings">
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                </div>
                                                <p className="deals-desc">Canon's first 4K UHD Camcorder, the GX10 has a compact and portable design that delivers ...</p>
                                                <div className="price-box">
                                                    <span className="price-old"><del>$80.00</del></span>
                                                    <span className="price-regular">$26.10</span>
                                                </div>
                                                <a className="shop-btn" href="shop.html">Add To Cart</a>
                                                <div className="product-countdown" data-countdown="2021/09/20"></div>
                                            </div>
                                        </div>
                                        {/* <!-- single slide item end --> */}
                                        {/* <!-- single slide item start --> */}
                                        <div className="deals-slide-item">
                                            <div className="deals-content-item">
                                                <h2 className="deals-title"><a href="product-details.html">Top Mens slippers</a></h2>
                                                <div className="ratings">
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                </div>
                                                <p className="deals-desc">Canon's first 4K UHD Camcorder, the GX10 has a compact and portable design that delivers ...</p>
                                                <div className="price-box">
                                                    <span className="price-old"><del>$80.00</del></span>
                                                    <span className="price-regular">$26.10</span>
                                                </div>
                                                <a className="shop-btn" href="shop.html">Add To Cart</a>
                                                <div className="product-countdown" data-countdown="2021/09/20"></div>
                                            </div>
                                        </div>
                                        {/* <!-- single slide item end --> */}
                                        {/* <!-- single slide item start --> */}
                                        <div className="deals-slide-item">
                                            <div className="deals-content-item">
                                                <h2 className="deals-title"><a href="product-details.html">Top Mens slippers</a></h2>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                                <p className="deals-desc">Canon's first 4K UHD Camcorder, the GX10 has a compact and portable design that delivers ...</p>
                                                <div className="price-box">
                                                    <span className="price-old"><del>$80.00</del></span>
                                                    <span className="price-regular">$26.10</span>
                                                </div>
                                                <a className="shop-btn" href="shop.html">Add To Cart</a>
                                                <div className="product-countdown" data-countdown="2021/09/20"></div>
                                            </div>
                                        </div>
                                        {/* <!-- single slide item end --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- product tab area end --> */}

        {/* <!-- category area start --> */}
        <section className="category-area bg-set bg-img section-padding pb-0" data-bg="assets/img/bg/bg-listcate.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="title text-white">SHOP BY CATEGORIES PULLMAN</h3>
                            <h4 className="sub-title text-white">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas est etiam processus dynamicus, qui sequitur mutationem.</h4>
                        </div>
                    </div>
                </div>
                <div className="row category-wrapper">
                    <div className="col-12">
                        <div className="catagory-carousel-active slick-row-15">
                            <div className="single-category-item">
                                <div className="category-title">
                                    <a href="shop.html">MEN</a>
                                </div>
                                <div className="category-thumb">
                                    <a href="shop.html">
                                        <img src="assets/img/category/category-1.png" alt="category thumb" />
                                    </a>
                                </div>
                                <div className="shop-collection text-center">
                                    <a className="shop-btn" href="shop.html">Shop Collections</a>
                                </div>
                            </div>
                            <div className="single-category-item">
                                <div className="category-title">
                                    <a href="shop.html">WOMEN</a>
                                </div>
                                <div className="category-thumb">
                                    <a href="shop.html">
                                        <img src="assets/img/category/category-2.png" alt="category thumb" />
                                    </a>
                                </div>
                                <div className="shop-collection text-center">
                                    <a className="shop-btn" href="shop.html">Shop Collections</a>
                                </div>
                            </div>
                            <div className="single-category-item">
                                <div className="category-title">
                                    <a href="shop.html">QUICKIIN</a>
                                </div>
                                <div className="category-thumb">
                                    <a href="shop.html">
                                        <img src="assets/img/category/category-3.png" alt="category thumb" />
                                    </a>
                                </div>
                                <div className="shop-collection text-center">
                                    <a className="shop-btn" href="shop.html">Shop Collections</a>
                                </div>
                            </div>
                            <div className="single-category-item">
                                <div className="category-title">
                                    <a href="shop.html">Kids</a>
                                </div>
                                <div className="category-thumb">
                                    <a href="shop.html">
                                        <img src="assets/img/category/category-2.png" alt="category thumb" />
                                    </a>
                                </div>
                                <div className="shop-collection text-center">
                                    <a className="shop-btn" href="shop.html">Shop Collections</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- category area end --> */}

        {/* <!-- product gallery area start --> */}
        <section className="product-gallery section-padding mt-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="title">OUR IN STORE</h3>
                            <h4 className="sub-title">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas est etiam processus dynamicus, qui sequitur mutationem.</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="product-container">
                            {/* <!-- product tab menu start --> */}
                            <div className="product-tab-menu">
                                <ul className="nav justify-content-center">
                                    <li><a href="#tab1" className="active" data-bs-toggle="tab">New Arrival</a></li>
                                    <li><a href="#tab2" data-bs-toggle="tab">Best Seller</a></li>
                                    <li><a href="#tab3" data-bs-toggle="tab">Featured Products</a></li>
                                </ul>
                            </div>
                            {/* <!-- product tab menu end --> */}

                            {/* <!-- product tab content start --> */}
                            <div className="tab-content">
                                {/* <!-- single tab item start --> */}
                                <div className="tab-pane fade show active" id="tab1">
                                    <div className="product-carousel-4_2 slick-row-5 slick-arrow-style">
                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-1.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                                <div className="discount-label">
                                                    <span>-10% Off</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Quickiin Mens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$90.00</del></span>
                                                        <span className="price-regular">$70.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-2.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">New Womens High Hills</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$80.00</del></span>
                                                        <span className="price-regular">$60.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><FontAwesomeIcon icon={faCartShopping} /></a>
                                                </div>
                                                <div className="ratings">
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                                <span><FontAwesomeIcon icon={faStar} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-3.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Leather Mens slippers</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$60.00</del></span>
                                                        <span className="price-regular">$50.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-4.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                                <div className="discount-label">
                                                    <span>-15% Off</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Rexpo Womens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$100.00</del></span>
                                                        <span className="price-regular">$85.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-5.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Primitive Mens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$75.00</del></span>
                                                        <span className="price-regular">$55.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-6.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Quickiin Mens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$90.00</del></span>
                                                        <span className="price-regular">$70.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-7.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">New Womens High Hills</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$80.00</del></span>
                                                        <span className="price-regular">$60.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-8.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                                <div className="discount-label">
                                                    <span>-10% Off</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Leather Mens slippers</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$60.00</del></span>
                                                        <span className="price-regular">$50.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-9.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                                <div className="discount-label">
                                                    <span>-10% Off</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Quickiin Mens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$90.00</del></span>
                                                        <span className="price-regular">$70.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-10.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">New Womens High Hills</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$80.00</del></span>
                                                        <span className="price-regular">$60.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}
                                    </div>
                                </div>
                                {/* <!-- single tab item end --> */}

                                {/* <!-- single tab item start --> */}
                                <div className="tab-pane fade" id="tab2">
                                    <div className="product-carousel-4_2 slick-row-5 slick-arrow-style">
                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-10.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Quickiin Mens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$90.00</del></span>
                                                        <span className="price-regular">$70.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-9.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">New Womens High Hills</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$80.00</del></span>
                                                        <span className="price-regular">$60.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-8.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Leather Mens slippers</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$60.00</del></span>
                                                        <span className="price-regular">$50.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-7.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                                <div className="discount-label">
                                                    <span>-15% Off</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Rexpo Womens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$100.00</del></span>
                                                        <span className="price-regular">$85.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-6.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                                <div className="discount-label">
                                                    <span>-10% Off</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Primitive Mens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$75.00</del></span>
                                                        <span className="price-regular">$55.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-5.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Quickiin Mens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$90.00</del></span>
                                                        <span className="price-regular">$70.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-4.jpg" alt="product thumb" /> 
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">New Womens High Hills</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$80.00</del></span>
                                                        <span className="price-regular">$60.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-3.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                                <div className="discount-label">
                                                    <span>-10% Off</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Leather Mens slippers</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$60.00</del></span>
                                                        <span className="price-regular">$50.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-2.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                                <div className="discount-label">
                                                    <span>-10% Off</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Rexpo Womens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$100.00</del></span>
                                                        <span className="price-regular">$85.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-1.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Primitive Mens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$75.00</del></span>
                                                        <span className="price-regular">$55.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}
                                    </div>
                                </div>
                                {/* <!-- single tab item end --> */}

                                {/* <!-- single tab item start --> */}
                                <div className="tab-pane fade" id="tab3">
                                    <div className="product-carousel-4_2 slick-row-5 slick-arrow-style">
                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-2.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                                <div className="discount-label">
                                                    <span>-10% Off</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Quickiin Mens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$90.00</del></span>
                                                        <span className="price-regular">$70.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-4.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">New Womens High Hills</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$80.00</del></span>
                                                        <span className="price-regular">$60.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-6.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Leather Mens slippers</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$60.00</del></span>
                                                        <span className="price-regular">$50.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-8.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                                <div className="discount-label">
                                                    <span>-15% Off</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Rexpo Womens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$100.00</del></span>
                                                        <span className="price-regular">$85.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-10.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                                <div className="discount-label">
                                                    <span>-20% Off</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Primitive Mens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$75.00</del></span>
                                                        <span className="price-regular">$55.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-1.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Quickiin Mens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$90.00</del></span>
                                                        <span className="price-regular">$70.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-3.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">New Womens High Hills</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$80.00</del></span>
                                                        <span className="price-regular">$60.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-5.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                                <div className="discount-label">
                                                    <span>-10% Off</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Leather Mens slippers</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$60.00</del></span>
                                                        <span className="price-regular">$50.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-7.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Rexpo Womens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$100.00</del></span>
                                                        <span className="price-regular">$85.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}

                                        {/* <!-- product single item start --> */}
                                        <div className="product-item">
                                            <div className="product-thumb">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/product-9.jpg" alt="product thumb" />
                                                </a>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip"  title="Quick View"><i className="fa fa-eye"></i></span></a>
                                                </div>
                                                <div className="product-label">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-caption">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Primitive Mens shoes</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-old"><del>$75.00</del></span>
                                                        <span className="price-regular">$55.00</span>
                                                    </div>
                                                    <a className="add-to-cart" href="cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- product single item end --> */}
                                    </div>
                                </div>
                                {/* <!-- single tab item end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- product gallery area end --> */}

        {/* <!-- testimonial area start --> */}
        <section className="testimonial-area bg-img section-padding" data-bg="assets/img/bg/bg-testimonial.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="testimonial-wrapper">
                            <div className="testimonial-carousel">
                                {/* <!-- slide item start --> */}
                                <div className="testimonial-slide-item">
                                    <div className="testimonial-item text-center">
                                        <p className="testimonial-desc">
                                            "When potential customers are researching you online, they're getting to know you by way of the content of your website."
                                        </p>
                                        <div className="testimonial-author">
                                            <img src="assets/img/testimonial/testimonial-1.png" alt="testimonial author" />
                                        </div>
                                        <h6 className="author-designation">jhone doe</h6>
                                    </div>
                                </div>
                                {/* <!-- slide item end --> */}
                                {/* <!-- slide item start --> */}
                                <div className="testimonial-slide-item">
                                    <div className="testimonial-item text-center">
                                        <p className="testimonial-desc">
                                            " When potential customers are researching you online, they're getting to know you by way of the content of your website. "
                                        </p>
                                        <div className="testimonial-author">
                                            <img src="assets/img/testimonial/testimonial-1.png" alt="testimonial author" />
                                        </div>
                                        <h6 className="author-designation">jhone doe</h6>
                                    </div>
                                </div>
                                {/* <!-- slide item end --> */}
                                {/* <!-- slide item start --> */}
                                <div className="testimonial-slide-item">
                                    <div className="testimonial-item text-center">
                                        <p className="testimonial-desc">
                                            " When potential customers are researching you online, they're getting to know you by way of the content of your website. "
                                        </p>
                                        <div className="testimonial-author">
                                            <img src="assets/img/testimonial/testimonial-1.png" alt="testimonial author" />
                                        </div>
                                        <h6 className="author-designation">jhone doe</h6>
                                    </div>
                                </div>
                                {/* <!-- slide item end --> */}
                            </div>
                        </div>
                        <div className="brand-logo-wrapper">
                            <div className="brand-logo-carousel slick-row-10 slick-arrow-style">
                                {/* <!-- single brand start --> */}
                                <div className="brand-item">
                                    <a href="#">
                                        <img src="assets/img/brand/1.png" alt="" />
                                    </a>
                                </div>
                                {/* <!-- single brand end --> */}

                                {/* <!-- single brand start --> */}
                                <div className="brand-item">
                                    <a href="#">
                                        <img src="assets/img/brand/2.png" alt="" />
                                    </a>
                                </div>
                                {/* <!-- single brand end --> */}

                                {/* <!-- single brand start --> */}
                                <div className="brand-item">
                                    <a href="#">
                                        <img src="assets/img/brand/3.png" alt="" />
                                    </a>
                                </div>
                                {/* <!-- single brand end --> */}

                                {/* <!-- single brand start --> */}
                                <div className="brand-item">
                                    <a href="#">
                                        <img src="assets/img/brand/4.png" alt="" />
                                    </a>
                                </div>
                                {/* <!-- single brand end --> */}

                                {/* <!-- single brand start --> */}
                                <div className="brand-item">
                                    <a href="#">
                                        <img src="assets/img/brand/5.png" alt="" />
                                    </a>
                                </div>
                                {/* <!-- single brand end --> */}

                                {/* <!-- single brand start --> */}
                                <div className="brand-item">
                                    <a href="#">
                                        <img src="assets/img/brand/6.png" alt="" />
                                    </a>
                                </div>
                                {/* <!-- single brand end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- testimonial area end --> */}

        {/* <!-- latest blog area start --> */}
        <section className="latest-blog-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="title">FROM OUR BLOG</h3>
                            <h4 className="sub-title">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas est etiam processus dynamicus, qui sequitur mutationem.</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="blog-carousel-active slick-row-5 slick-arrow-style">
                            {/* <!-- blog single post start --> */}
                            <div className="blog-slide-item">
                                <div className="blog-post-item">
                                    <div className="blog-thumb">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/blog-1.jpg" alt="blog thumb" />
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <h6 className="blog-title">
                                            <a href="blog-details.html">This is First Post XipBlog</a>
                                        </h6>
                                        <div className="blog-meta">
                                            <span><i className="fa fa-calendar"></i>Aug 05, 2021</span>
                                            <span><i className="fa fa-user"></i>Admin</span>
                                        </div>
                                        <p className="blog-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. ...</p>
                                        <a className="btn read-more" href="blog-details.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- blog single post end --> */}
                            {/* <!-- blog single post start --> */}
                            <div className="blog-slide-item">
                                <div className="blog-post-item">
                                    <div className="blog-thumb">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/blog-2.jpg" alt="blog thumb" />
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <h6 className="blog-title">
                                            <a href="blog-details.html">This is Secound Post XipBlog</a>
                                        </h6>
                                        <div className="blog-meta">
                                            <span><i className="fa fa-calendar"></i>Jun 05, 2021</span>
                                            <span><i className="fa fa-user"></i>Admin</span>
                                        </div>
                                        <p className="blog-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. ...</p>
                                        <a className="btn read-more" href="blog-details.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- blog single post end --> */}
                            {/* <!-- blog single post start --> */}
                            <div className="blog-slide-item">
                                <div className="blog-post-item">
                                    <div className="blog-thumb">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/blog-3.jpg" alt="blog thumb" />
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <h6 className="blog-title">
                                            <a href="blog-details.html">This is Third Post XipBlog</a>
                                        </h6>
                                        <div className="blog-meta">
                                            <span><i className="fa fa-calendar"></i>May 05, 2021</span>
                                            <span><i className="fa fa-user"></i>Admin</span>
                                        </div>
                                        <p className="blog-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. ...</p>
                                        <a className="btn read-more" href="blog-details.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- blog single post end --> */}
                            {/* <!-- blog single post start --> */}
                            <div className="blog-slide-item">
                                <div className="blog-post-item">
                                    <div className="blog-thumb">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/blog-4.jpg" alt="blog thumb" />
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <h6 className="blog-title">
                                            <a href="blog-details.html">This is Fourth Post XipBlog</a>
                                        </h6>
                                        <div className="blog-meta">
                                            <span><i className="fa fa-calendar"></i>Jan 08, 2021</span>
                                            <span><i className="fa fa-user"></i>Admin</span>
                                        </div>
                                        <p className="blog-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. ...</p>
                                        <a className="btn read-more" href="blog-details.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- blog single post end --> */}
                            {/* <!-- blog single post start --> */}
                            <div className="blog-slide-item">
                                <div className="blog-post-item">
                                    <div className="blog-thumb">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/blog-2.jpg" alt="blog thumb" />
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <h6 className="blog-title">
                                            <a href="blog-details.html">This is Fifth Post XipBlog</a>
                                        </h6>
                                        <div className="blog-meta">
                                            <span><i className="fa fa-calendar"></i>Aug 05, 2021</span>
                                            <span><i className="fa fa-user"></i>Admin</span>
                                        </div>
                                        <p className="blog-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. ...</p>
                                        <a className="btn read-more" href="blog-details.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- blog single post end --> */}
                            {/* <!-- blog single post start --> */}
                            <div className="blog-slide-item">
                                <div className="blog-post-item">
                                    <div className="blog-thumb">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/blog-3.jpg" alt="blog thumb" />
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <h6 className="blog-title">
                                            <a href="blog-details.html">This is Seventh Post XipBlog</a>
                                        </h6>
                                        <div className="blog-meta">
                                            <span><i className="fa fa-calendar"></i>Aug 05, 2021</span>
                                            <span><i className="fa fa-user"></i>Admin</span>
                                        </div>
                                        <p className="blog-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. ...</p>
                                        <a className="btn read-more" href="blog-details.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- blog single post end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- latest blog area end --> */}
    </main>

    {/* <!-- Scroll to top start --> */}
    <div className="scroll-top not-visible">
        <i className="fa fa-angle-up"></i>
    </div>
    {/* <!-- Scroll to Top End --> */}


    {/* <!-- footer area start --> */}
    <footer className="black-bg">
        {/* <!-- newsletter area start --> */}
        <section className="newsletter-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="newsletter-wrapper text-center">
                            <h3 className="title text-white">JOIN OUR NEWSLETTER</h3>
                            <form className="newsletter-inner" id="mc-form">
                                <input type="email" 
                                className="news-field" 
                                id="mc-email" 
                                autoComplete="off" 
                                placeholder="Enter your email address" />
                                <button className="news-btn" id="mc-submit">Subscribe</button>
                            </form>
                            <h6 className="newsletter-subtitle">To get the latest news from us please subscribe your email.</h6>
                            {/* <!-- mailchimp-alerts Start --> */}
                            <div className="mailchimp-alerts">
                                <div className="mailchimp-submitting"></div>
                                {/* <!-- mailchimp-submitting end --> */}
                                <div className="mailchimp-success"></div>
                                {/* <!-- mailchimp-success end --> */}
                                <div className="mailchimp-error"></div>
                                {/* <!-- mailchimp-error end --> */}
                            </div>
                            {/* <!-- mailchimp-alerts end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- newsletter area end --> */}
        <div className="footer-widget-area">
            <div className="container">
                <div className="row mtn-30">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget-item mt-30">
                            <h6 className="widget-title">CUSTOM LINKS</h6>
                            <ul className="usefull-links">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">Returns {"&"} Exchanges</a></li>
                                <li><a href="#">Size Guide</a></li>
                                <li><a href="#">Cart</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget-item mt-30">
                            <h6 className="widget-title">PRODUCTS</h6>
                            <ul className="usefull-links">
                                <li><a href="#">Prices drop</a></li>
                                <li><a href="#">New products</a></li>
                                <li><a href="#">Best sales</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Sitemap</a></li>
                                <li><a href="#">Stores</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget-item mt-30">
                            <h6 className="widget-title">OUR COMPANY</h6>
                            <ul className="usefull-links">
                                <li><a href="#">Delivery</a></li>
                                <li><a href="#">Legal Notice</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Secure payment</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget-item mt-30">
                            <h6 className="widget-title">YOUR ACCOUNT</h6>
                            <ul className="usefull-links">
                                <li><a href="#">Personal info</a></li>
                                <li><a href="#">Orders</a></li>
                                <li><a href="#">Credit slips</a></li>
                                <li><a href="#">Addresses</a></li>
                                <li><a href="#">Stores</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-middle-area">
            <div className="container">
                <div className="row mtn-30">
                    <div className="col-lg-6 col-sm-12">
                        <div className="address-block mt-30">
                            <div className="footer-logo">
                                <a href="index.html">
                                    <img src="assets/img/logo/logo.png" alt="Brand Logo" />
                                </a>
                            </div>
                            <address className="address-info d-flex align-items-center">
                                <i className="fa fa-map-marker"></i>
                                <p><span>ADDRESS : </span> Your address goes here</p>
                            </address>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <address className="address-info email mt-30">
                            <i className="fa fa-envelope"></i>
                            <p><span>EMAIL : </span><a href="emailto:demo@examplecom">demo@examplecom</a></p>
                        </address>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <address className="address-info email mt-30">
                            <i className="fa fa-phone"></i>
                            <p><span>PHONE : </span><a href="tel:0123456789">0123456789</a></p>
                        </address>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="payment-method-list">
                            <img src="assets/img/payment-2.png" alt="payment method" />
                        </div>
                        <div className="footer-link">
                            <a href="#">SITE MAP</a>
                            <a href="#">SEARCH TERMS</a>
                            <a href="#">ADVANCED SEARCH</a>
                            <a href="#">ORDERS AND RETURNS</a>
                            <a href="#">CONTACT US</a>
                        </div>
                        <span className="copyright">
                                        <p>© 2021 <b className="text-white">Pullman</b> Made with <FontAwesomeIcon className="text-danger" icon={faHeart} /> by <a href="https://hasthemes.com/">HasThemes</a></p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- footer area end --> */}



    {/* <!-- Quick view modal start --> */}
    <div className="modal" id="quick_view">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    {/* <!-- product details inner end --> */}
                    <div className="product-details-inner">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="product-large-slider">
                                    <div className="pro-large-img">
                                        <img src="assets/img/product/product-details-img1.jpg" alt="product-details" />
                                    </div>
                                    <div className="pro-large-img">
                                        <img src="assets/img/product/product-details-img2.jpg" alt="product-details" />
                                    </div>
                                    <div className="pro-large-img">
                                        <img src="assets/img/product/product-details-img3.jpg" alt="product-details" />
                                    </div>
                                    <div className="pro-large-img">
                                        <img src="assets/img/product/product-details-img4.jpg" alt="product-details" />
                                    </div>
                                </div>
                                <div className="pro-nav slick-row-10 slick-arrow-style">
                                    <div className="pro-nav-thumb">
                                        <img src="assets/img/product/product-details-img1.jpg" alt="product-details" />
                                    </div>
                                    <div className="pro-nav-thumb">
                                        <img src="assets/img/product/product-details-img2.jpg" alt="product-details" />
                                    </div>
                                    <div className="pro-nav-thumb">
                                        <img src="assets/img/product/product-details-img3.jpg" alt="product-details" />
                                    </div>
                                    <div className="pro-nav-thumb">
                                        <img src="assets/img/product/product-details-img4.jpg" alt="product-details" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="product-details-des">
                                    <h3 className="product-name">Premium Mens Sports Lather Keds</h3>
                                    <div className="ratings d-flex">
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                        <span><FontAwesomeIcon icon={faStar}/></span>
                                        <div className="pro-review">
                                            <span>1 Reviews</span>
                                        </div>
                                    </div>
                                    <div className="price-box">
                                        <span className="price-old"><del>$90.00</del></span>
                                        <span className="price-regular">$70.00</span>
                                    </div>
                                    <h5 className="offer-text"><strong>Hurry up</strong>! offer ends in:</h5>
                                    <div className="product-countdown" data-countdown="2021/09/20"></div>
                                    <p className="pro-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                    <div className="quantity-cart-box d-flex align-items-center">
                                        <h6 className="option-title">qty:</h6>
                                        <div className="quantity">
                                            <div className="pro-qty"><input type="text" value="1" /></div>
                                        </div>
                                        <div className="action_link">
                                            <a className="btn btn-cart2" href="#">Add To Cart</a>
                                        </div>
                                    </div>
                                    <div className="useful-links">
                                        <a href="#" data-bs-toggle="tooltip" title="Compare"><i
                                        className="fa fa-refresh"></i>compare</a>
                                        <a href="#" data-bs-toggle="tooltip" title="Wishlist"><i
                                        className="fa fa-heart-o"></i>wishlist</a>
                                    </div>
                                    <div className="like-icon">
                                        <a className="facebook" href="#"><i className="fa fa-facebook"></i>like</a>
                                        <a className="twitter" href="#"><i className="fa fa-twitter"></i>tweet</a>
                                        <a className="pinterest" href="#"><i className="fa fa-pinterest"></i>save</a>
                                        <a className="google" href="#"><i className="fa fa-google-plus"></i>share</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* <!-- product details inner end --> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Quick view modal end --> */}
    </>
        
    )



}


export default HomePage