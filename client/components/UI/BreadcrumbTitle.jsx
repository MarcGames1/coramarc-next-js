import React from 'react'
import Breadcrumbs from 'nextjs-breadcrumbs';
export default function BreadCrumbTitle({title, img}) {
    
    //  `https://wallpaperaccess.com/full/109666.jpg`;
    const styling = {
      backgroundColor: 'rgba(33, 37, 41,0.3)',
      backgroundBlendMode: 'darken',
      backgroundImage: `url('${img}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      padding: '3em',
    };
  return (
    <>
      <div className="breadcrumb-wrap" style={styling}>
        <h1 className="breadcrumb-title">{title}</h1>
        <Breadcrumbs
          listClassName="breadcrumb"
          containerClassName="breadcrumb justify-content-center"
          inactiveItemClassName="breadcrumb-item"
          activeItemClassName="breadcrumb-item active"
          rootLabel={'acasa'}
          labelsToUppercase
        />
      </div>
    </>
  );
}
