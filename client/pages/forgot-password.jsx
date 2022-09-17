import React, {useState, useEffect} from 'react'
import TitleAndRobots from '../components/HeadComponents/TitleandRobots'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import LoadingBtn from '../components/UI/LoadingBtn';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import toast from 'react-hot-toast';
import MainLayout from '../layout/MainLayout';
import dynamic from 'next/dynamic';
const FontAwesomeIcon = dynamic(
  async () => (await import('@fortawesome/react-fontawesome')).FontAwesomeIcon
);
import {
  faEyeSlash,
  faEye,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import Router, { useRouter } from 'next/router';
export default function ForgotPassword() {

const [loading, setLoading] = useState(false)
const [email, setEmail] = useState(undefined)
const [password, setPassword] = useState('password');
const [visible, setVisible] = useState(false)
const [passwordInput, setPasswordInput] = useState(undefined)
const [resetCode, setResetCode] = useState(undefined);

 const showPassword = () => {
   password === 'password' ? setPassword('text') : setPassword('password');
 };
const router = useRouter()

const handleChange={
    reset_password:(e) =>{
        e.preventDefault()
        setLoading(true)
        visible
          ? reset_password_request({ email, password:passwordInput, resetCode })
          : forgotPasswordRequest({ email });
    },
    email:(e) => {
        setEmail(e.target.value)
    },
    password: e =>{
      setPasswordInput(e.target.value)
    },
    resetCode: e =>{
      setResetCode(e.target.value)
    }
}

const reset_password_request = async (params) => {
  console.log('Reset Request Start');
   try {
      setLoading(true);
      const { data } = await axios.post("/reset-password", params);
      console.log(data)
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        toast.success(
          "Password changed successfully. Please login with your new password"
        );
        router.push('/login-register')
        form.resetFields();
        setLoading(false);
        setVisible(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("Reset password failed. Try again.");
      setLoading(false);
    }
  };

const forgotPasswordRequest = async (email) => {

  console.log("ForgotPassword Request Start")
  try {
    const { data } = await axios.post('/forgot-password',  email );
    console.log(data);

    if (data?.error) {
      toast.error(data.error);
      console.error(data.error);
      setLoading(false);
    } else {
      toast.success('Parola s-a resetat cu succes, verifica adresa de email');
      setLoading(false);
      setVisible(true);
    }
  } catch (error) {
    console.error(error);
    toast.error('There was an error. Please try again.');
    setLoading(false);
  }
};

  return (
    <>
      <MainLayout image="./assets/img/banner/forgot-password.jpg">
        <TitleAndRobots
          TITLE={'Am uitat parola Coramarc'}
          robots="noindex, follow"
        />
        <Container>
          <h1 className="text-center">Am uitat Parola</h1>
          <Form onSubmit={handleChange.reset_password}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleChange.email}
                type="email"
                placeholder="Adresa de email"
              />
            </Form.Group>
            {!visible && (
              <LoadingBtn
                loading={loading}
                variant={'primary'}
                text={'Reseteaza Parola'}
              />
            )}

            {visible && (
              <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <br />
                  <Form.Control
                    onChange={handleChange.resetCode}
                    type="text"
                    placeholder="Codul de Resetare"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <br />
                  <InputGroup className="single-input-item">
                    <Form.Control
                      onChange={handleChange.password}
                      type={password}
                      placeholder="Parola Noua"
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
                  text={'Schimba Parola'}
                />
              </>
            )}
          </Form>
        </Container>
      </MainLayout>
    </>
  );
}
