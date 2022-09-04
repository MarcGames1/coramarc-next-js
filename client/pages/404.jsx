import React from 'react'
import Router from 'next/router';
import CategoryLayiout from '../layout/CategoryLayiout';

function Page_404() {
Router.push('/')

  return (
    <CategoryLayiout>
    <div>404 Not Found</div>

    </CategoryLayiout>
  )
}

export default Page_404;