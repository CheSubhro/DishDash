
import React from 'react';
import { Card, Button } from "@heroui/react";
import { Utensils, Calendar, Users, Sparkles, ChefHat, HeartHandshake } from "lucide-react";

const servicesList = [
    {
        title: "Griha Prabesh (House Warming)",
        description: "Welcome prosperity and guests into your new home with traditional, pure, and soul-satisfying authentic menus.",
        icon: Sparkles,
        badge: "Traditional"
    },
    {
        title: "Annaprashan / Birthday",
        description: "Make your child's special milestones joyful and delicious with customized menus that delight guests of all ages.",
        icon: Utensils,
        badge: "Celebration"
    },
    {
        title: "Sadh Bhokkhon",
        description: "Celebrate sacred baby shower rituals with carefully curated, wholesome, and traditional delicacies prepared with love.",
        icon: HeartHandshake,
        badge: "Ritual"
    },
    {
        title: "Mangshamukhi",
        description: "Special non-vegetarian feast gatherings featuring rich, aromatic, and masterfully cooked meat dishes.",
        icon: ChefHat,
        badge: "Specialty"
    },
    {
        title: "Wedding Catering",
        description: "Grand multi-course premium packages (4 exclusive tiers) designed to make your big day a royal culinary experience.",
        icon: Users,
        badge: "Premium"
    },
    {
        title: "Dinner Party",
        description: "Intimate or grand evening gatherings managed with exquisite food presentation, live counters, and flawless hospitality.",
        icon: Calendar,
        badge: "Social"
    },
    {
        title: "Customized Catering",
        description: "Have a unique theme or specific menu in mind? We tailor everything precisely to match your event's exact vision.",
        icon: Utensils,
        badge: "Flexible"
    }
];

const Services = () => {
    return (
        <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full uppercase font-bold tracking-wider mb-4">
                    Our Services
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Catering Crafted for Every Occasion
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    At <span className="font-semibold text-slate-800">DishDash</span>, we offer comprehensive catering solutions tailored to your unique celebrations, ensuring top-tier taste and seamless management.
                </p>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {servicesList.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                        <Card
                            key={index}
                            shadow="sm"
                            className="border border-slate-100 hover:shadow-lg transition-all p-6 bg-white flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2.5 py-1 rounded-md uppercase font-bold tracking-wider">
                                        {service.badge}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>
                            <div>
                                {/* <a
                                    href="/"
                                    className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                                >
                                    Explore Related Packages &rarr;
                                </a> */}
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Bottom Call to Action */}
            <div className="max-w-4xl mx-auto text-center bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Looking for Something Unique?</h2>
                <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
                    Let’s discuss your custom menu and event planning needs. We are ready to make your celebration truly special.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-full text-sm transition-all shadow-md"
                >
                    Contact Us Today
                </a>
            </div>
        </div>
    );
};

export default Services;