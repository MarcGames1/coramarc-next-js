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
  Alert,
  Modal} from 'react-bootstrap';
import axios from 'axios';
import { useState, useContext } from 'react';
import { AuthContext } from '../../../../context/auth';
import { CategoryContext } from './categoryContext/categoryContext';
import toast from 'react-hot-toast';
import UpdateProductCategory from './UpdateProductCategory';


const CategoryListElement = (props) => {

  const [categories, setCategories, getCategories] = useContext(CategoryContext);
  const [auth, setAuth] = useContext(AuthContext);
  //STATE
  const [show, setShow] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [inputData, setInputData] = useState()
    
 
 


  const handler = {
    delete: async (categoryId) => {
      let url = `/category/${categoryId}/${auth.user._id}`;

      // error handling + mesaj feedback cu TOAST
      await axios.delete(url);
      toast.success("Categorie Stearsa")
      getCategories()
      setShow(false);
    },
    update: async (categoryId, data) => {
    
      let url = `/category/${categoryId}/${auth.user._id}`;
      console.log('URL +> ', url);
      console.log(data)
      await axios.put(url, { name: data });
      setShow(false)
      getCategories();
    },
    handleCloseModal:() => setShowModal(false),
    handleShowModal: () => setShowModal(true),

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
              onClick={handler.handleShowModal}
              variant="warning"
              type="submit"
            >
              Modifica
            </Button>
          </ButtonGroup>

          {show ? (
            <InputGroup onChange={handler.change} className="mb-3">
              <Form.Control
                placeholder={props.name}
                aria-label={props.name}
                aria-describedby={`Modifica Categoria ${props.name}`}
                defaultValue={props.name}
              />
              <Button
                type="submit"
                onClick={() => {
                  handler.update(props._id, inputData);
                }}
                variant="outline-secondary"
                id={props._id}
              >
                Confirma
              </Button>
            </InputGroup>
          ) : null}
        </Row>
      </Alert>

      <Modal show={showModal} onHide={handler.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica categoria {props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateProductCategory {...props}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handler.handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handler.update}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CategoryListElement;
