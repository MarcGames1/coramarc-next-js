import { useContext } from "react"
import { MobileContext } from '../../context/MobileMenuToggleContext/mobileMenuToggleContext'
import { CategoryContext } from '../admin/AdminPanel';
import NavElement from "../Header and Footer/Header/NavElement";
import { useRouter } from 'next/router';
import MenuItemChildren from "./offCanvasMenuComponents/menuItemChildren";


const OffCanvasMobileMenu = () =>{

    const [open, handleClose] =useContext(MobileContext)
 const [categories, getCategories] = useContext(CategoryContext);

 const router = useRouter()


    return (
      <>
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
                  <button className="search-btn">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              {/* <!-- search box end --> */}

              {/* <!-- mobile menu start --> */}
              <div className="mobile-navigation">
                {/* <!-- mobile menu navigation start --> */}
                <nav>
                  <ul className="mobile-menu">
                    <MenuItemChildren name={'Acasa'} href={'/'}>
                     
                      
                        {categories?.map((cat) => {
                          return (
                            <NavElement
                              key={cat._id}
                              active={`/${cat.slug}` === router.asPath}
                              text={cat.name}
                              href={`/${cat.slug}`}
                            />
                          );
                        })}
                     
                    </MenuItemChildren>

                  
                   
                  </ul>
                </nav>
                {/* <!-- mobile menu navigation end --> */}
              </div>
              {/* <!-- mobile menu end --> */}

              <div className="mobile-settings">
                <ul className="nav">
                  <li>
                    <div className="dropdown mobile-top-dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        id="currency"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Currency
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <div className="dropdown-menu" aria-labelledby="currency">
                        <a className="dropdown-item" href="#">
                          $ USD
                        </a>
                        <a className="dropdown-item" href="#">
                          $ EURO
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown mobile-top-dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        id="myaccount"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        My Account
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="myaccount"
                      >
                        <a className="dropdown-item" href="my-account.html">
                          my account
                        </a>
                        <a className="dropdown-item" href="login-register.html">
                          {' '}
                          login
                        </a>
                        <a className="dropdown-item" href="login-register.html">
                          register
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* <!-- offcanvas widget area start --> */}
              <div className="offcanvas-widget-area">
                <div className="off-canvas-contact-widget">
                  <ul>
                    <li>
                      <i className="fa fa-mobile"></i>
                      <a href="#">0123456789</a>
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i>
                      <a href="#">info@yourdomain.com</a>
                    </li>
                  </ul>
                </div>
                <div className="off-canvas-social-widget">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </div>
              </div>
              {/* <!-- offcanvas widget area end --> */}
            </div>
          </div>
        </aside>
      </>
    );
}

export default OffCanvasMobileMenu