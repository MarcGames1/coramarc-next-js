import { Container, NavItem ,Row, Col} from "react-bootstrap";
import AdminLayout from "../../../layout/AdminLayout"
import changeProduct from "./changeProduct";
import React, {useState, useContext} from "react";
import {Form, FloatingLabel} from 'react-bootstrap'
import ConfiguredQuill from "../../../quill/ConfiguredQuill";
import Select from 'react-select';
import ProductcategoriesOptions from "../../../components/UI/ProductcategoriesOptions";
import { CategoryContext, CategoryProvider } from "../../../components/admin/AdminPanel";
import LoadingBtn from "../../../components/UI/LoadingBtn";
import axios from 'axios'
import { AuthContext } from "../../../context/auth";

const AdaugaProdus = () => {
    
  const [auth, setAuth] = useContext(AuthContext);



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
    const [loading, setLoading] = useState(false);
 const change = {
   name: (e) => {
     setProduct(changeProduct('name', e.target.value, product));
     console.log("STATE PRODUCT CHANGED, ", product)
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
      setProduct(changeProduct('image', e, product));
     console.log(e.target.files) 
   },
   category: (e) => {
     setProduct(changeProduct('category', e.target.value, product));
   },
   content: (e) => {
    console.log(e)
     setProduct(changeProduct('content', e, product));
   },
 };
    
const postProduct = async () => {
  var bodyFormData = new FormData();
  for (const key in product) {
    console.log(`${key} : ${product[key]}`);
    bodyFormData.append(key, product[key]);
  }
  for (const pair of bodyFormData.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`);
  }
  
  const { data } = await axios.post(
    `/product/create/${auth.user._id}`,
    bodyFormData,
    { headers: { 'Content-Type': 'multipart/form-data' } }

  ).then((success, error)=>{
    if (success) {
      console.log(data)
    } else{
      console.log(error)
    }
  })


};

 const handleSubmit = (e) => {
  e.preventDefault()
  // console.log(product)
 postProduct()





  
 }




    return (
      <AdminLayout>
        <CategoryProvider>
          <h1 className="text-center">Adauga Produs</h1>
          <Container>
            <Row>
              <Form enctype="multipart/form-data" onSubmit={handleSubmit}>
                <FloatingLabel
                  onChange={change.name}
                  controlId="floatingTextarea"
                  label="Nume Produs"
                  className="mb-3"
                >
                  <Form.Control as="textarea" placeholder="Nume Produs" />
                </FloatingLabel>
                <FloatingLabel
                  onChange={change.description}
                  controlId="Descriere Scurta"
                  label="Descriere"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Descriere scurta"
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>
                <Col>
                  <FloatingLabel
                    onChange={change.price}
                    controlId="pretProdus"
                    label="Pret"
                    className="mb-3"
                  >
                    <Form.Control type="number" />
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

                <ConfiguredQuill onChange={change.content} />

                <ProductcategoriesOptions />
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

          
        </CategoryProvider>
      </AdminLayout>
    );
}


export default AdaugaProdus