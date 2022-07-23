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
        <div class={`header-main-area black-soft ${sticky}`}>
            <div class="container">
                <div class="row align-items-center position-relative">
                    {/* <!-- start logo area --> */}
                    <div class="col-auto">
                        <div class="logo">
                            <a href="index.html">
                                <img src="assets/img/logo/logo.png" alt="Brand Logo" />
                            </a>
                        </div>
                    </div>
                    {/* <!-- start logo area --> */}

                    {/* <!-- main menu area start --> */}
                    <div class="col-auto position-static">
                        <div class="main-menu-area">
                            <div class="main-menu">
                                {/* <!-- main menu navbar start --> */}
                                <nav class="desktop-menu">
                                    <ul>
                                        <li class="active"><a href="index.html">Home <i class="fa fa-angle-down"></i></a>
                                            <ul class="dropdown">
                                                <li><a href="index.html">Home version 01</a></li>
                                                <li><a href="index-2.html">Home version 02</a></li>
                                                <li><a href="index-3.html">Home version 03</a></li>
                                                <li><a href="index-4.html">Home version 04</a></li>
                                                <li><a href="index-5.html">Home version 05</a></li>
                                                <li><a href="index-6.html">Home version 06</a></li>
                                            </ul>
                                        </li>
                                        <li class="position-static"><a href="#">pages <i class="fa fa-angle-down"></i></a>
                                            <ul class="megamenu dropdown">
                                                <li class="mega-title"><span>column 01</span>
                                                    <ul>
                                                        <li><a href="shop.html">shop grid left
                                                            sidebar</a></li>
                                                        <li><a href="shop-grid-right-sidebar.html">shop grid right
                                                            sidebar</a></li>
                                                        <li><a href="shop-list-left-sidebar.html">shop list left sidebar</a></li>
                                                        <li><a href="shop-list-right-sidebar.html">shop list right sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li class="mega-title"><span>column 02</span>
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
                                                <li class="mega-title"><span>column 03</span>
                                                    <ul>
                                                        <li><a href="cart.html">cart</a></li>
                                                        <li><a href="checkout.html">checkout</a></li>
                                                        <li><a href="compare.html">compare</a></li>
                                                        <li><a href="wishlist.html">wishlist</a></li>
                                                    </ul>
                                                </li>
                                                <li class="mega-title"><span>column 04</span>
                                                    <ul>
                                                        <li><a href="my-account.html">my-account</a></li>
                                                        <li><a href="login-register.html">login-register</a></li>
                                                        <li><a href="about-us.html">about us</a></li>
                                                        <li><a href="contact-us.html">contact us</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="shop.html">shop <i class="fa fa-angle-down"></i></a>
                                            <ul class="dropdown">
                                                <li><a href="#">shop grid layout <i class="fa fa-angle-right"></i></a>
                                                    <ul class="dropdown">
                                                        <li><a href="shop.html">shop grid left sidebar</a></li>
                                                        <li><a href="shop-grid-right-sidebar.html">shop grid right sidebar</a></li>
                                                        <li><a href="shop-grid-full-3-col.html">shop grid full 3 col</a></li>
                                                        <li><a href="shop-grid-full-4-col.html">shop grid full 4 col</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">shop list layout <i class="fa fa-angle-right"></i></a>
                                                    <ul class="dropdown">
                                                        <li><a href="shop-list-left-sidebar.html">shop list left sidebar</a></li>
                                                        <li><a href="shop-list-right-sidebar.html">shop list right sidebar</a></li>
                                                        <li><a href="shop-list-full-width.html">shop list full width</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">products details <i class="fa fa-angle-right"></i></a>
                                                    <ul class="dropdown">
                                                        <li><a href="product-details.html">product details</a></li>
                                                        <li><a href="product-details-affiliate.html">product details affiliate</a></li>
                                                        <li><a href="product-details-variable.html">product details variable</a></li>
                                                        <li><a href="product-details-group.html">product details group</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="blog-left-sidebar.html">Blog <i class="fa fa-angle-down"></i></a>
                                            <ul class="dropdown">
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
                    <div class="col-auto ms-auto">
                        <div class="header-right">
                            <div class="header-configure-area">
                                <ul class="nav">
                                    <li>
                                        <a onClick={showSearch} className="search-trigger"><i class="fa fa-search"></i></a>
                                    </li>
                                    <li class="mini-cart-wrap">
                                        <a href="#" class="minicart-btn">
                                            <i class="fa fa-shopping-cart"></i>
                                            <span class="notification">2</span>
                                        </a>
                                        <div class="cart-list-wrapper">
                                            <ul class="cart-list">
                                                <li>
                                                    <div class="cart-img">
                                                        <a href="product-details.html"><img src="assets/img/cart/cart-1.jpg" alt="" /></a>
                                                    </div>
                                                    <div class="cart-info">
                                                        <h6 class="product-name"><a href="product-details.html">7th Generation classic</a></h6>
                                                        <span class="cart-qty">Qty: 1</span>
                                                        <span class="item-price">$60.00</span>
                                                    </div>
                                                    <div class="del-icon">
                                                        <i class="fa fa-times"></i>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="cart-img">
                                                        <a href="product-details.html"><img src="assets/img/cart/cart-2.jpg" alt="" /></a>
                                                    </div>
                                                    <div class="cart-info">
                                                        <h6 class="product-name"><a href="product-details.html">Digital 8th generation</a></h6>
                                                        <span class="cart-qty">Qty: 2</span>
                                                        <span class="item-price">$70.00</span>
                                                    </div>
                                                    <div class="del-icon">
                                                        <i class="fa fa-times"></i>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul class="minicart-pricing-box">
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
                                                <li class="total">
                                                    <span>Total</span>
                                                    <span><strong>$370.00</strong></span>
                                                </li>
                                            </ul>
                                            <div class="minicart-button">
                                                <a href="cart.html"><i class="fa fa-shopping-cart"></i> View Cart</a>
                                                <a href="cart.html"><i class="fa fa-share"></i> Checkout</a>
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