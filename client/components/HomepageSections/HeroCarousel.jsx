

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Col, Row, Container, Overlay} from 'react-bootstrap/';
import Link from 'next/link';
import { carouselItemData } from '../../helpers/CarouseltemData';
import styles from './HeroCarousel.module.css'

// function HeroCarouselItem( props ){

    
//     return(
        // <Carousel.Item className="hero-single-slide hero-overlay">
        //     <img
        //         className="d-block w-100"
        //         src={props.src}
        //         alt={props.alt}
        //     />
        //     <Container>
        //         <Row>
        //             <Col md={12}>
        //                 <Carousel.Caption className='hero-slider-content slide-1'>
        //                     <h3 className="slide-title">{props.title}</h3>
        //                     <p className="slide-subtitle text-muted">{props.subtitle1} <span>{props.subtitle2}</span></p>
        //                     <Link href={props.href}><a href={props.href} class="btn btn-large btn-bg">{props.btnCta}</a></Link>
        //                 </Carousel.Caption>
        //             </Col>
        //         </Row>
        //     </Container>

        // </Carousel.Item>
        
//         )
// }


function HeroCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel variant='dark' className={styles.carousel} fade activeIndex={index} onSelect={handleSelect}>
 

            {carouselItemData.map((item)=>{
                
                return(
                    <Carousel.Item className={styles.carouselItem} >
                        
                            <img
                                className={`d-block w-100 ${styles.img}`}
                                src={item.src}
                                alt={item.alt}
                                />

                            <Carousel.Caption className={styles.caption}>
                               
                               
                            <span className={`h1  ${styles.text}`}>{item.title}</span>
                            <p className={`h3  ${styles.text}`}>{item.subtitle1} <span>{item.subtitle2}</span></p>
                                        <Link href={item.href}><a href={item.href} class="btn btn-large btn-bg">{item.btnCta}</a></Link>
                           
                            </Carousel.Caption>
                    </Carousel.Item>)



                                   
                        
            }) }

   
        
 
        </Carousel>
    );
}

export default HeroCarousel