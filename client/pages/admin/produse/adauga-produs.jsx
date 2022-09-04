import { NavItem } from "react-bootstrap";
import AdminLayout from "../../../layout/AdminLayout"
import changeProduct from "./changeProduct";
import React, {useState, useContext} from "react";
import {Form, FloatingLabel} from 'react-bootstrap'
import ConfiguredQuill from "../../../quill/ConfiguredQuill";
import Select from 'react-select';
import ProductcategoriesOptions from "../../../components/UI/ProductcategoriesOptions";
import { CategoryContext, CategoryProvider } from "../../../components/admin/AdminPanel";
const AdaugaProdus = () => {
    



    const initialState = {
      name: '',
      description: '',
      price: NaN,
      discountedPrice: NaN,
      color: { name: '', hex: '' },
      codIntern: '',
      size: {
        nr: NaN,
        cm: NaN,
      },
      Image: {},
      category: [{}],
      content: '',
    };
    const [product, setProduct] = useState(initialState);
    const [discount, setDiscount] = useState(false);

 const change = {
   name: (e) => {
     setProduct(changeProduct('name', e.target.value, product));
     console.log("STATE PRODUCT CHANGED, ", product)
   },
   description: (e) => {
     setProduct(changeProduct('description', e.target.value, product));
   },
   price: (e) => {
     setProduct(changeProduct('price', e.target.value, product));
   },
   discountedPrice: (e) => {
     setProduct(changeProduct('discountedPrice', e.target.value, product));
   },
   color: {
     name: (e) => {
       setProduct(changeProduct('color.name', e.target.value, product));
     },
     hex: (e) => {
       setProduct(changeProduct('color.hex', e.target.value, product));
     },
   },
   codIntern: (e) => {
     setProduct(changeProduct('codIntern', e.target.value, product));
   },
   size: {
     nr: (e) => {
       setProduct(changeProduct('size.nr', e.target.value, product));
     },
     cm: (e) => {
       setProduct(changeProduct('size.cm', e.target.value, product));
     },
   },
   image: (e) => {
     setProduct(changeProduct('image', e.target.value, product));
   },
   category: (e) => {
     setProduct(changeProduct('category', e.target.value, product));
   },
   content: (e) => {
     setProduct(changeProduct('content', e.target.value, product));
   },
 };
    

    return (
      <AdminLayout>
        <CategoryProvider>

        <h1>Adauga Produs</h1>

        <Form>
          <FloatingLabel
            onChange={change.name}
            controlId="floatingTextarea"
            label="Nume Produs"
            className="mb-3"
            >
            <Form.Control as="textarea" placeholder="Nume Produs" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Descriere">
            <Form.Control
              as="textarea"
              placeholder="Descriere scurta"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Pret"
            className="mb-3"
            >
            <Form.Control type="number" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Discount"
            className="mb-3"
            >
            <Form.Control type="number" />
          </FloatingLabel>

          <FloatingLabel
            onChange={change.color.name}
            controlId="floatingTextarea"
            label="Culoare"
            className="mb-3"
            >
            <Form.Control as="textarea" placeholder="Culoare" />
          </FloatingLabel>
          <Form.Label htmlFor="ColorInput">Cod Culoare</Form.Label>
          <Form.Control
            onChange={change.color.hex}
            type="color"
            defaultValue="#563d7c"
            title="Cod Culoare"
            />

          <FloatingLabel
            onChange={change.size.cm}
            controlId="floatingTextarea"
            label="Marime (Cm)"
            className="mb-3"
            >
            <Form.Control type="number" placeholder="Culoare" />
          </FloatingLabel>
          <FloatingLabel
            onChange={change.size.nr}
            controlId="floatingTextarea"
            label="Marime - NR"
            className="mb-3"
            >
            <Form.Control type="number" placeholder="Culoare" />
          </FloatingLabel>

          <ConfiguredQuill />

        <ProductcategoriesOptions />
        </Form>
        <CategoryProvider>
            </CategoryProvider>
        </CategoryProvider>

      </AdminLayout>
    );
}


export default AdaugaProdus