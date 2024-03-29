import React from 'react'
import CategoryLayiout from '../layout/CategoryLayiout'
import  { useRouter } from 'next/router'
import axios from 'axios';
import router from 'next/router';
import { faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import Image from 'next/image';
import BreadcrumbTitle from '../components/UI/BreadcrumbTitle';
import { Container, Row, Col } from 'react-bootstrap';
import ProductItem from '../components/product/Product-item';
import { apiData } from '../helpers/setari';

export default function Categorie({data}) {

   const router = useRouter();
  const  slug = router.asPath.substring(1)   


 
  
  return (
    <>
      <CategoryLayiout>
        <BreadcrumbTitle
          title={data.name}
          img={`${process.env.SERVER}/product-cat/title.jpg`}
        />
        <Container>
          <Row>
            <Col md={4} sm={6}>
              <ProductItem
                name={'nume Produs'}
                thumbnail={`${apiData.productCategoriesPhoto}/${data.Image.name}`}
              />
            </Col>
          </Row>
        </Container>
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      </CategoryLayiout>
    </>
  );
}



export async function getStaticProps(context) {
  const response = await fetch(`${process.env.SERVER}/api/categories/`);
  const data = await response.json();
  const currentSlug = context.params.categorie;
  let currentCat = data.filter(cat =>{
    return cat.slug === currentSlug;
  })
    
  console.log(currentCat)

  return {
    props: {
      data:currentCat[0]
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(`${process.env.SERVER}/api/categories/`);
  const data = await response.json();
  
  const paths = data.map(cat =>{
    return{
      params:{categorie:`${cat.slug}`}
    }
  })



  return {
    paths,
    fallback: false
  }

}