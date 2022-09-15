import { Container, Row, Col } from 'react-bootstrap';
import changeProduct from './changeProduct';
import React, { useState, useContext } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import ConfiguredQuill from '../../../../quill/ConfiguredQuill'
import {
  CategoryContext,
} from '../../../../components/admin/AdminPanel';
import LoadingBtn from '../../../../components/UI/LoadingBtn';
import axios from 'axios';
import { AuthContext } from '../../../../context/auth';
import Select from 'react-select';
import toast from 'react-hot-toast';


function AddProductForm() {

    
    const [categories] = useContext(CategoryContext);
    const [auth] = useContext(AuthContext);
    const categoriesOptions = categories.map((category) => {
      return { value: category._id, label: category.name };
    });

    const initialState = {
      name: '',
      price: NaN,
      codIntern: '', // de facut state
      colorVariation: { color: { name: '', hex: '' }, image: [] },
      codIntern: '',
      size: {
        nr: NaN,
        cm: NaN,
      },
      thumbnail: {}, // de facut state
      category: [{}],
      content: '',
    };
    const [product, setProduct] = useState(initialState);
    const [discount, setDiscount] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const change = {
      name: (e) => {
        setProduct(changeProduct('name', e.target.value, product));
        console.log('STATE PRODUCT CHANGED, ', product);
      },
      description: (e) => {
        setProduct(changeProduct('description', e.target.value, product));
        console.log('STATE Description CHANGED, ', product);
      },
      price: (e) => {
        setProduct(changeProduct('price', e.target.value, product));
      },
      discountedPrice: (e) => {
        setProduct(changeProduct('discountedPrice', e.target.value, product));
      },
      colorVariation: {
        color: {
          name: (e) => {
            setProduct(changeProduct('color.name', e.target.value, product));
          },
          hex: (e) => {
            setProduct(changeProduct('color.hex', e.target.value, product));
          },
        },
        image: [],
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
        setProduct(changeProduct('image', e, product));
        console.log(e.target.files);
      },
      category: (selectedOptions) => {
        setProduct({...product, category: selectedOptions.label});
        console.log('Categories ->', product);
      },
      content: (e) => {
        console.log(e);
        setProduct(changeProduct('content', e, product));
      },
      
    };

    const postProduct = async () => {
        try{

          console.log(product)
          const { data } = await axios.post(`/product/create/${auth.user._id}`,  product )

           if (data?.error) {
        setLoading(false);
        toast.error(data.error);
        console.log(data);
      } else {
        toast.success('Produs Adaugat!');
        setLoading(false);
        console.log(data);
      }
        } catch (err){
            toast.error('error => ', err);
            console.log(err);
            setLoading(false);
        }
          
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(product)
      postProduct();
    };

    const handleChange = (e) => {
      console.log(e);
    };



  return (
    <Container>
      <Row>
        <Form enctype="multipart/form-data" onSubmit={handleSubmit}>
          {/* NUME Produs */}
          <FloatingLabel
            onChange={change.name}
            controlId="floatingTextarea"
            label="Nume Produs"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Nume Produs" />
          </FloatingLabel>

          <Col>
            {/* Pret Produs */}
            <FloatingLabel
              onChange={change.price}
              controlId="pretProdus"
              label="Pret"
              className="mb-3"
            >
              <Form.Control type="number" />
            </FloatingLabel>

            <FloatingLabel
              onChange={change.codIntern}
              controlId="floatingTextarea"
              label="Cod Intern"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Cod Intern" />
            </FloatingLabel>
          </Col>
          <FloatingLabel
            onChange={change.discountedPrice}
            controlId="Discount"
            label="Discount"
            className="mb-3"
          >
            <Form.Control type="number" />
          </FloatingLabel>

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

          {/* <ConfiguredQuill onChange={change.content} /> */}

          <Select
            isMulti
            name="categories"
            options={categoriesOptions}
            onChange={change.category}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Multiple files input example</Form.Label>
            <Form.Control type="file" accept="image/*" multiple />
          </Form.Group>

          <LoadingBtn
            loading={loading}
            variant={'primary'}
            text={'Adauga Produsul'}
          />
        </Form>
      </Row>
    </Container>
  );
}

export default AddProductForm;