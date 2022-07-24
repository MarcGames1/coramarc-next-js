import Link from 'next/link'
import {useState, useEffect, useContext } from "react"
import { OffCanvasSearchContext } from "../../../context/offCanvasSearchContext/offCanvasSearchContext"
import { ScrollPosition } from "../../../context/ScrollPositionContext/ScrollPositionContext"

const  HeaderMiddleArea = () =>{

    const [sticky, setSticky] = useState('sticky')
    const [scroolPosition] = useContext(ScrollPosition)
    const [show, hideSearch, showSearch] = useContext(OffCanvasSearchContext)

    const addSticky = () =>{
        setSticky('sticky is-sticky')
    }


    const removeSticky = () =>{
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
        {/* <!-- header middle area start --> */}
        <div className={`header-main-area black-soft sticky  ${sticky}`}>
            <div className="container">
                <div className="row align-items-center position-relative">
                    {/* <!-- start logo area --> */}
                    <div className="col-auto">
                        <div className="logo">
                            <Link href="/">
                                <a href="/"><img src="/assets/img/logo/logo.png" alt="Coramarc Logo" /></a>
                            </Link>
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
                                        <a onClick={showSearch} className="search-trigger"><i className="fa fa-search"></i></a>
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
                                                        <h6 className="product-name"><a href="product-details.html">7th Generation classic</a></h6>
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
    </>)
}

export default HeaderMiddleArea