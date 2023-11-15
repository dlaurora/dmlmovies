import React, { useState } from 'react';
import Container from "./components/Container"
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ContactFormPopup from './components/ContactFormPopup';

function App () { // Un componente es una funcion sincronica que retorna un elemento HTML
  // SPA single page application

  const [isContactFormVisible, setContactFormVisible] = useState(false);

  // Function to toggle contact form visibility
  const toggleContactForm = () => {
    setContactFormVisible(!isContactFormVisible);
  };


  return (
    <div className={isContactFormVisible ? 'blur' : ''}>
      <Header onContactClick={toggleContactForm} />
      
      <h1>Movies</h1>

      <Container />

      <ScrollToTopButton />
      
      <Footer />
      {isContactFormVisible && <ContactFormPopup onClose={toggleContactForm} />}
    </div>
  );
}

export default App
