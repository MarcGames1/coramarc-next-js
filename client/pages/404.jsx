import React from 'react'
import Router from 'next/router';
import CategoryLayiout from '../layout/CategoryLayiout';
import { useEffect } from 'react';

function Page_404() {

useEffect(()=>{
  Router.push('/')
},[])
  return (
    <CategoryLayiout>
    <div>404 Not Found</div>

    </CategoryLayiout>
  )
}

export default Page_404;