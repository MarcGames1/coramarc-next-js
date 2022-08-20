import React from 'react'
import CategoryLayiout from '../layout/CategoryLayiout'
import  { useRouter } from 'next/router'
export default function Categorie() {

   const router = useRouter();


  return (
    <>
    <CategoryLayiout >
    <h1>{router.asPath}</h1>
    </CategoryLayiout>
    
    </>
  )
}
