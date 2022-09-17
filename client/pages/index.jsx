



import {
  HeroCarousel,
  ServicePolicy,
  CategoriesGrid,
} from '../components/HomepageSections';


import HomePageLayout from '../layout/HomepageLayout';

export default function Home({data}) {



    


    


    return (
      <>
        <HomePageLayout>
          <HeroCarousel />
          <ServicePolicy />
          <CategoriesGrid data={data} />
        </HomePageLayout>
        
      </>
    );



}


export async function getStaticProps(){
  const response = await fetch('http://localhost:8000/api/categories/');
  const data = await response.json();
  console.log(data)
  return{
    props:{
      data
    }
  }
}
