// src/App.js
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import PartnersBanner from './components/Partnerbanner';
import f

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <PartnersBanner/>
        <Departments />
        <Faculty />
      </main>
      <Footer />
    </div>
  );
}

export default App;