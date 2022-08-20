import Link from 'next/link'
import {useState, useEffect, useContext } from "react"
import { OffCanvasSearchContext } from "../../../context/offCanvasSearchContext/offCanvasSearchContext"
import { ScrollPosition } from "../../../context/ScrollPositionContext/ScrollPositionContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faShare, faShoppingCart, faSearch} from '@fortawesome/free-solid-svg-icons'
import NavElement from './NavElement'
import { CategoryContext } from '../../admin/AdminPanel';
import { useRouter} from 'next/router'


const  HeaderMiddleArea = () =>{
    const [sticky, setSticky] = useState('sticky')
    const [scroolPosition] = useContext(ScrollPosition)
    const [show, hideSearch, showSearch] = useContext(OffCanvasSearchContext)
     const [categories, getCategories] = useContext(CategoryContext);
     const router = useRouter();
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

    
    
    const img = '/assets/img/logo/logo.png'
    const cart1 = '/assets/img/cart/cart-1.jpg';
    return (
      <>
        {/* <!-- header middle area start --> */}
        <div className={`header-main-area black-soft sticky  ${sticky}`}>
          <div className="container">
            <div className="row align-items-center position-relative">
              {/* <!-- start logo area --> */}
              <div className="col-auto">
                <div className="logo">
                  <Link href="/">
                    <a href="/">
                      <img src={img} alt="Coramarc Logo" />
                    </a>
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
                        {
                          categories?.map((cat ) =>{
                            return <NavElement key={cat._id} active ={ (`/${cat.slug}` === router.asPath)} text = {cat.name} href ={cat.slug}/>;
                          })
                        }
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
                        <a onClick={showSearch} className="search-trigger">
                          <FontAwesomeIcon icon={faSearch} />
                        </a>
                      </li>
                      <li className="mini-cart-wrap">
                        <a href="#" className="minicart-btn">
                          <FontAwesomeIcon icon={faShoppingCart} />
                          <span className="notification">2</span>
                        </a>
                        <div className="cart-list-wrapper">
                          <ul className="cart-list">
                            <li>
                              <div className="cart-img">
                                <a href="product-details.html">
                                  <img src={cart1} alt="" />
                                </a>
                              </div>
                              <div className="cart-info">
                                <h6 className="product-name">
                                  <a href="product-details.html">
                                    7th Generation classic
                                  </a>
                                </h6>
                                <span className="cart-qty">Qty: 1</span>
                                <span className="item-price">$60.00</span>
                              </div>
                              <div className="del-icon">
                                <FontAwesomeIcon icon={faTimes} />
                              </div>
                            </li>
                            <li>
                              <div className="cart-img">
                                <a href="product-details.html">
                                  <img
                                    src="assets/img/cart/cart-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="cart-info">
                                <h6 className="product-name">
                                  <a href="product-details.html">
                                    Digital 8th generation
                                  </a>
                                </h6>
                                <span className="cart-qty">Qty: 2</span>
                                <span className="item-price">$70.00</span>
                              </div>
                              <div className="del-icon">
                                <FontAwesomeIcon icon={faTimes} />
                              </div>
                            </li>
                          </ul>
                          <ul className="minicart-pricing-box">
                            <li>
                              <span>Sub-Total</span>
                              <span>
                                <strong>$300.00</strong>
                              </span>
                            </li>
                            <li>
                              <span>Eco Tax (-2.00)</span>
                              <span>
                                <strong>$10.00</strong>
                              </span>
                            </li>
                            <li>
                              <span>VAT (20%)</span>
                              <span>
                                <strong>$60.00</strong>
                              </span>
                            </li>
                            <li className="total">
                              <span>Total</span>
                              <span>
                                <strong>$370.00</strong>
                              </span>
                            </li>
                          </ul>
                          <div className="minicart-button">
                            <a href="cart.html">
                              <FontAwesomeIcon icon={faShoppingCart} /> View Cart
                            </a>
                            <a href="cart.html">
                              <FontAwesomeIcon icon={faShare} /> Checkout
                            </a>
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
      </>
    );
}

export default HeaderMiddleArea