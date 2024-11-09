import React from 'react';
import './About.css'


const About = () => (
    <div className="about">
        <h2>About Us</h2>
        <div className="about-container">
            {/* <div className="image">
                <img src="/ai-chip.jpg" alt="Ai-image" />
            </div> */}
            <div className='paras'>
                <p>
                    Proviz School of AI, founded in 2023, is a pioneering educational institute located in the innovation hub of Silicon Valley. Our mission is to provide world-class training in artificial intelligence and machine learning, empowering students with the skills needed to thrive in the rapidly evolving AI landscape. With a unique blend of rigorous academic coursework, real-world projects, and mentorship, Proviz is committed to shaping the next generation of AI leaders and innovators.</p>
                <p>
                    At Proviz School of AI, we believe that artificial intelligence holds the key to solving many of the world’s most pressing challenges. Our mission is to bridge the gap between education and industry by providing a curriculum that emphasizes both theory and practical application. Through a collaborative learning environment, we empower students to explore AI’s potential in ways that are innovative, ethical, and impactful
                </p>
            </div>
        </div>
    </div>
);

export default About;
