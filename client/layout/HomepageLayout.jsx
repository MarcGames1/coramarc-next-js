import { MainFooter } from '../Components/Header and Footer/Footer';
import Header from '../Components/Header and Footer/Header';
import { ScrollPositionProvider } from '../context/ScrollPositionContext/ScrollPositionContext';

const banner = '/assets/img/banner/shop.jpg';

const HomePageLayout = (props) => {
  return (
    <>
      <ScrollPositionProvider>
        <Header />
    
        <main className="main-layout m-1">{props.children}</main>
        <MainFooter />
      </ScrollPositionProvider>
    </>
  );
};

export default HomePageLayout;
