import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import {Container, Row, Col, CarouselItem} from 'react-bootstrap/'
import styles from './slider.module.css'
import Image from 'next/image'
import CarouselElement from './carouselElement/CarouselElement'
import Link from "next/link"


const items=[
    {
        id:1,
        src: "/assets/img/slider/home1-slide2.jpg",
        alt:"First slide",
        title:"Sandale",
        subtitle1:"Pentru Nunta",
        subtitle2:"sau alte ocazii speciale",
        url:'/admin'
    },
    {
        id:2,
        src: "/assets/img/slider/ARI_8453.JPG",
        alt: "Second slide",
        title: "Pantofi",
        subtitle1: "Pentru Ocazii Speciale",
        subtitle2: "Nunta, Botez",
        url: '/admin'
    }
    
]
export default function Slider()  
{

    return <section >
<Carousel pause="hover" >

            {items.map(({ id, ...p }) => (
               
                <Carousel.Item className={styles.carousel}>
                <img
                className={styles.hero_slider_item }
                        src={p.src}
                alt="First slide"
                width={1920}
                head={928}
                layout='responsive'
                />
                
                
                <Carousel.Caption className='d-lg-flex' style={{ marginBottom: "8%" }} >
                <div className={styles.hero_slider_content_top}>
                <span className={styles.slide_title}>{p.title} </span>
                <div className={styles.slide_subtitle}>{p.subtitle1} <span>{p.subtitle2}</span></div>
                            <Link href={p.url}><Button size='large' className={styles.btn_bg}> Shop Now</Button></Link>
                </div>
                </Carousel.Caption>
                
           
            </Carousel.Item>
                ))}
                </Carousel>
            

        
        </section> 
}



