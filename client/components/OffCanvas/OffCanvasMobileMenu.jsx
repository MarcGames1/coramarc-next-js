import { useContext, useEffect, useState } from "react"
import { MobileContext } from '../../context/MobileMenuToggleContext/mobileMenuToggleContext'
import { CategoryContext } from '../admin/AdminPanel/Product/categoryContext/categoryContext';
import NavElement from "../Header and Footer/Header/NavElement";
import { useRouter } from 'next/router';
import MenuItemChildren from "./offCanvasMenuComponents/menuItemChildren";
import {dateFirma} from '../../helpers/setari'

import dynamic from "next/dynamic";
const FontAwesomeIcon = dynamic(
  async () => (await import('@fortawesome/react-fontawesome')).FontAwesomeIcon
);

import {
  faClose,
  faSquareEnvelope,
  faPhone,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { UserSocialLinks } from "../Header and Footer/Header/components";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";


const OffCanvasMobileMenu = () =>{

    const [open, handleClose] =useContext(MobileContext)
    const [categories, setCategories] = useContext(CategoryContext);
    const [loading, setLoading] = useState(true)
    const currentCategories = []

    useEffect(() => {
      currentCategories.push(...categories);
      console.log(currentCategories);
    }, [currentCategories]);
 const router = useRouter()


 console.log('Current Categories are ->', currentCategories);
 console.log("Current Categories are ->", typeof categories)
 

 if (!categories) return <div>Loading...</div>;
    return (
      <>
        {/* <!-- off-canvas menu start --> */}
        <aside className={`off-canvas-wrapper ${open}`}>
          <div onClick={handleClose} className="off-canvas-overlay"></div>
          <div className="off-canvas-inner-content">
            <div onClick={handleClose} className="btn-close-off-canvas">
              <FontAwesomeIcon icon={faClose} />
            </div>

            <div className="off-canvas-inner">
              {/* <!-- search box start --> */}
              <div className="search-box-offcanvas">
                <form>
                  <input type="text" placeholder="Search Here..." />
                  <button className="search-btn">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </form>
              </div>
              {/* <!-- search box end --> */}

              {/* <!-- mobile menu start --> */}

              {/* <!-- mobile menu navigation start --> */}
              <div className="mobile-navigation">
                <nav className="mobile-menu">
                  <ul>
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
                  </ul>
                </nav>
              </div>

              <div className="offcanvas-widget-area">
                {/* <!-- mobile menu navigation end --> */}

                {/* <!-- mobile menu end --> */}

                {/* <!-- offcanvas widget area start --> */}
                <div className="off-canvas-contact-widget">
                  <ul>
                    <li>
                      <a href={`tel:${dateFirma.contact.telefon}`}>
                        <FontAwesomeIcon icon={faPhone} />{' '}
                        {dateFirma.contact.telefon}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${dateFirma.contact.email}`}>
                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                        {dateFirma.contact.email}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="off-canvas-social-widget">
                  <UserSocialLinks />
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