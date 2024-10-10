"use client";
// app/contact/page.tsx
import { useState } from 'react';

const ContactUsPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you can handle form submission (e.g., send the data to your API)
        console.log({ name, email, message });
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">
                We would love to hear from you! Please fill out the form below with your inquiries or feedback, and we will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={4}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUsPage;
