import { useContext, useState, useEffect} from "react"

import { ScrollPosition } from "../../../context/ScrollPositionContext/ScrollPositionContext"

const ScroolToTop = () => {

    const [scroolPosition] = useContext(ScrollPosition)
    const [visible, setVisible] = useState('')
    useEffect(() => {
        if (scroolPosition < 100) {
            setVisible('not-visible')
        }
        else {
            setVisible('')
        }
    }, [scroolPosition])


    return(<>
        {/* <!-- Scroll to top start --> */}
        <a href="#">

        <div class={`scroll-top ${visible}`}>
            <i class="fa fa-angle-up"></i>
        </div>
        </a>
        {/* <!-- Scroll to Top End --> */}
    </>)
}


export default ScroolToTop