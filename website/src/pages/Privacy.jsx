
import React from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiLock, FiEye, FiServer, FiMail } from 'react-icons/fi';

export default function Privacy() {
    
    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* ================= HEADER ================= */}
                <div className="text-center">
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                        Legal Information
                    </span>
                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Privacy Policy
                    </h1>
                    <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
                        Last updated: June 2026. Learn how DishDash collects, uses, and protects your personal information.
                    </p>
                </div>

                {/* ================= CONTENT CONTAINER ================= */}
                <div className="mt-12 space-y-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm text-slate-700">
                    
                    {/* Section 1 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
                            <FiShield className="text-primary" size={24} />
                            <h2>1. Information We Collect</h2>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                            When you use DishDash catering services, visit our website, or book an event, we may collect personal information such as your name, email address, phone number, delivery address, and event details. This information helps us process your catering bookings and provide customized culinary services.
                        </p>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 2 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
                            <FiEye className="text-primary" size={24} />
                            <h2>2. How We Use Your Information</h2>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                            We use the collected information for various purposes, including:
                        </p>
                        <ul className="list-disc pl-5 text-sm space-y-2 text-slate-600">
                            <li>Processing and managing your catering orders and reservations.</li>
                            <li>Communicating with you regarding event details, menu confirmations, and updates.</li>
                            <li>Improving our website performance, food options, and customer support experience.</li>
                            <li>Sending promotional offers or newsletters (only if you have opted in).</li>
                        </ul>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 3 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
                            <FiLock className="text-primary" size={24} />
                            <h2>3. Data Security & Protection</h2>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                            We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                        </p>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 4 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
                            <FiServer className="text-primary" size={24} />
                            <h2>4. Cookies & Tracking Technologies</h2>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                            Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can choose to disable cookies through your browser settings.
                        </p>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 5 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
                            <FiMail className="text-primary" size={24} />
                            <h2>5. Contact Us</h2>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                            If you have any questions or concerns about our Privacy Policy or how we handle your data, please feel free to reach out to our support team at{' '}
                            <span className="font-semibold text-primary">privacy@dishdash.com</span> or visit our{' '}
                            <Link to="/contact" className="font-semibold text-primary hover:underline">
                                Contact page
                            </Link>
                            .
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}