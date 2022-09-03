import React from 'react'
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
// import fs from 'fs';
import path from 'path';
import Link from 'next/link'
import styles from './CategoriesSection.module.css';



const ServerLocation = 'http://localhost:8000/product-cat/';
export const CategoriesSection = ({name, Image,slug}) => {
    
  console.log(path.join(Image.fullPath));
  
    return (
      <>
        <Col className={styles.col} sm={12} md={6} lg={4}>
          <Link href={slug}>
            <a href={slug}>
              <Card className={styles.card + ' bg-white text-dark'}>
                <Card.Img src={ServerLocation + Image.name} alt={name} />
                <Card.ImgOverlay>
                  <Card.Title className="text-center">{name}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </a>
          </Link>
        </Col>
      </>
    );
}
