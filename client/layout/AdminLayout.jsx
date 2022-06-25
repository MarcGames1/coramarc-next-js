import AdminNav from "../components/admin-nav/AdminNav";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react'
import AdminSidebar from '../components/admin-sidebar/AdminSidebar'
import Button from 'react-bootstrap/Button';
import Icon from '@mdi/react';
import { mdiArrowRightDropCircle } from '@mdi/js';

const SidebarMenu = (props) => (<Col className="bg-primary mx-0 px-0"
    lg={2} sm md={2}><AdminSidebar toggleMenu={props.toggleMenu} />
</Col>)









const AdminLayout = ({children}) =>{


    const [hidden, setHidden] = useState(false)


    const toggleMenu = () => {
        setHidden(!hidden)
        console.log(hidden)
    }



return(
    <>
    <AdminNav />
    <Container  className="bg-secondary" fluid >

    
    <Row style={{ minHeight: "100vh" }} >
   
    {
                    hidden ? <Button 
                    onClick={toggleMenu} 
                    style={{ position: "fixed", top: "90%", width: "5em" }} >
                        <Icon path={mdiArrowRightDropCircle} size={1} />
                        </Button> : <SidebarMenu toggleMenu={toggleMenu} />  
    }         
                
    
    
                <Col fluid lg={hidden ? 12 : 10} sm md={hidden ? 12 : 10}>
                    <h1> </h1>
    <main>{children}</main>
        
    </Col>
    </Row>
    </Container>
    </>
    
)
}

export default AdminLayout