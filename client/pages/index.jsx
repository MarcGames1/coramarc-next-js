// import Main_Nav from "../components/navbar/Navbar"
// import {  AuthContext } from "../context/auth"
// import { useContext } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faStar, faHeart, faCart as faCartShopping } from "@fortawesome/free-solid-svg-icons"
// import Head from "next/head"
// import Slider from "../components/HomePage/Slider/Slider"


import { HeroCarousel, SliderArea } from "../Components/HomepageSections";
import {useState, useEffect} from 'react'
import MediaQuery, { useMediaQuery } from 'react-responsive'
import MainLayout from "../Layout/MainLayout";



export default function Home() {
    


    // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })


    return (
        <>

            <MainLayout>
                    <HeroCarousel />
            </MainLayout>
                
                
        </>

    )



}
