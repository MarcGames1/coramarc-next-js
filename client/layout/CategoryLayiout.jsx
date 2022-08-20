import React from 'react'
import { MainFooter } from '../Components/Header and Footer/Footer';
import Header from '../Components/Header and Footer/Header';
import { ScrollPositionProvider } from '../context/ScrollPositionContext/ScrollPositionContext';

export default function CategoryLayiout(props) {
  return (
    <>
      <ScrollPositionProvider>
        <Header />

        <main className="main-layout m-1">{props.children}</main>
        <MainFooter />
      </ScrollPositionProvider>
    </>
  );
}
