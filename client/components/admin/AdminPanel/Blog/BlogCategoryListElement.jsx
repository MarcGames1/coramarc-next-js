import dynamic from 'next/dynamic';
const FontAwesomeIcon = dynamic(
  async () => (await import('@fortawesome/react-fontawesome')).FontAwesomeIcon
);
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {
  Row,
  Button,
  ButtonGroup,
  InputGroup,
  Form,
  Alert} from 'react-bootstrap';
import axios from 'axios';
import { useState, useContext, useRef } from 'react';
import { AuthContext } from '../../../../context/auth';
import {BlogCategoryContext } from './BlogCategoryContext/BlogCategoryContext';


const BlogCategoryListElement = (props) => {

  const [categories, setCategories, getCategories] = useContext(BlogCategoryContext);
  const [auth, setAuth] = useContext(AuthContext);
  const name = useRef()
//STATE
const [show, setShow] = useState(false)
const [inputData, setInputData] = useState()
    


  const handler = {
    delete: async (categoryId) => {
      let url = `/blog-category/${categoryId}/${auth.user._id}`;

      // error handling + mesaj feedback cu TOAST
      await axios.delete(url);
      getCategories();
    },
    update: async (categoryId, data) => {
    
      let url = `/blog-category/${categoryId}/${auth.user._id}`;
      console.log('URL +> ', url);
      console.log(data)
      await axios.put(url, { name: data });
      setShow(false)
      getCategories()
    },

    change:(e)=>{
        e.preventDefault()
        setInputData(e.target.value);
        console.log(inputData)
    }
  };


    
  return (
    <>
      <Alert action variant="primary">
        <Row>
          <span className="text-center">{props.name}</span>

          <ButtonGroup size="md" className="mb-2">
            <Button
              onClick={() => {
                handler.delete(props._id);
              }}
              variant="danger"
            >
              <FontAwesomeIcon icon={faCircleXmark} /> Sterge
            </Button>
            <Button
              onClick={()=>{
                setShow(!show)
               
              }}
              variant="warning"
              type="submit"
            >
              Modifica
            </Button>
          </ButtonGroup>

         { show ?  <InputGroup onChange={handler.change} className="mb-3">
            <Form.Control
              placeholder={props.name}
              aria-label={props.name}
              aria-describedby={`Modifica Categoria ${props.name}`}
              Defaultvalue={props.name}
              
              
            />
            <Button type='submit' onClick={()=>{
                handler.update(props._id, inputData)
            }} variant="outline-secondary" id={props._id}>
              Confirma
            </Button>
          </InputGroup> : null}
        </Row>
      </Alert>
    </>
  );
};

export default BlogCategoryListElement;
