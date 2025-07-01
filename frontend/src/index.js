import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Landing_Page/Home/HomePage';
import Navbar from './Landing_Page/navbar'
import Footer from './Landing_Page/footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    <HomePage />
    <Footer />
  </>
);