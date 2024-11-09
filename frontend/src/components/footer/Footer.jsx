import React from 'react';
import './Footer.css'

const Footer = () => (
    <footer className="footer">
        <p>Contact Us: info@provizai.com | +1-800-123-AI</p>
        <p style={{
            cursor: 'pointer'
        }}>Follow Us: <span style={{ color: 'white' }}> Facebook | Twitter | LinkedIn</span></p>
    </footer>
);

export default Footer;
