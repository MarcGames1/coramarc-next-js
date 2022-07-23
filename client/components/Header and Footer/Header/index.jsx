import M_Header from "./M_Header";
import {OffcanvasSearchForm} from "../../OffCanvas";
import { OffCanvasSearchContextProvider } from "../../../context/offCanvasSearchContext/offCanvasSearchContext";




export default function Header() {





    return (<>

        <OffCanvasSearchContextProvider>
            <M_Header />
            <OffcanvasSearchForm />
        </OffCanvasSearchContextProvider>

    </>


    )
}
