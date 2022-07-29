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
import { CategoryContext } from './categoryContext/categoryContext';
import CategoryListElement from './CategoryListElement';




const CategoryList = () => {
  const [categories, setCategories, getCategories] = useContext(CategoryContext);


 

const [auth, setAuth] =useContext(AuthContext)



  


  
  if (!categories) return <div>Loading...</div>;
  return (
    <>
      {categories?.map((cat) => {
        return (
          <CategoryListElement key={cat._id} {...cat}  />
        );
      })}
    </>
  );
};

export default CategoryList;
