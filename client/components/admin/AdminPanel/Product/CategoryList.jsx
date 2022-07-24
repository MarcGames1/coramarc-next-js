import useSWR from 'swr';

import dynamic from 'next/dynamic';
const FontAwesomeIcon = dynamic(
  async () => (await import('@fortawesome/react-fontawesome')).FontAwesomeIcon
);
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {
  Col,
  Row,
  ListGroup,
  Button,
  ButtonGroup,
  Container,
  Alert,
} from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../context/auth';
// import {}


const fetcher = (...args) => fetch(...args).then((res) => res.json());



const CategoryList = () => {

const { data, error } = useSWR(
  `${process.env.NEXT_PUBLIC_API}/categories`,
  fetcher
);
 

const [auth, setAuth] =useContext(AuthContext)

  const handler = {
    
    delete: async ( categoryId ) => {
       
        let url = `/category/${categoryId}/${auth.user._id}`;
        console.log("URL +> ", url)
        // error handling + mesaj feedback cu TOAST
            await axios.delete(url)


    
    },
  };

  


  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      {data?.map((cat) => {
        return (
          <Alert action variant="primary" key={cat._id}>
            <Row>
              <Col>{cat.name}</Col>
              <Col>
                <ButtonGroup size="sm" className="mb-2">
                  <Button onClick={()=>{
                        handler.delete(cat._id)
                    }
                  }  variant="danger">
                    <FontAwesomeIcon icon={faCircleXmark} /> Sterge
                  </Button>
                  <Button variant="warning">Modifica</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Alert>
        );
      })}
    </>
  );
};

export default CategoryList;
