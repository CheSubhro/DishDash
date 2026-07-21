
import React from 'react';
import { Card } from "@heroui/react";
import { Utensils, Award, Users, Target, Sparkles, ClipboardList } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full uppercase font-bold tracking-wider mb-4">
                    About DishDash
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Serving Happiness, One Plate at a Time
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Welcome to <span className="font-semibold text-slate-800">DishDash</span>, your ultimate culinary partner for every celebration. We blend traditional authentic flavors with modern presentation to make your special moments unforgettable.
                </p>
            </div>

            {/* Vision & Mission Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <Card shadow="sm" className="border border-slate-100 p-6 bg-white">
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <Target className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            To deliver premium quality catering services with exceptional taste, hygiene, and hospitality. Whether it's an intimate house warming (Griha Prabesh), a grand wedding, or a corporate dinner, we ensure every guest leaves with a delightful experience.
                        </p>
                    </div>
                </Card>

                <Card shadow="sm" className="border border-slate-100 p-6 bg-white">
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800">Our Vision</h2>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            To become the most trusted and sought-after catering brand known for customization, seamless booking experiences, and consistently mouth-watering culinary creations that touch people's hearts through food.
                        </p>
                    </div>
                </Card>
            </div>

            {/* Why Choose Us Stats / Highlights */}
            <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm p-8 sm:p-12 mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Why Choose DishDash?</h2>
                    <p className="text-slate-500 text-sm mt-2">What makes our catering service stand out from the rest</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center space-y-3">
                        <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Utensils className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Authentic Recipes</h3>
                        <p className="text-xs text-slate-500">Prepared by expert chefs focusing on traditional and contemporary taste profiles.</p>
                    </div>

                    <div className="text-center space-y-3">
                        <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Award className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Hygiene & Quality</h3>
                        <p className="text-xs text-slate-500">Strict adherence to cleanliness and top-tier ingredients for healthy dining.</p>
                    </div>

                    <div className="text-center space-y-3">
                        <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <ClipboardList className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Custom Packages</h3>
                        <p className="text-xs text-slate-500">Flexible catering packages tailored specifically to your event size and budget.</p>
                    </div>

                    <div className="text-center space-y-3">
                        <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Professional Service</h3>
                        <p className="text-xs text-slate-500">Courteous and well-trained serving staff to manage your guests seamlessly.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto text-center bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Event?</h2>
                <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
                    Explore our curated catering packages or get in touch with us for custom menus built for your special day.
                </p>
                <a
                    href="/"
                    className="inline-block bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-full text-sm transition-all shadow-md"
                >
                    Explore Packages
                </a>
            </div>
        </div>
    );
};

export default About;