
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeadphones, FiMail, FiPhoneCall, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';

export default function Support() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission logic
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* ================= HEADER ================= */}
                <div className="text-center">
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                        We Are Here For You
                    </span>
                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Customer Support Center
                    </h1>
                    <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
                        Have questions about your catering order, menu customization, or need instant assistance? Reach out to our support team.
                    </p>
                </div>

                {/* ================= SUPPORT INFO CARDS ================= */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                            <FiPhoneCall size={22} />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">Phone Support</h3>
                        <p className="mt-1 text-xs text-slate-500">Mon-Sun from 9am to 8pm</p>
                        <span className="mt-3 block text-sm font-semibold text-primary">+91 98765 43210</span>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                            <FiMail size={22} />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">Email Address</h3>
                        <p className="mt-1 text-xs text-slate-500">Quick response within 2 hours</p>
                        <span className="mt-3 block text-sm font-semibold text-primary">support@dishdash.com</span>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                            <FiClock size={22} />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">Working Hours</h3>
                        <p className="mt-1 text-xs text-slate-500">Everyday of the week</p>
                        <span className="mt-3 block text-sm font-semibold text-primary">9:00 AM - 10:00 PM</span>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                            <FiMapPin size={22} />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">Main Office</h3>
                        <p className="mt-1 text-xs text-slate-500">Visit our headquarters</p>
                        <span className="mt-3 block text-sm font-semibold text-primary">Bishnupur, West Bengal</span>
                    </div>
                </div>

                {/* ================= CONTACT FORM & HELP PROMPT ================= */}
                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {/* Form Section */}
                    <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                        <p className="text-sm text-slate-600 mb-6">
                            Fill out the form below and our support specialist will get back to you shortly.
                        </p>

                        {submitted ? (
                            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                                    <FiCheckCircle size={26} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">Message Sent Successfully!</h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    Thank you for reaching out. We have received your query and will reply to your email soon.
                                </p>
                                <button
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormData({ name: '', email: '', subject: '', message: '' });
                                    }}
                                    className="mt-6 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                                        Subject / Order Reference
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="e.g., Wedding Catering Inquiry"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you with your upcoming event?"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-sm hover:bg-primary/90 transition"
                                >
                                    <FiSend size={18} />
                                    Submit Request
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Quick Help Sidebar */}
                    <div className="space-y-6">
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-3 text-primary mb-3">
                                <FiHeadphones size={24} />
                                <h3 className="text-lg font-bold text-slate-900">Need Immediate Help?</h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                Browse through our extensive FAQ section or check the Help Center for quick answers regarding booking, menu items, and policies.
                            </p>
                            <Link
                                to="/help"
                                className="block w-full text-center rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-200 transition"
                            >
                                Visit Help Center
                            </Link>
                        </div>

                        <div className="rounded-3xl bg-primary p-6 text-white shadow-sm">
                            <h3 className="text-lg font-bold">Planning a Grand Event?</h3>
                            <p className="mt-2 text-sm text-white/90 leading-relaxed">
                                Get a custom quotation tailored specifically to your guest count and menu preferences.
                            </p>
                            <Link
                                to="/services"
                                className="mt-4 inline-block rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-slate-50 transition"
                            >
                                Explore Services &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}