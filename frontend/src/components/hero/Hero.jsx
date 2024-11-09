import React from 'react';
import NavBar from '../navbar/NavBar';
import "./Hero.css"

const Hero = () => (
    <div className="hero">
        <div className="content">
            <h1>Shape Your Future in Artificial Intelligence </h1>
            <h1>with Proviz School of AI</h1>
            <p>Learn, innovate, and excel with industry-leading AI training designed for the future.</p>
            <button onClick={() => document.getElementById('applyForm').scrollIntoView()}>Apply Now</button>
        </div>
    </div>
);

export default Hero;
