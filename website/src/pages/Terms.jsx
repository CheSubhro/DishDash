
import React from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiCheckCircle, FiAlertCircle, FiDollarSign, FiMail } from 'react-icons/fi';

export default function Terms() {
    
    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* ================= HEADER ================= */}
                <div className="text-center">
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                        Legal Agreement
                    </span>
                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Terms of Service
                    </h1>
                    <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
                        Last updated: June 2026. Please read these terms and conditions carefully before using DishDash catering services.
                    </p>
                </div>

                {/* ================= CONTENT CONTAINER ================= */}
                <div className="mt-12 space-y-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm text-slate-700">
                    
                    {/* Section 1 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
                            <FiFileText className="text-primary" size={24} />
                            <h2>1. Acceptance of Terms</h2>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                            By accessing or using the DishDash website and booking our catering services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services or place orders with us.
                        </p>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 2 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
                            <FiCheckCircle className="text-primary" size={24} />
                            <h2>2. Booking & Orders</h2>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                            All catering bookings are subject to availability and confirmation by the DishDash team. We reserve the right to decline or cancel any order if necessary. Menu selections, guest counts, and special dietary requirements must be finalized at least 48 hours prior to the event.
                        </p>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 3 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
                            <FiDollarSign className="text-primary" size={24} />
                            <h2>3. Pricing & Payments</h2>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                            Prices for our catering packages and services are listed on the website and are subject to change without prior notice. A deposit may be required to confirm your booking, with the remaining balance due upon or before the event date as agreed.
                        </p>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 4 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
                            <FiAlertCircle className="text-primary" size={24} />
                            <h2>4. Cancellation & Refunds</h2>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                            Cancellations made at least 48 hours before the scheduled event time are eligible for a full refund of any advance deposit. Cancellations made within 48 hours of the event may incur a late cancellation fee to cover preliminary food preparation costs.
                        </p>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 5 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
                            <FiMail className="text-primary" size={24} />
                            <h2>5. Contact Information</h2>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                            If you have any questions regarding these Terms of Service, please contact us at{' '}
                            <span className="font-semibold text-primary">legal@dishdash.com</span> or via our{' '}
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