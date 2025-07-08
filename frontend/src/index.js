import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './Landing_Page/Home/HomePage';
import Navbar from './Landing_Page/navbar';
import Footer from './Landing_Page/footer';
import Signup from './Landing_Page/Signup/Signup';
import About from './Landing_Page/About/AboutPg';
import Pricing from './Landing_Page/Pricing/PricingPage';
import Product from './Landing_Page/Product/ProductPage';
import Support from './Landing_Page/Support/SupportPage';
import NotFound from './Landing_Page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/product' element={<Product />} />
      <Route path='/support' element={<Support />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);