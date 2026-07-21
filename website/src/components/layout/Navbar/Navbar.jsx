
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* ================= BRAND ================= */}
                <Link
                    to="/"
                    className="flex items-center gap-3"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-primary bg-white shadow-lg">
                        <span className="text-xl font-black tracking-widest text-slate-900">
                            DD
                        </span>
                    </div>

                    <div>
                        <h1 className="text-lg font-bold tracking-tight text-slate-900">
                            DishDash
                        </h1>

                        <p className="hidden text-xs text-slate-500 sm:block">
                            Smart. Simple. Powerful.
                        </p>
                    </div>
                </Link>

                {/* ================= DESKTOP NAVIGATION ================= */}
                <div className="hidden items-center gap-8 lg:flex">
                    <Link
                        to="/"
                        className="text-sm font-medium text-slate-700 transition hover:text-primary"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="text-sm font-medium text-slate-700 transition hover:text-primary"
                    >
                        About
                    </Link>

                    <Link
                        to="/services"
                        className="text-sm font-medium text-slate-700 transition hover:text-primary"
                    >
                        Services
                    </Link>

                    <Link
                        to="/blog"
                        className="text-sm font-medium text-slate-700 transition hover:text-primary"
                    >
                        Blog
                    </Link>

                    <Link
                        to="/contact"
                        className="text-sm font-medium text-slate-700 transition hover:text-primary"
                    >
                        Contact
                    </Link>
                </div>

                {/* ================= DESKTOP ACTIONS ================= */}
                <div className="hidden items-center gap-3 lg:flex">
                    <Link
                        to="/login"
                        className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                        Login
                    </Link>
                </div>

                {/* ================= MOBILE MENU BUTTON ================= */}
                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition hover:bg-slate-100 lg:hidden"
                >
                    {isMenuOpen ? (
                        <FiX size={24} />
                    ) : (
                        <FiMenu size={24} />
                    )}
                </button>
            </div>

            {/* ================= MOBILE NAVIGATION ================= */}
            {isMenuOpen && (
                <div className="border-t border-slate-200 bg-white px-4 py-5 shadow-lg lg:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-2">
                        <Link
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-primary"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            onClick={() => setIsMenuOpen(false)}
                            className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-primary"
                        >
                            About
                        </Link>

                        <Link
                            to="/services"
                            onClick={() => setIsMenuOpen(false)}
                            className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-primary"
                        >
                            Services
                        </Link>

                        <Link
                            to="/blog"
                            onClick={() => setIsMenuOpen(false)}
                            className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-primary"
                        >
                            Blog
                        </Link>

                        <Link
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-primary"
                        >
                            Contact
                        </Link>

                        <div className="my-2 h-px bg-slate-200" />

                        <Link
                            to="/login"
                            onClick={() => setIsMenuOpen(false)}
                            className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                        >
                            Login
                        </Link>

                        <Link
                            to="/get-started"
                            onClick={() => setIsMenuOpen(false)}
                            className="rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-3 text-center text-sm font-semibold text-white shadow-md"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;