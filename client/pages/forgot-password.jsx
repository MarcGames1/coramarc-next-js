import React, {useState, useEffect} from 'react'
import TitleAndRobots from '../components/HeadComponents/TitleandRobots'
import Form from 'react-bootstrap/Form';
import LoadingBtn from '../components/UI/LoadingBtn';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import toast from 'react-hot-toast';
import MainLayout from '../layout/MainLayout';

export default function ForgotPassword() {

const [loading, setLoading] = useState(false)
const [email, setEmail] = useState(undefined)
const [visible, setVisible] = useState(false)

const handleChange={
    submit_form:(e) =>{
        e.preventDefault()
        setLoading(true)
       forgotPasswordRequest()
    },
    email:(e) => {
        setEmail(e.target.value)
    }
}

const onFinish =async (param) =>{
    const {data} = axios.post ('/forgot-password', {param})
}

const forgotPasswordRequest = async() =>{
    try {
         const { data } = await axios.post('/forgot-password', { email });
         console.log(data)
         
         if(data?.error){
            toast.error(data.error)
            console.error(data.error)
            setLoading(false)
         } else{
            toast.success('Parola s-a resetat cu succes, verifica adresa de email')
            setLoading(false)
            setVisible(true)
         }

    } catch (error) {
        console.error(error)
        toast.error('There was an error. Please try again.')
        setLoading(false)
    }
}

  return (
    <>
      <MainLayout image="./assets/img/banner/forgot-password.jpg">
        <TitleAndRobots
          TITLE={'Am uitat parola Coramarc'}
          robots="noindex, follow"
        />
        <Container>
          <h1 className="text-center">Am uitat Parola</h1>
          <Form onSubmit={handleChange.submit_form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleChange.email}
                type="email"
                placeholder="Adresa de email"
              />
            </Form.Group>
            <LoadingBtn
              loading={loading}
              variant={'primary'}
              text={'Reseteaza Parola'}
            />
          </Form>
        </Container>
      </MainLayout>
    </>
  );
}
