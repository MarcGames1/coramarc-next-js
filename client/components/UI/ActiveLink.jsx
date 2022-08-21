import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'


const ActiveLink = ({route, text, current_link}) => {


    const activeState =  (route === current_link) 

    return (
        <Link href={route}><Nav.Link active={activeState} href={route}>{text}</Nav.Link></Link>
    )
}

export default ActiveLink