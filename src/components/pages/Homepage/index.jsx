import React from 'react';
import Navbar from '../../UI/Navbar';
import ProductsGrid from '../../UI/ProductsGrid';
import Footer from '../../UI/Footer';
import Hero from './Hero';
import HeroOverlay from './HeroOverlay';
import Intro from './Intro';
import Subscribe from './Subscribe';
import GetStarted from './GetStarted';
import { topDesc, topDesc2 } from '../../constants';
const Homepage = () => {
  return (
    <>
    <Navbar />
    <main className="font-lota">
      <Hero />
      <HeroOverlay />
      <Intro />
      <ProductsGrid />
      <Subscribe bgCol="bg-skYellow" desc={topDesc} mb />
      <ProductsGrid more />
      <Subscribe bgCol="bg-gray-100" desc={topDesc2} />
      <GetStarted />
      <Footer />
    </main>
    </>
  );
}

export default Homepage;
