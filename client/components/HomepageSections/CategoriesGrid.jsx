import React from 'react';
import { CategoriesSection } from '../HomepageSections';
import { Row } from 'react-bootstrap';
const CategoriesGrid = ({data}) => {
  return (
    <div className="container">
      {data.map((category) => {
          
          return (
              <Row key={category._id}>
            <CategoriesSection {...category} />
          </Row>
        );
      })}
    </div>
  );
};

export default CategoriesGrid;
