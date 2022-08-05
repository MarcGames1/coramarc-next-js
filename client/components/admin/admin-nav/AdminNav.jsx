import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'
import { useContext } from 'react';
import { AuthContext } from '../../../context/auth';





const AdminNav = () =>{


    const [auth] = useContext(AuthContext)


    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link href="/"><Nav.Link href="/">Home</Nav.Link></Link>
                    <Nav.Link href="/admin">admin</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                
            </Container>
        </Navbar>
    )
}


export default AdminNav