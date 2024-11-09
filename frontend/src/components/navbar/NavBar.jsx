import React, { useState } from 'react';
import "./NavBar.css";

const Navbar = ({ scrollToSection, refs }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <h2 onClick={() => scrollToSection(refs.heroRef)}>Proviz School of AI</h2>
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li><button onClick={() => scrollToSection(refs.heroRef)}>Home</button></li>
                <li><button onClick={() => scrollToSection(refs.aboutRef)}>About</button></li>
                <li><button onClick={() => scrollToSection(refs.programsRef)}>Programs</button></li>
                <li><button onClick={() => scrollToSection(refs.testimonialsRef)}>Testimonials</button></li>
                <li><button onClick={() => scrollToSection(refs.applyFormRef)}>Apply</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
