import { useState, useEffect } from 'react';

function Header({ onContactClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest('.menu-dropdown') && 
          !e.target.closest('.hamburger-icon') &&
          !e.target.classList.contains('menu-button')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', closeMenu);
    }

    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    toggleMenu();
    if(onContactClick) {
      onContactClick();
    }
  };

  return (
    <header>
      <nav className="navbar">
        {/* Hamburger menu icon */}
        <button className="menu-button" onClick={toggleMenu}>
          <div className="hamburger-icon" >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        {/* Dropdown menu */}
        <div className={`menu-dropdown ${isMenuOpen ? 'show' : ''}`}>
        <a href="#contact" onClick={onContactClick}>Contact Me</a>
          <a href="https://dlaurora.github.io/Portfolio" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>About Me</a>
          <div className="menu-socials">
                <a href="https://github.com/dlaurora" target="_blank" rel="noopener noreferrer" className="github-icon" onClick={() => setIsMenuOpen(false)}>
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://instagram.com/dlaurora" target="_blank" rel="noopener noreferrer" className="instagram-icon" onClick={() => setIsMenuOpen(false)}>
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com/in/diego-laurora-97372695" target="_blank" rel="noopener noreferrer" className="linkedin-icon" onClick={() => setIsMenuOpen(false)}>
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/diegolaurora" target="_blank" rel="noopener noreferrer" className="twitter-icon" onClick={() => setIsMenuOpen(false)}>
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;