import React, { useState, useContext, useRef } from 'react';
import ConfiguredQuill from '../../../../quill/ConfiguredQuill'
import { Form, InputGroup } from 'react-bootstrap';
import { AuthContext } from '../../../../context/auth';
import Image from 'next/image'

export default function UpdateProductCategory(props) {
  const [auth] = useContext(AuthContext);
  
  // state

  const [currentCategory, setCurrentCategory] = useState({
    name: props.name,
    description: props.description,
    image: props.Image,
  });
  
  
  
  
  const handleChange = {
    submit_form:() =>{
      console.log('Submit Form');
    },
    
    changeQuillValues:(v) =>{
      console.log(v)
    },
    
    name:(e)=>{
      e.target.value = setCurrentCategory(currentCategory.name)
    }
  }
  




  
console.log(currentCategory.image.name)
let productCatUri = 'http://localhost:8000/product-cat/';
// console.log('IMAGE URI =>', imageURI);
  return (
    <>
      <Form
        // ref={formRef}
        enctype="multipart/form-data"
        onSubmit={handleChange.submit_form}
      >
        <Form.Group className="mb-3" controlId="Titlu Categorie">
          <Form.Label>Titlu Categorie</Form.Label>
          <InputGroup className="single-input-item">
            <Form.Control
              
              onChange={handleChange.name}
              type="text"
              placeholder={currentCategory.name}
              
            />
          </InputGroup>
        </Form.Group>
        <ConfiguredQuill
          onChange={handleChange.changeQuillValues}
          //handleChange
          />
          
          
        <Form.Label className=" h2">Poza Reprezentativa</Form.Label>
        <Image
          src={`${productCatUri}${currentCategory.image.name}`}
          alt="test"
          width={300}
          height={200}
          layout="responsive"
        />
        <Form.Control
          enctype="multipart/form-data"
          type="file"
          name="productCatImage"
          onChange={(e) => {
            e.preventDefault();
            handleChange.imageChange(e);
          }}
          accept="image/*"
          multiple={false}
        />

        <div dangerouslySetInnerHTML={currentCategory.description}>

        </div>
      </Form>
    </>
  );
}
