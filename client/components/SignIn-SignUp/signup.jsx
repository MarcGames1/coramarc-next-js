import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useContext } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast'
import LoadingBtn from '../UI/LoadingBtn'
import {

    faEyeSlash,
    faEye,
    faEnvelope

} from "@fortawesome/free-solid-svg-icons";

//dynamic import fontawesome
import dynamic from "next/dynamic";
import Link from 'next/link';
import { AuthContext } from '../../context/auth';

const FontAwesomeIcon = dynamic(async () => (
    (await import("@fortawesome/react-fontawesome")).FontAwesomeIcon
));
import {useRouter} from 'next/router';



const Signup = () => {
    //Context
    const [auth, setAuth] = useContext(AuthContext)
    //state
    const [password, setPassword] = useState('password')
    const [loading, setLoading] =useState(false)
    const router = useRouter()
  
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
            onFinish(user_data)
            e.preventDefault();
            
}

    }


    const onFinish = async (values) => {
        setLoading(true)
        try {
            const { data } = await axios.post('/signup' , values)
            if(data?.error){
                toast.error(data.error)
                setLoading(false)
            } else{
                // save in context
                setAuth(data)
                //save in storage
                localStorage.setItem('auth', JSON.stringify(data))
                toast.success("Inregistrat cu succes!");
                setLoading(false)
                //redirect
                router.push('/')

            }
        } catch (err) {
            toast.error("Signup Failed, try Again")
            console.error(err);
            setLoading(false)
        }
    }
    return (
      <>
        <Form onSubmit={handleChange.submit}>
          <InputGroup className="single-input-item">
            <Form.Control onChange={handleChange.nume} placeholder="Nume" />
          </InputGroup>
          <InputGroup className="single-input-item">
            <Form.Control
              onChange={handleChange.prenume}
              placeholder="Prenume"
            />
          </InputGroup>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup className="single-input-item">
              <Form.Control
                onChange={handleChange.email}
                type="email"
                placeholder="Enter email"
              />
              <InputGroup.Text>
                <FontAwesomeIcon icon={faEnvelope} />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <InputGroup className="single-input-item">
              <Form.Control
                onChange={handleChange.password}
                type={password}
                placeholder="Enter password"
              />
              <InputGroup.Text
                onMouseDown={(e) => {
                  showPassword();
                }}
                onMouseUp={(e) => {
                  showPassword();
                }}
              >
                <FontAwesomeIcon
                  icon={password === 'password' ? faEyeSlash : faEye}
                />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <LoadingBtn
            loading={loading}
            variant={'primary'}
            text={'Inregistrare'}
          />
        </Form>
      </>
    );

}

export default Signup