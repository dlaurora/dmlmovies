import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ContactFormPopup from './components/ContactFormPopup';
import Layout from "./components/Layout"; // Assuming Layout is a wrapper component
import Movie from "./components/Movie"; // Component for individual movie details

function App() {
  const [isContactFormVisible, setContactFormVisible] = useState(false);

  // Function to toggle contact form visibility
  const toggleContactForm = () => {
    setContactFormVisible(!isContactFormVisible);
  };

  return (
    <BrowserRouter>
      <div className={isContactFormVisible ? 'blur' : ''}>
        <Header onContactClick={toggleContactForm} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Container />} />
            <Route path=":id" element={<Movie />} />
            {/* Additional routes as needed */}
          </Route>
        </Routes>
        <Footer />
        <ScrollToTopButton />
        {isContactFormVisible && <ContactFormPopup onClose={toggleContactForm} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
