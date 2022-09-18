import ScroolToTop from "./scroolToTop"
import {Container, Row, Col} from 'react-bootstrap'
import Link from 'next/link'
import NewsLetterCta from "../../NewsletterCta/NewsLetterCta"
import Image from 'next/image'
import styles from './mainFooter.module.css'
import FooterPartner from "./mainfooter.components/partner"
import { dateComert, dateFirma } from "../../../helpers/setari"


function MainFooter() {


    return (
      <>
        <ScroolToTop />
        {/* <!-- footer area start --> */}
        <footer className="black-bg">
          {/* <!-- newsletter area start --> */}
          <NewsLetterCta
            title={'Inscrie-te la newsletter'}
            subtitle={'Te vom tine la curent cu ultimile noastre produse'}
            butonText={'Inscrie-te'}
          />
          {/* <!-- newsletter area end --> */}
          <div className="footer-widget-area">
            <Container className="container">
              <Row className="mtn-30">
                <Col lg={3} sm={6}>
                  <div className="footer-widget-item mt-30">
                    <h6 className="widget-title">CUSTOM LINKS</h6>
                    <ul className="usefull-links">
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Order Status</a>
                      </li>
                      <li>
                        <a href="#">Returns {'&'} Exchanges</a>
                      </li>
                      <li>
                        <a href="#">Size Guide</a>
                      </li>
                      <li>
                        <a href="#">Cart</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} sm={6}>
                  <div className="footer-widget-item mt-30">
                    <h6 className="widget-title">PRODUCTS</h6>
                    <ul className="usefull-links">
                      <li>
                        <a href="#">Prices drop</a>
                      </li>
                      <li>
                        <a href="#">New products</a>
                      </li>
                      <li>
                        <a href="#">Best sales</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Sitemap</a>
                      </li>
                      <li>
                        <a href="#">Stores</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} sm={6}>
                  <div className="footer-widget-item mt-30">
                    <h6 className="widget-title">Informatii Legale</h6>
                    <ul className="usefull-links">
                      <li>
                        <Link href={'/legal/termeni-si-conditii'}>
                          <a>Termeni si conditii</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={'/legal/cookie'}>
                          <a>Politica de utilizare Cookie-uri</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={'/legal/gdpr'}>
                          <a>Protectia datelor cu caracter personal</a>
                        </Link>
                      </li>
                      <li>
                        <a
                          target={'_blank'}
                          rel={'nofollow'}
                          href="https://anpc.ro/"
                        >
                          A.N.P.C
                        </a>
                      </li>
                      <li>
                        <a
                          target={'_blank'}
                          rel={'nofollow'}
                          href="https://anpc.ro/ce-este-sal/"
                        >
                          A.N.P.C - SAL
                        </a>
                      </li>
                      <li>
                        <a
                          target={'_blank'}
                          rel={'nofollow'}
                          href="https://ec.europa.eu/consumers/odr"
                        >
                          ODR
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} sm={6}>
                  <div className="footer-widget-item mt-30">
                    <h6 className="widget-title">Contul Tau</h6>
                    <ul className="usefull-links">
                      <li>
                        <a href="#">Contul Tau</a>
                      </li>
                      <li>
                        <a href="#">Orders</a>
                      </li>
                      <li>
                        <a href="#">Credit slips</a>
                      </li>
                      <li>
                        <a href="#">Addresses</a>
                      </li>
                      <li>
                        <a href="#">Stores</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <section className="footer-middle-area">
            <Container>
              <Row className="mtn-30">
                <Col lg={6} sm={12}>
                  <div className="address-block mt-30">
                    <div className="footer-logo">
                      <Link href="/">
                        <a href="/">
                          <img
                            src="/assets/img/logo/logo.png"
                            alt="Brand Logo"
                          />
                        </a>
                      </Link>
                    </div>
                    <address className="address-info d-flex align-items-center">
                      <i className="fa fa-map-marker"></i>
                      <p>
                        <span>Adresa : </span>{' '}
                        <a
                          rel="nofollow"
                          target={'_blank'}
                          href={dateFirma.punctDeLucru.gmbnav}
                        >
                          {dateFirma.punctDeLucru.adresa}
                          
                        </a>
                      </p>
                    </address>
                  </div>
                </Col>
                <div className="col-lg-3 col-sm-6">
                  <address className="address-info email mt-30">
                    <i className="fa fa-envelope"></i>
                    <p>
                      <span>EMAIL : </span>
                      <a href={`mailto:${dateFirma.contact.email}`}>
                        {dateFirma.contact.email}
                      </a>
                    </p>
                  </address>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <address className="address-info email mt-30">
                    <i className="fa fa-phone"></i>
                    <p>
                      <span>Telefon : </span>
                      <a href={`tel:${dateFirma.contact.telefon}`}>
                        {dateFirma.contact.telefon}
                      </a>
                    </p>
                  </address>
                </div>
              </Row>
            </Container>
          </section>
          <div className="footer-bottom-area text-center">
            <Container>
              <Row>
                <Col className="display-flex align-items-center">
                  <a
                    rel="nofollow"
                    target={'_blank'}
                    href="https://anpc.ro/ce-este-sal/"
                  >
                    <Image
                      width={250}
                      height={50}
                      src="/assets/img/sal.jpg"
                      alt="Solutionarea Alternativa"
                    />
                  </a>
                </Col>

                <Col className="display-flex align-items-center">
                  <a
                    rel="nofollow"
                    target={'_blank'}
                    href="ec.europa.eu/consumers/odr"
                  >
                    <Image
                      width={250}
                      height={50}
                      src="/assets/img/sol.jpg"
                      alt="Solutionarea Online a litigiilor"
                    />
                  </a>
                </Col>
              </Row>
              <Row className={styles.parteneri}>
                <Col>
                  <FooterPartner
                    src="https://www.librabank.ro/english/images/logo-libra.png"
                    width={231}
                    height={41}
                    alt="Logo Libra Internet Bank"
                  />
                </Col>
                <Col>
                  <FooterPartner
                    src="https://www.fancourier.ro/wp-content/themes/fancourier/images/logo.png"
                    width={126}
                    height={76}
                    alt="Logo FanCourier"
                  />
                </Col>
                <Col>
                  <FooterPartner
                    src="/assets/img/visa.svg"
                    width={231}
                    height={41}
                    alt="Logo Visa"
                  />
                </Col>
                <Col>
                  <FooterPartner
                    src="/assets/img/mastercard.svg"
                    width={231}
                    height={41}
                    alt="Logo mastercard"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="copyright">
                    <p>© Webiste dezvoltat si optimizat SEO de</p>

                    <a href="https://alexandru-marcu.ro/">
                      <b className="text-white">Alexandru Marcu</b>
                    </a>
                    <p>Toate drepturile sunt rezervate</p>
                  </span>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
        {/* <!-- footer area end --> */}
      </>
    );

    }

    export default MainFooter

