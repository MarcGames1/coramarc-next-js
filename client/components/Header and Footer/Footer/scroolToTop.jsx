import { useContext, useState, useEffect} from "react"

import { ScrollPosition } from "../../../context/ScrollPositionContext/ScrollPositionContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
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

        <div className={`scroll-top ${visible}`}>
            <FontAwesomeIcon icon ={faAngleUp}/>
        </div>
        </a>
        {/* <!-- Scroll to Top End --> */}
    </>)
}


export default ScroolToTop