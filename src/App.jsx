import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuPreview from './components/MenuPreview';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-rock-dark min-h-screen text-white">
      <Navbar />
      <Hero />
      <Features />
      <MenuPreview />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
