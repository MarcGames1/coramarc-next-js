import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast'
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




const Signup = () => {
    const [password, setPassword] = useState('password')
    const [loading, setLoading] =useState(false)

  
    const [user_data, set_user_Data] = useState({
        email: '',
        password: '',
        nume:'',
        prenume:''
    })
    const showPassword = () => {
        password === "password" ? setPassword("text") : setPassword("password")
    }


    const handleChange = {

        email: (e) => {
            set_user_Data(user_data, user_data.email = e.target.value)
            console.log(user_data)
        },

        password: (e) => {
            set_user_Data(user_data, user_data.password = e.target.value)
            console.log(user_data)
        },

        nume: (e) => {
            set_user_Data(user_data, user_data.nume = e.target.value)
            console.log(user_data)
        },

        prenume: (e) => {
            set_user_Data(user_data, user_data.prenume = e.target.value)
            console.log(user_data)
},

        submit: (e) => {
            onFinish()
            e.preventDefault();
            
}

    }


    const onFinish = async (value) => {
        setLoading(true)
        try {
            const { data } = await axios.post('http://localhost:8000/api/signup', user_data)
            if(data?.error){
                toast.error(data.error)
                setLoading(false)
            } else{
                console.log("SIGNUPRESPONSE => ", data)
                toast.success("Inregistrat cu succes!");
                setLoading(false)
            }
        } catch (err) {
            toast.error("Signup Failed, try Again")
            console.error(err);
            setLoading(false)
        }
    }
    return (<>


        <Container fluid>
            <Row>
                <Col lg={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
                    
                    <Form onSubmit={handleChange.submit}>
                        <Row>
                            <Col>
                                <Form.Control onChange={handleChange.nume} placeholder="Nume" />
                            </Col>
                            <Col>
                                <Form.Control onChange={handleChange.prenume} placeholder="Prenume" />
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
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
                            </Col>
                            <Col >
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            
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
                        </Col>
                        </Row>
                        <Row className="g-2">
                        <Col>
                        <Button className="d-block mx-auto" inline  variant="primary" disabled={loading} type="submit">
                                  { loading ? <>Inregistrare <Spinner size={'sm'} animation="border" /> </> : "Inregistrare"}
                        </Button>
                    </Col>
                    
                    <Col>
                                <Link href="/signin"><Button className="d-block mx-auto" variant={"secondary"}>Logare</Button></Link>
                    </Col>
                    </Row>
                    </Form>
                    <br></br>


                </Col>
            </Row>
        </Container>
    </>)

}

export default Signup