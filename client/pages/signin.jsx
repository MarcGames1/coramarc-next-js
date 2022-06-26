import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import NavLink from 'react-bootstrap/NavLink';
import Spinner from 'react-bootstrap/Spinner';

import {

    faEyeSlash,
    faEye,
    faEnvelope

} from "@fortawesome/free-solid-svg-icons";

//dynamic import fontawesome
import dynamic from "next/dynamic";
import Link from 'next/link';

const FontAwesomeIcon = dynamic(async () => (
    (await import("@fortawesome/react-fontawesome")).FontAwesomeIcon
));

const Signin = () => {
    const [password, setPassword] = useState('password')


    const showPassword = () => {
        password === "password" ? setPassword("text") : setPassword("password")
    }

const [data, setData]= useState({
    email:'',
    password:''
})


const handleChange= {

    email: (e) => {
        setData(data, data.email = e.target.value)
        console.log(data)
    },

        password: (e) => {
        setData(data, data.password = e.target.value)
        console.log(data)
    }

}

    return (<>


        <Container fluid>
            <Row>
                <Col lg={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <InputGroup>
                            <Form.Control onChange={handleChange.email} type="email" placeholder="Enter email" />
                            <InputGroup.Text
                                className="bg-transparent">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                />
                            </InputGroup.Text>
                        </InputGroup>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <Form.Control onChange={handleChange.password} type={password} placeholder="Enter password" />
                                <InputGroup.Text
                                    onMouseDown={e => { showPassword() }}
                                    onMouseUp={e => { showPassword() }}

                                    className="bg-transparent">
                                    <FontAwesomeIcon
                                        icon={password === "password" ? faEyeSlash : faEye}
                                    />
                                </InputGroup.Text>
                            </InputGroup>


                        </Form.Group>
                                          

                    <Button loading className="d-flex flex-center flex-direction-row" inline onSubmit={e =>{
                        e.preventDefault();
                        console.log(e)
                    }} variant="primary" type="submit">
                        Submit 
                    </Button>
                </Form>
                    <br></br>
                        <Link href="/signup"><a>Inregistrare</a></Link>
                    
                    
            </Col>
        </Row>
    </Container>
    </>)

}

export default Signin