// src/App.js
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import PartnersBanner from './components/Partnerbanner';
import Faculty from './components/faculty';
import Hero from './components/hero';
import Departments from './components/departments';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Departments />
        <Faculty />
        <PartnersBanner/>
      </main>
      <Footer />
    </div>
  );
}

export default App;