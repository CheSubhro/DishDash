
import React from 'react';
import { useMenu } from '../../../hooks/useMenu';
import { Spinner, Card } from "@heroui/react";

const MenuList = ({ categoryId }) => {

    const { menuItems, loading } = useMenu(categoryId);

    if (loading) {
        return (
            <div className="flex justify-center py-12">
                <Spinner label="Loading menu items..." color="primary" />
            </div>
        );
    }

    if (!menuItems || menuItems.length === 0) {
        return (
            <div className="text-center py-12 text-slate-400 text-sm">
                No menu items available for this selection.
            </div>
        );
    }

    return (
        <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
            <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                    Our Delicious Menu Items
                </h2>
                <p className="text-sm text-slate-500">
                    Explore our freshly prepared catering selections tailored for your events
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {menuItems.map((item) => (
                    <Card key={item._id} shadow="sm" className="border border-slate-100 hover:shadow-md transition-all p-0">
                        {/* Image Container */}
                        <div className="overflow-hidden relative aspect-video bg-slate-100">
                            <img
                                src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"}
                                alt={item.name}
                                className="w-full h-[180px] object-cover"
                            />
                            {!item.isAvailable && (
                                <span className="absolute top-2 right-2 bg-danger text-white text-[10px] px-2 py-1 rounded-full font-semibold z-10">
                                    Out of Stock
                                </span>
                            )}
                        </div>

                        {/* Content Container */}
                        <div className="flex flex-col items-start p-4 w-full">
                            <div className="flex justify-between w-full items-center mb-1">
                                <h4 className="font-bold text-slate-800 text-base">{item.name}</h4>
                                <span className="text-primary font-bold">₹{item.price}</span>
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                                {item.description || "Freshly prepared catering delicacy."}
                            </p>
                            <span className="inline-block bg-slate-100 text-slate-600 text-[10px] px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                                {item.category?.name || "General"}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default MenuList;