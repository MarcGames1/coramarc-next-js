import { MainFooter } from "../Components/Header and Footer/Footer"
import Header from "../Components/Header and Footer/Header"
import { ScrollPositionProvider } from "../context/ScrollPositionContext/ScrollPositionContext"
import Breadcrumbs from 'nextjs-breadcrumbs'

const MainLayout = (props) =>{

return (
  <>
    <ScrollPositionProvider>
      <Header />

      <Breadcrumbs
        rootLabel="Acasa"
        containerClassName="p-3 breadcrumb-wrap black-bg"
        listClassName="breadcrumb"
        inactiveItemClassName="breadcrumb-item"
        activeItemClassName="breadcrumb-item active"
      />

      <main className="main-layout m-1">{props.children}</main>
      <MainFooter />
    </ScrollPositionProvider>
  </>
);
}

export default MainLayout