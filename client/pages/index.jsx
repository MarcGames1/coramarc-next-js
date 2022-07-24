// import Main_Nav from "../components/navbar/Navbar"
import { useContext, useState, useEffect } from 'react';
import {  AuthContext  } from "../context/auth"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faStar, faHeart, faCart as faCartShopping } from "@fortawesome/free-solid-svg-icons"
// import Head from "next/head"
// import Slider from "../components/HomePage/Slider/Slider"


import { HeroCarousel, SliderArea } from "../Components/HomepageSections";
import {} from 'react'

import MainLayout from "../Layout/MainLayout";

export default function Home() {
const [auth, setAuth] = useContext(AuthContext)


    


    


    return (
      <>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
        <MainLayout>
          <HeroCarousel />
        </MainLayout>
      </>
    );



}
