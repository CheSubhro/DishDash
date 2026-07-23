
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePackages } from '../../../hooks/usePackages';
import { Spinner, Card, Button } from "@heroui/react";

const eventCategories = [
    { label: "All Packages", value: "All" },
    { label: "Griha Prabesh", value: "Griha Prabesh (House Warming)" },
    { label: "Birthday", value: "Annaprashan / Birthday" },
    { label: "Sadh Bhokkhon", value: "Sadh Bhokkhon" },
    { label: "Mangshamukhi", value: "Mangshamukhi" },
    { label: "Wedding", value: "Wedding" },
    { label: "Dinner Party", value: "Dinner Party" },
    { label: "Custom", value: "Custom" }
];

const CateringPackages = () => {
    
    const navigate = useNavigate();
    const { packages, loading, selectedEventType, changeEventType } = usePackages();

    const handleCategoryClick = (value) => {
        if (value === "Custom") {
            navigate("/custom-package");
        } else {
            changeEventType(value);
        }
    };

    return (
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-slate-800">
                    Perfect Catering Packages
                </h2>
                <p className="text-slate-500 text-sm mt-2">
                    Select from our crafted packages tailored for your special occasions
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-10">
                {eventCategories.map((cat) => {
                    const isSelected = selectedEventType === cat.value;
                    return (
                        <button
                            key={cat.value}
                            onClick={() => handleCategoryClick(cat.value)}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border shadow-sm ${
                                isSelected
                                    ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105"
                                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                            }`}
                        >
                            {cat.label}
                        </button>
                    );
                })}
            </div>

            {/* Loading & Empty States */}
            {loading ? (
                <div className="flex justify-center py-12">
                    <Spinner label="Loading catering packages..." color="primary" />
                </div>
            ) : packages.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-sm">
                    No catering packages found for this selection.
                </div>
            ) : (
                /* Package Cards Grid */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg) => (
                        <Card
                            key={pkg._id}
                            shadow="sm"
                            className="border border-slate-100 hover:shadow-lg transition-all p-5 flex flex-col justify-between bg-white"
                        >
                            <div>
                                <span className="inline-block bg-primary/10 text-primary text-[10px] px-2.5 py-1 rounded-md uppercase font-bold tracking-wider mb-3">
                                    {pkg.eventType || "Catering"}
                                </span>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">
                                    {pkg.name}
                                </h3>
                                <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                                    {pkg.description || "Freshly prepared catering package for your special event."}
                                </p>

                                {/* Package Specifications */}
                                <div className="space-y-2 border-t border-b border-slate-100 py-3 my-4 text-xs text-slate-600">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Number of Items:</span>
                                        <span className="font-semibold">{pkg.items?.length || 0} Items</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Minimum Number of Guests:</span>
                                        <span className="font-semibold">{pkg.minGuests || 20} Guests</span>
                                    </div>
                                </div>
                            </div>

                            {/* Price and Details Action */}
                            <div className="pt-2">
                                <div className="flex justify-between items-baseline mb-4">
                                    <span className="text-xs text-slate-400">Price</span>
                                    <span className="text-2xl font-extrabold text-primary">₹{pkg.price}</span>
                                </div>
                                <Button
                                    color="primary"
                                    className="w-full font-semibold shadow-sm"
                                    variant="flat"
                                >
                                    View Details
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </section>
    );
};

export default CateringPackages;