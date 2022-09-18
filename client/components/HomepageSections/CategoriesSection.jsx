import React from 'react'
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
// import fs from 'fs';
import path from 'path';
import Link from 'next/link'
import styles from './CategoriesSection.module.css';
import Image from 'next/image';


const ServerLocation = 'http://localhost:8000/product-cat/';
export const CategoriesSection = ({name, Image:img,slug}) => {
    
  
  
    return (
      <>
        <Col className={styles.col} sm={12} md={6} lg={4}>
          <Link href={slug}>
            <a href={slug}>
              <Card className={styles.card + ' bg-white text-dark'}>
              <Image width={350} height={265} layout='responsive' src={ServerLocation + img.name} alt={name} />
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
                
