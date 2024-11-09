import React from 'react';
import './Programs.css'

const Programs = () => (
    <section className="programs">
        <h2>Our Programs</h2>
        <ul>
            <li>
                <div className="program-box">
                    <div className="example-image" >
                        <img src="/ml2.jpg" alt="machine-learning-image" width={200} />
                    </div>
                    <strong>Machine Learning Essentials</strong>
                    <p> Master the fundamentals of machine learning, from algorithms to model deployment.</p>
                </div>
            </li>
            {/*  */}
            <li>
                <div className="program-box">
                    <div className="example-image" >
                        <img src="/DL.jpg" alt="deep-learning-image" width={200} />
                    </div>
                    <strong>Deep Learning Specialization</strong>
                    <p> Dive deep into neural networks, from image recognition to NLP applications.</p>
                </div>
            </li>
            {/*  */}
            <li>
                <div className="program-box">
                    <div className="example-image" >
                        <img src="/DSA.jpg" alt="data-science-and-analytics-image" width={200} />
                    </div>
                    <strong>Data Science & Analytics</strong>
                    <p> Learn how to harness data and make insightful decisions using analytics tools.</p>
                </div>
            </li>
            {/*  */}
            <li>
                <div className="program-box">
                    <div className="example-image" >
                        <img src="/Business.jpg" alt="ai-for-business-image" width={200} />
                    </div>
                    <strong>AI for Business</strong>
                    <p> Explore how AI can transform industries and gain skills to implement AI solutions.</p>
                </div>
            </li>
        </ul>
    </section>
);

export default Programs;
