// src/App.js
import React from 'react';
import Header from './components/header';
import FacultyMembers from './components/faculty.tsx';
import Footer from './components/footer';
import './App.css';

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