import { MainFooter } from "../Components/Header and Footer/Footer"
import Header from "../Components/Header and Footer/Header"
import { ScrollPositionProvider } from "../context/ScrollPositionContext/ScrollPositionContext"

const MainLayout = (props) =>{

return(<>
<ScrollPositionProvider>

    <Header />
    {props.children}
    <MainFooter />
</ScrollPositionProvider>
</>)
}

export default MainLayout