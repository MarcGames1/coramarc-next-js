import React from 'react';
import { useRouter } from 'next/router';
import styles from './[produs].module.css'
import ProductLayout from '../../layout/ProductLayout';
import { ProductDetailesWrapper, RelatedProductArea } from '../../components/product/productPage';
import {Container, Row, Col,} from 'react-bootstrap'


export default function Produs({ data }) {
  const router = useRouter();
  const slug = router.asPath.substring(1);

  return (
    <>
    <ProductLayout name={data?.name ? data.name : 'Denumire Produs'} >
    <section className ='shop-main-wrapper'>
        <Container>
            <Row>
                <ProductDetailesWrapper />
            </Row>
        </Container>
        <RelatedProductArea />
    </section>
    </ProductLayout>
    </>
  );
}

// export async function getStaticProps(context) {
//   const response = await fetch('http://localhost:8000/api/categories/');
//   const data = await response.json();
//   const currentSlug = context.params.categorie;
//   let currentCat = data.filter((cat) => {
//     return cat.slug === currentSlug;
//   });

//   console.log(currentCat);

//   return {
//     props: {
//       data: currentCat[0],
//     },
//   };
// }

// export async function getStaticPaths() {
//   const response = await fetch('http://localhost:8000/api/categories/');
//   const data = await response.json();

//   const paths = data.map((cat) => {
//     return {
//       params: { categorie: `${cat.slug}` },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
