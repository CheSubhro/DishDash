
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiChevronDown, FiChevronUp, FiHelpCircle, FiMail, FiPhoneCall, FiMessageSquare } from 'react-icons/fi';

const faqList = [
    {
        question: 'How do I place a catering order with DishDash?',
        answer: 'You can easily place an order by browsing our Services or Home page, selecting your preferred catering package or custom items, and filling out our booking form. Our team will get in touch with you shortly to confirm the details.',
    },
    {
        question: 'Can I customize the menu for my special event?',
        answer: 'Yes, absolutely! We specialize in tailored catering menus for weddings, corporate events, and private parties. Contact our team directly, and we will help you design a menu that fits your guests dietary preferences and theme.',
    },
    {
        question: 'What is your cancellation or modification policy?',
        answer: 'You can modify or cancel your booking up to 48 hours before the scheduled event time without any penalty. For last-minute changes, please reach out to our customer support team immediately.',
    },
    {
        question: 'Do you provide delivery and setup services?',
        answer: 'Yes, all our catering packages include professional delivery, setup, and presentation at your venue to ensure a seamless and stress-free experience.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept major credit/debit cards, mobile financial services, bank transfers, and cash payments for confirmed bookings.',
    },
];

export default function Help() {
    
    const [openIndex, setOpenIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const filteredFaqs = faqList.filter((faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* ================= HEADER & SEARCH ================= */}
                <div className="text-center">
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                        Help & Support
                    </span>
                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        How can we help you today?
                    </h1>
                    <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
                        Search our knowledge base or browse frequently asked questions below.
                    </p>

                    {/* Search Bar */}
                    <div className="mx-auto mt-8 max-w-xl">
                        <div className="relative flex items-center">
                            <FiSearch className="absolute left-4 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search for questions, topics..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm text-slate-900 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                    </div>
                </div>

                {/* ================= QUICK SUPPORT CARDS ================= */}
                <div className="mt-12 grid gap-6 sm:grid-cols-3">
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                            <FiPhoneCall size={22} />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">Call Us</h3>
                        <p className="mt-1 text-xs text-slate-500">Available Mon-Sun, 9am - 8pm</p>
                        <span className="mt-4 inline-block text-sm font-semibold text-primary">+880 1234 567 890</span>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                            <FiMail size={22} />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">Email Support</h3>
                        <p className="mt-1 text-xs text-slate-500">We reply within 2 hours</p>
                        <span className="mt-4 inline-block text-sm font-semibold text-primary">support@dishdash.com</span>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                            <FiMessageSquare size={22} />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">Live Chat</h3>
                        <p className="mt-1 text-xs text-slate-500">Chat with our team instantly</p>
                        <Link to="/contact" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                            Start Chat &rarr;
                        </Link>
                    </div>
                </div>

                {/* ================= FAQ SECTION ================= */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition"
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="flex w-full items-center justify-between p-6 text-left font-semibold text-slate-900 focus:outline-none"
                                    >
                                        <span className="flex items-center gap-3">
                                            <FiHelpCircle className="text-primary flex-shrink-0" size={18} />
                                            {faq.question}
                                        </span>
                                        {openIndex === index ? (
                                            <FiChevronUp className="text-slate-500 flex-shrink-0" size={20} />
                                        ) : (
                                            <FiChevronDown className="text-slate-500 flex-shrink-0" size={20} />
                                        )}
                                    </button>

                                    {openIndex === index && (
                                        <div className="border-t border-slate-100 px-6 py-4 text-sm leading-relaxed text-slate-600 bg-slate-50/50">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">
                                No matching questions found. Try searching with different keywords or visit our{' '}
                                <Link to="/contact" className="text-primary font-semibold hover:underline">
                                    Contact page
                                </Link>
                                .
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}