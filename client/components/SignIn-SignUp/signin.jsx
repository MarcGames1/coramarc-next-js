
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/auth';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useContext } from 'react';
import LoadingBtn from '../UI/LoadingBtn'
import {

    faEyeSlash,
    faEye,
    faEnvelope

} from "@fortawesome/free-solid-svg-icons";

//dynamic import fontawesome
import dynamic from "next/dynamic";
import toast from 'react-hot-toast';
import axios from 'axios';

const FontAwesomeIcon = dynamic(async () => (
    (await import("@fortawesome/react-fontawesome")).FontAwesomeIcon
));
const Signin = () => {
  // context
  const [auth, setAuth] = useContext(AuthContext);

  //state
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);

  const showPassword = () => {
    password === 'password' ? setPassword('text') : setPassword('password');
  };

  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const handleChange = {
    email: (e) => {
      setInputData(inputData, (inputData.email = e.target.value));
    },

    password: (e) => {
      setInputData(inputData, (inputData.password = e.target.value));
    },

    submit_form: (e) => {
      e.preventDefault();
      onFinish(inputData);
    },
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post('/signin', values);
      console.log(data);
      if (data?.error) {
        setLoading(false);
        toast.error(data.error);
        console.log(data);
      } else {
        // save user and token to context
        setAuth(data);
        // save user and token to local storage
        localStorage.setItem('auth', JSON.stringify(data));

        toast.success('Successfully signed in');
        setLoading(false);
        console.log(data);
      }
    } catch (err) {
      toast.error('error => ', err);
      setLoading(false);
      console.log(data);
    }
  };
  return (
    <>
      <Form onSubmit={handleChange.submit_form}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
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
          <Form.Label>Password</Form.Label>
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

        <LoadingBtn loading={loading} variant={'primary'} text={'Logare'} />
      </Form>
    </>
  );
}

export default Signin