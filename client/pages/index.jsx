// import Main_Nav from "../components/navbar/Navbar"
import { useContext } from 'react';
import {  AuthContext  } from "../context/auth"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faStar, faHeart, faCart as faCartShopping } from "@fortawesome/free-solid-svg-icons"
// import Head from "next/head"
// import Slider from "../components/HomePage/Slider/Slider"


import { HeroCarousel,  } from "../components/HomepageSections";


import HomePageLayout from '../layout/HomepageLayout';

export default function Home({data}) {
const [auth, setAuth] = useContext(AuthContext)


    


    


    return (
      <>
        {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
        <HomePageLayout>
          
          <HeroCarousel />
        <div className="container">
         {data.map((category)=>{
          return(<>
          {category.name}
          </>)
         })}
        </div>
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
