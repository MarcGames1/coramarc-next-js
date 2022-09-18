import AdminNav from "../components/admin//admin-nav/AdminNav";
import Col from 'react-bootstrap/Col';
import ErrorComponent from '../components/UI/ErrorComponent'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from "../context/auth";
import {AdminSidebar} from '../components/admin/AdminPanel'
import Button from 'react-bootstrap/Button';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './adminLayout.module.css'
const SidebarMenu = (props) => (
  <Col className={`${styles.sidebar} mx-0 px-0`} lg={2} sm md={2}>
    <AdminSidebar toggleMenu={props.toggleMenu} />
  </Col>
);
import Header from '../components/Header and Footer/Header';


import { ScrollPositionProvider } from "../context/ScrollPositionContext/ScrollPositionContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";



//
const AdminLayout = ({children}) =>{

const router = useRouter()
const getUserData = async() =>{

  try{
      const { data } = await axios.get('/current-admin');
      if(data?.ok){
        setLoading(false)
      } else{
         setAuth({
           user: null,
           token: '',
         });
           router.push('/');
      }
        
    } catch(err){
      setAuth({
        user: null,
        token: '',
      });
     
      toast.error("Unauhorized")
      setAuth(null)
      router.push('/')
    }
    console.log()
}




    const [auth, setAuth] = useContext(AuthContext);

    const [hidden, setHidden] = useState(false)
    const [loading, setLoading] = useState(true)



    const toggleMenu = () => {
        setHidden(!hidden)
        console.log(hidden)
    }

    useEffect(()=>{
      
      getUserData()
      
      

    },[])

    if(loading){
      return <ErrorComponent message="Loading..." />;
    }

return (
  <>
  
  <ScrollPositionProvider>

    {/* <AdminNav /> */}
    <Header />
    <Container fluid>
      <Row style={{ minHeight: '100vh' }}>
        {hidden ? (
          <Button onClick={toggleMenu} className={styles.toggleBtn}>
            <FontAwesomeIcon icon={faAngleRight} size={'2xl'} />
          </Button>
        ) : (
          <SidebarMenu toggleMenu={toggleMenu} />
          )}

        <Col lg={hidden ? 12 : 10} sm md={hidden ? 12 : 10}>
          <h1> </h1>
          <main>{children}</main>
        </Col>
      </Row>
    </Container>
          </ScrollPositionProvider>
  </>
);
}

export default AdminLayout