import styles from "../../Slider/slider.module.css"
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import Link from "next/link"
import Button from 'react-bootstrap'


export default function CarouselElement({ id, src, alt, title, subtitle1, subtitle2, url }) {

    // const [id, src, alt, title, subtitle1, subtitle2] = props


    return (

        <Carousel.Item className={styles.carousel}>
            <img
                className={styles.hero_slider_item}
                src={src}
                alt={alt}
                width={1920}
                head={928}
                layout='responsive'
            />


            <Carousel.Caption className='d-lg-flex' style={{ marginBottom: "8%" }} >
                <div className={styles.hero_slider_content_top}>
                    <span className={styles.slide_title}>{title} </span>
                    <div className={styles.slide_subtitle}>{subtitle1} <span>{subtitle2}</span></div>
                    <Link href={url}><Button size='large' className={styles.btn_bg}> Shop Now</Button></Link>
                </div>
            </Carousel.Caption>


        </Carousel.Item>
    )
}