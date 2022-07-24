import dynamic from 'next/dynamic';
const FontAwesomeIcon = dynamic(
  async () => (await import('@fortawesome/react-fontawesome')).FontAwesomeIcon
);
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, ListGroup, Button, ButtonGroup, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';

const CategoryList = () => {

    const [catList, setCatList] =useState(undefined)
    
    const components = [
      {
        _id: 1,
        name: 'Loading category list',
      },
      {
        _id: 2,
        name: 'Loading category list',
      },
    ];
  const getCategories=  () =>{

        axios
        .get('/categories')
        .then((res) => setCatList(res.data));
      
      
  }
    
    
    useEffect(() =>{
       const data =  getCategories();
        if (typeof data === 'object') {
          setCatList(data);
          

          console.log("=>",catList, "TYPE OF =>" ,typeof catList);
        }
        
    
    
}, [])


const handler ={
    delete: async (userId, categoryId)=>{
       await axios.delete(`/category/${userId}/${categoryId}`);
    }
}

console.log("================================", catList)


  return (
<>


      {catList?.map((cat) => {
          return (
            <Alert action variant="primary" key={cat._id}>
              <Row>
                <Col>{cat.name}</Col>
                <Col>
                  <ButtonGroup size="sm" className="mb-2">
                    <Button variant="danger">
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
