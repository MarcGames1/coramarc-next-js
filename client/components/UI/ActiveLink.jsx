import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'


const ActiveLink = (props) => {


    const get_className = () => {
        if (props.route === props.current_link) {
            return ("bg-black  text-white")
        }

        return (
            "text-white"
        )
    }

    return (
        <Link href={props.route}><Nav.Link className={get_className()} href={props.route}>{props.text}</Nav.Link></Link>
    )
}

export default ActiveLink