import React from 'react';
import { MainFooter } from '../components/Header and Footer/Footer';
import Header from '../components/Header and Footer/Header';
import { ScrollPositionProvider } from '../context/ScrollPositionContext/ScrollPositionContext';
import BreadCrumbTitle from '../components/UI/BreadcrumbTitle';
export default function ProductLayout(props) {
  return (
    <>
      <ScrollPositionProvider>
        <Header />
        <BreadCrumbTitle title={props?.name} img={''} />
        <main className="main-layout m-1">{props.children}</main>
        <MainFooter />
      </ScrollPositionProvider>
    </>
  );
}
