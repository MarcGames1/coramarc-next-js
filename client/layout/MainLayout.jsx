import { MainFooter } from "../components/Header and Footer/Footer"
import Header from "../components/Header and Footer/Header"
import { ScrollPositionProvider } from "../context/ScrollPositionContext/ScrollPositionContext"
import Breadcrumbs from 'nextjs-breadcrumbs'
import Image from 'next/image'
import { Container, Row, Col } from "react-bootstrap"

const banner = '/assets/img/banner/shop.jpg';

const MainLayout = (props) =>{
return (
  <>
    <ScrollPositionProvider>
      <Header />
      <Container>
        <Row>
          <Col>
            <div
              className="breadcrumb-area breadcrumb-img bg-img"
              style={{ backgroundImage: `url('${banner}')` }}
            >
              {/* <Image src={banner} width={1920} height={250}/> */}

              <Breadcrumbs
                rootLabel="Acasa"
                containerClassName="p-3 breadcrumb-wrap"
                listClassName="breadcrumb"
                inactiveItemClassName="breadcrumb-item"
                activeItemClassName="breadcrumb-item active"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <main className="main-layout m-1">{props.children}</main>
      <MainFooter />
    </ScrollPositionProvider>
  </>
);
}

export default MainLayout