import { useState, useContext,useEffect } from 'react';
import AdminLayout from '../../../layout/AdminLayout';
import { AuthContext } from '../../../context/auth';
import {Col, Row} from 'react-bootstrap'
import dynamic from 'next/dynamic';
const FontAwesomeIcon = dynamic(
  async () => (await import('@fortawesome/react-fontawesome')).FontAwesomeIcon
);
import {
  faCircleMinus,
} from '@fortawesome/free-solid-svg-icons';





import {CategoryList, CreateCategoryForm} from '../../../components/admin/AdminPanel';


const CategoriiProdus = () => {
  //state

  



  

  return (
    <AdminLayout>
      <h1>Categorii Produs</h1>
      <Row>
        <Col>
          Lista Categorii
         <CategoryList />
        </Col>
        <Col>
          Creaza Categorie
            <CreateCategoryForm />
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default CategoriiProdus;
