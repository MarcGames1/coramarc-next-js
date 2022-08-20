import M_Header from "./M_Header";
import {OffcanvasSearchForm} from "../../OffCanvas";
import { OffCanvasSearchContextProvider } from "../../../context/offCanvasSearchContext/offCanvasSearchContext";
import { CategoryProvider } from "../../admin/AdminPanel";

export default function Header() {





    return (<>

        <OffCanvasSearchContextProvider>
            <CategoryProvider>

            <M_Header />
            <OffcanvasSearchForm />
            </CategoryProvider>
        </OffCanvasSearchContextProvider>
        

    </>


    )
}
