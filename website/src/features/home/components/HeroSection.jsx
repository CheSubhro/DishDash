
import React, { useState, useEffect } from 'react';
import { Button } from "@heroui/react";
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
    {
        title: "Delicious Food For Every Occasion",
        subtitle: "Explore Our Catering Menu",
        category: "Wedding Catering",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Make Your Birthday Unforgettable",
        subtitle: "Customized Menus & Live Counters",
        category: "Birthday Party",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Professional Corporate Catering",
        subtitle: "Impress Clients & Employees",
        category: "Corporate Events",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Authentic Flavors of Bengal",
        subtitle: "Traditional Bengali Food & Sweets",
        category: "Traditional Bengali Food",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "All-Inclusive Special Packages",
        subtitle: "Best Value for Big Gatherings",
        category: "Special Packages",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop"
    }
];

const HeroSection = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide change every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const currentSlide = slides[currentIndex];

    return (
        <section className="relative overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 my-6 shadow-2xl lg:mx-8">
            {/* Background Glow Effects */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />

            <div className="relative mx-auto flex min-h-[480px] max-w-7xl flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-12 lg:py-16 gap-8">
                
                {/* Left Content */}
                <div className="flex-1 space-y-6 text-center lg:text-left z-10">
                    <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase border border-primary/30">
                        {currentSlide.category}
                    </span>

                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                        {currentSlide.title}
                    </h1>

                    <p className="text-base text-slate-300 sm:text-lg max-w-xl mx-auto lg:mx-0">
                        {currentSlide.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                        <Button 
                            color="primary"
                            size="lg"
                            endContent={<FiArrowRight size={18} />}
                            onClick={() => navigate('/menu')}
                            className="font-semibold bg-gradient-to-r from-primary to-secondary shadow-lg"
                        >
                            Explore Menu
                        </Button>

                        <Button 
                            variant="bordered"
                            size="lg"
                            onClick={() => navigate('/packages')}
                            className="font-semibold text-white border-slate-600 hover:bg-white/10"
                        >
                            View Packages
                        </Button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex items-center justify-center lg:justify-start gap-2 pt-4">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    currentIndex === index ? 'w-8 bg-primary' : 'w-2.5 bg-slate-600 hover:bg-slate-500'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Image Container */}
                <div className="flex-1 w-full max-w-md lg:max-w-lg relative">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-slate-700/50 group">
                        <img 
                            src={currentSlide.image} 
                            alt={currentSlide.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                        onClick={() => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                        className="absolute left-[-16px] top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-white shadow-md backdrop-blur-md transition hover:bg-slate-700"
                        aria-label="Previous slide"
                    >
                        <FiChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
                        className="absolute right-[-16px] top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-white shadow-md backdrop-blur-md transition hover:bg-slate-700"
                        aria-label="Next slide"
                    >
                        <FiChevronRight size={20} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;