import React from 'react';
import './Testimonials.css'

const Testimonials = () => (
    <div className="testimonials">
        <h2>What Our Students Say</h2>

        <div className="testimonial-block">
            <div className="testmonial-container">
                <img id='quote' src="/quote.png" alt="quotation png" />
                <p className='quotation-p'>The hands-on experience at Proviz School of AI helped me land my dream job as an AI engineer!</p>
                <p className='author'>~Emma Torres</p>
                <p className='work-at'><b>AI Engineer at FutureTech</b></p>
            </div>
            {/*  */}
            <div className="testmonial-container">
                <img id='quote' src="/quote.png" alt="quotation png" />
                <p className='quotation-p'>Proviz taught me how to apply AI to solve real problems. Highly recommend!</p>
                <p className='author'>~Sarah Lee</p>
                <p className='work-at'><b>Data Analyst at Insightful Analytics</b></p>
            </div>
            {/*  */}
            <div className="testmonial-container">
                <img id='quote' src="/quote.png" alt="quotation png" />
                <p className='quotation-p'>Proviz’s hands-on approach gave me the skills and confidence to succeed in AI. The mentorship was top-notch!</p>
                <p className='author'>~Liam Patel</p>
                <p className='work-at' ><b> AI Engineer at FutureTech</b></p>
            </div>
            {/*  */}
            <div className="testmonial-container">
                <img id='quote' src="/quote.png" alt="quotation png" />
                <p className='quotation-p'>Proviz’s curriculum is practical and industry-focused. I gained invaluable skills to excel in my new career.</p>
                <p className='author'>~Ava Chen</p>
                <p className='work-at'><b>NLP Specialist at LangAI</b></p>
            </div>
        </div>
    </div>
);

export default Testimonials;
