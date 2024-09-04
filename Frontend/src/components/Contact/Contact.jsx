import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
    const [message, setMessage] = useState({
        Bus_number:'',
        name: '',
        email: '',
        contact_number: '',
        message: ''
    });

    const token = localStorage.getItem('token');

    const api = axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            'x-access-token': token  // or 'Authorization': `Bearer ${token}`
        }
    });

    const handleChange = (e) => {
        
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        });
    };

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/contact', message);
            console.log(response.data);
            alert("We will contact you soon!");
            console.log(response.status);
    
        } catch (error) {
            console.log("Error while sending!", error);
            if (error.response) {  // Check if the error response exists
                const status = error.response.status;
                if (status === 400) {
                    alert("Bus Number Not Valid!");
                } else if (status === 403) {
                    alert("Login First!");
                }
            } else {
                alert("An error occurred. Please try again.");
            }
        }
    };
    

    return (
        <div className="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-8">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-20 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Contact Info Section */}
                        <div className="p-6 bg-white shadow-md sm:rounded-lg flex flex-col space-y-6">
                            <h1 className="text-2xl sm:text-3xl text-blue-900 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-700">
                                Fill in the form or reach out through the following options:
                            </p>

                            <div className="flex items-center text-gray-700">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-blue-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold">
                                    Kaka Dhaba, Kalyan (E)
                                </div>
                            </div>

                            <div className="flex items-center text-gray-700">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-blue-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold">
                                    +91 8984553247
                                </div>
                            </div>

                            <div className="flex items-center text-gray-700">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-blue-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold">
                                    bolbhai@suvidha.com
                                </div>
                            </div>

                            <div className="flex items-center text-gray-700">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-blue-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold">
                                    Visit our office
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <form className="p-6 bg-white shadow-md sm:rounded-lg flex flex-col space-y-4" onSubmit={handleMessageSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                    Bus Number
                                </label>
                                <input
                                    type="text"
                                    name="Bus_number"
                                    id="name"
                                    value={message.Bus_number}
                                    onChange={handleChange}
                                    placeholder="Bus Number"
                                    className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={message.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={message.email}
                                    onChange={handleChange}
                                    id="email"
                                    placeholder="Email"
                                    className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="contact_number"
                                    id="tel"
                                    value={message.contact_number}
                                    onChange={handleChange}
                                    placeholder="Telephone Number"
                                    className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message" className="hidden">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={message.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                                    rows="4"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Map Section */}
                    <div className="mt-12 p-6 bg-white shadow-md sm:rounded-lg">
                        <h2 className="text-2xl text-blue-900 font-bold mb-4">Find Us Here</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.14149822223!2d72.7410972662416!3d19.082522320601983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91f6a9f8b5f%3A0xc7d7c3fdd7c8be5e!2sKalyan%20East%2C%20Kalyan%2C%20Maharashtra%20421306!5e0!3m2!1sen!2sin!4v1692532076207!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                           
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
