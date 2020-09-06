import React from 'react';
import './App.css';
import LandingSection from './sections/LandingSection';
import Navbar from './components/Navbar';
import ProductsSection from './sections/ProductsSection';
import ReviewsSection from "./sections/ReviewsSection";
import InstagramSection from "./sections/InstagramSection";
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingSection/>
      <ProductsSection/>
      <ReviewsSection/>
      <InstagramSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
