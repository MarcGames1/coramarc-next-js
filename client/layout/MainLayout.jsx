import { MainFooter } from "../Components/Header and Footer/Footer"
import Header from "../Components/Header and Footer/Header"
import { ScrollPositionProvider } from "../context/ScrollPositionContext/ScrollPositionContext"
import Breadcrumbs from 'nextjs-breadcrumbs'

const MainLayout = (props) =>{

return(<>
<ScrollPositionProvider>

    <Header />
 
        <Breadcrumbs rootLabel="Acasa" useDefaultStyle={true} />
        
    <main className="main-layout m-1">
    {props.children}
    </main>   
    <MainFooter />
</ScrollPositionProvider>
   
</>)
}

export default MainLayout