import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'





function Main_Nav() {
    


    const [show, setShow] = useState(false);
    const [menu_size, setMenuSize] = useState(150);
    const [scroolPosition, setScroolPosition] = useState(0)
    

    const hideDropdown = e => {
        setShow(false);
    }

    useEffect(()=>{
        
        if(typeof window !== 'undefined'){
            window.onscroll=() => {
                console.log(scroolPosition)
                setScroolPosition((window.pageYOffset || document.documentElement.scrollTop)-document.documentElement.clientTop)
                
                if(window.pageYOffset > 0){
                    setMenuSize(80)
                } else { setMenuSize(150) }
                    
                
            }
            }

    }, [scroolPosition])

    return (
        <Navbar fixed='top' sticky='top' bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    

                    <Container style={{width:menu_size, transition:'.5s'}} className='d-block'>

                    <Image
                    src="/images/logo/logo-coramarc.png"  
                    layout="responsive"

                    
                    width={100}
                    height={100} />
                    
                    </Container>
                    
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown eventKey={1} show = {show == 1}
                            onMouseEnter={e => { setShow(1) }}
                            onMouseLeave={hideDropdown}  title="Incaltaminte Barbati" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown eventKey={2} show={show == 2}
                            onMouseEnter={e => { setShow(2) }}
                            onMouseLeave={hideDropdown} title="Incaltaminte Dama" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        
                        <Link href="/despre"><Nav.Link href="/despre" as={"a"}>Despre Noi</Nav.Link></Link>
                        
                        <Link href='/blog'><Nav.Link as={"a"} href="/blog">Blog</Nav.Link></Link>
                        <Link href='/contact'><Nav.Link as={"a"} href="/contact">Contact</Nav.Link></Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Cauta"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Cauta</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Main_Nav;