import ScroolToTop from "./scroolToTop"

import NewsLetterCta from "../../NewsletterCta/NewsLetterCta"

function MainFooter() {


    return (<>
       

        <ScroolToTop />
        {/* <!-- footer area start --> */}
        <footer className="black-bg">
            {/* <!-- newsletter area start --> */}
            <NewsLetterCta 
            title={"Inscrie-te la newsletter"}
            subtitle={'Te vom tine la curent cu ultimile noastre produse'}
            butonText={"Inscrie-te"}
            />
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
                                <p><span>Telefon : </span><a href="tel:0741203322">0741203322</a></p>
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
                                <p>© 2021 <b className="text-white">Pullman</b> Made with <i className="fa fa-heart text-danger"></i> by <a href="https://hasthemes.com/">HasThemes</a></p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- footer area end --> */}




        </>)

    }

    export default MainFooter

