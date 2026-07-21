
import React from 'react';
import {
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiMail,
} from 'react-icons/fi';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">

            {/* ================= MAIN FOOTER ================= */}
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

                {/* ================= BRAND ================= */}
                <div className="lg:col-span-2">

                    <a
                        href="/"
                        className="mb-5 inline-flex items-center gap-3"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md">
                            <span className="text-xl font-black tracking-widest text-slate-900">
                                DD
                            </span>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-white">
                                DishDash
                            </h2>

                            <p className="text-xs text-slate-400">
                                Delicious food, delivered fast.
                            </p>
                        </div>
                    </a>

                    <p className="max-w-md text-sm leading-7 text-slate-400">
                        Explore our menu, discover delicious dishes, and build the perfect menu for your special occasion.
                    </p>


                    {/* ================= SOCIAL LINKS ================= */}
                    <div className="mt-6 flex items-center gap-3">

                        <a
                            href="#"
                            aria-label="Facebook"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition hover:bg-primary hover:text-white"
                        >
                            <FiFacebook size={18} />
                        </a>

                        <a
                            href="#"
                            aria-label="Instagram"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition hover:bg-primary hover:text-white"
                        >
                            <FiInstagram size={18} />
                        </a>

                        <a
                            href="#"
                            aria-label="Twitter"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition hover:bg-primary hover:text-white"
                        >
                            <FiTwitter size={18} />
                        </a>

                        <a
                            href="#"
                            aria-label="Email"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition hover:bg-primary hover:text-white"
                        >
                            <FiMail size={18} />
                        </a>

                    </div>

                </div>


                {/* ================= COMPANY ================= */}
                <div>

                    <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                        Company
                    </h3>

                    <ul className="space-y-3 text-sm">

                        <li>
                            <a
                                href="/about"
                                className="transition hover:text-primary"
                            >
                                About Us
                            </a>
                        </li>

                        <li>
                            <a
                                href="/services"
                                className="transition hover:text-primary"
                            >
                                Services
                            </a>
                        </li>

                        <li>
                            <a
                                href="/blog"
                                className="transition hover:text-primary"
                            >
                                Blog
                            </a>
                        </li>

                        <li>
                            <a
                                href="/contact"
                                className="transition hover:text-primary"
                            >
                                Contact Us
                            </a>
                        </li>

                    </ul>

                </div>


                {/* ================= SUPPORT ================= */}
                <div>

                    <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                        Support
                    </h3>

                    <ul className="space-y-3 text-sm">

                        <li>
                            <a
                                href="/help"
                                className="transition hover:text-primary"
                            >
                                Help Center
                            </a>
                        </li>

                        <li>
                            <a
                                href="/privacy"
                                className="transition hover:text-primary"
                            >
                                Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a
                                href="/terms"
                                className="transition hover:text-primary"
                            >
                                Terms of Service
                            </a>
                        </li>

                        <li>
                            <a
                                href="/support"
                                className="transition hover:text-primary"
                            >
                                Customer Support
                            </a>
                        </li>

                    </ul>

                </div>

            </div>


            {/* ================= COPYRIGHT ================= */}
            <div className="border-t border-slate-800">

                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">

                    <p>
                        © {currentYear}{' '}
                        <span className="font-semibold text-slate-300">
                            DishDash
                        </span>
                        . All rights reserved.
                    </p>

                    <p>
                        Made with ❤️ for food lovers.
                    </p>

                </div>

            </div>

        </footer>
    );
} 