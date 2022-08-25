import React from 'react'
import { MainFooter } from '../components/Header and Footer/Footer';
import Header from '../components/Header and Footer/Header';
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
