import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../mainFooter.module.css'
export default function FooterPartner({src, width, height, alt}) {
  return (
    <>
      <Col className="display-flex align-items-center">
        <div className={styles.centeredImage}>
          <Image src={src} width={width} height={height} alt={alt} />
        </div>
      </Col>
    </>
  );
}
