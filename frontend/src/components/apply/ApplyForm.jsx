import React, { useState } from 'react';
import './ApplyForm.css';
import { toast } from 'react-toastify'; // Import only the toast function
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify styles

const apiUrl = import.meta.env.VITE_API_URL;

const ApplyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        statement: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Submitted successfully');

        try {
            // Make POST request to backend
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Send form data as JSON
            });

            if (response.ok) {
                // Success notification
                toast.success("Application submitted! We'll contact you soon.");

                // Clear the form after successful submission
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    statement: '',
                });
            } else {
                // Error notification if something goes wrong
                toast.error('Failed to submit your application. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            toast.error('Server error. Please try again later.');
        }
    };

    return (
        <section className="apply-form" id="applyForm">
            <h2>Ready to Join the Future of AI?</h2>
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="phone">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="statement">
                    <label htmlFor="statement">Brief Statement:</label>
                    <textarea
                        id="statement"
                        name="statement"
                        value={formData.statement}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit Application</button>
            </form>
        </section>
    );
};

export default ApplyForm;
