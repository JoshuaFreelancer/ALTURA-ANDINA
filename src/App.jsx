import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Header from './components/Header';
import Welcome from './components/Welcome';
import HotelSection from './components/HotelSection';
import HotelCarousel from './components/Carousel';
import ReservationBar from './components/ReservationBar';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import BlogSection from './components/BlogsSection';
import Footer from './components/Footer';
import ScrollToTopButton from './utils/ScrollToTopButton';
import './App.css';

function App() {
  return (
    <BrowserRouter> 
      <div>
        <Header />
        <Welcome />
        <ReservationBar />
        <HotelSection />
        <HotelCarousel />
        <ServicesSection />
        <Testimonials />
        <ContactForm />
        <BlogSection />
        <Footer />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
