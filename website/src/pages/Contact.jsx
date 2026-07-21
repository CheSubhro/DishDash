
import React, { useState } from 'react';
import { Card } from "@heroui/react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
    
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        eventType: 'Wedding',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full uppercase font-bold tracking-wider mb-4">
                    Get In Touch
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Let's Plan Your Next Feast Together
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Have questions about our catering packages, custom menus, or availability for your special day? Reach out to <span className="font-semibold text-slate-800">DishDash</span> today!
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Contact Information Cards */}
                <div className="space-y-6 lg:col-span-1">
                    <Card shadow="sm" className="border border-slate-100 p-6 bg-white space-y-4">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-800">Call Us</h3>
                                <p className="text-xs text-slate-500 mt-1">Speak directly with our event coordinators.</p>
                                <a href="tel:+919876543210" className="text-sm font-semibold text-primary mt-2 block hover:underline">
                                    +91 98765 43210
                                </a>
                            </div>
                        </div>
                    </Card>

                    <Card shadow="sm" className="border border-slate-100 p-6 bg-white space-y-4">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-800">Email Us</h3>
                                <p className="text-xs text-slate-500 mt-1">Send us your queries anytime!</p>
                                <a href="mailto:support@dishdash.com" className="text-sm font-semibold text-primary mt-2 block hover:underline">
                                    support@dishdash.com
                                </a>
                            </div>
                        </div>
                    </Card>

                    <Card shadow="sm" className="border border-slate-100 p-6 bg-white space-y-4">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-800">Our Location</h3>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                    DishDash Kitchen & Office, Main Road, West Bengal, India
                                </p>
                            </div>
                        </div>
                    </Card>

                    <Card shadow="sm" className="border border-slate-100 p-6 bg-white space-y-4">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-800">Working Hours</h3>
                                <p className="text-xs text-slate-500 mt-1">
                                    Mon - Sun: 9:00 AM - 10:00 PM
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <Card shadow="sm" className="border border-slate-100 p-8 sm:p-10 bg-white">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Send Us a Message</h2>
                        <p className="text-slate-500 text-sm mb-8">Fill out the form below and we’ll get back to you within a few hours.</p>

                        {submitted ? (
                            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 my-8">
                                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-emerald-900">Thank You!</h3>
                                <p className="text-emerald-700 text-sm max-w-md mx-auto">
                                    Your message has been received successfully. Our team will contact you shortly to discuss your event details.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-full text-xs transition-all"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-primary transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-primary transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-primary transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Event Type</label>
                                        <select
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-primary transition-all"
                                        >
                                            <option value="Wedding">Wedding Catering</option>
                                            <option value="Griha Prabesh">Griha Prabesh (House Warming)</option>
                                            <option value="Annaprashan">Annaprashan / Birthday</option>
                                            <option value="Sadh Bhokkhon">Sadh Bhokkhon</option>
                                            <option value="Corporate">Corporate Event</option>
                                            <option value="Other">Other Custom Event</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Message / Event Details</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your expected guest count, date, and specific menu preferences..."
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-800 focus:outline-none focus:border-primary transition-all"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-600 text-white font-semibold py-3.5 px-8 rounded-xl text-sm transition-all shadow-md flex items-center justify-center space-x-2"
                                >
                                    <Send className="w-4 h-4" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;