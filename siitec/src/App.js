// src/App.js
import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Faculty from './components/faculty';
import Footer from './components/footer';
import './App.css';
import Departments from './components/departments';
import PartnersBanner from './components/Partnerbanner';
import AnimatedFeatures from './components/AnimatedFeatures';
import ParallaxSection from './components/ParallaxSection';
import ScrollRevealSection from './components/ScrollRevealSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ParallaxSection />
        <PartnersBanner/>
        <AnimatedFeatures />
        <Departments />
        <ScrollRevealSection />
        <Faculty />
      </main>
      <Footer />
    </div>
  );
}

export default App;