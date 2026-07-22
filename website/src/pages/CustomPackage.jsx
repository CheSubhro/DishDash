
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from "@heroui/react";
import { FiHome, FiChevronRight, FiCheckCircle, FiShoppingBag, FiCheck, FiX } from 'react-icons/fi';
import { useCategory } from '../hooks/useCategory';
import { useMenu } from '../hooks/useMenu'; 

const CustomPackage = () => {

    const { categories, loading: catLoading } = useCategory();
    const { menuItems, loading: menuLoading } = useMenu();

    const [selectedItems, setSelectedItems] = useState([]);

    const filteredCategories = categories?.filter((category) => {
        const itemsInCategory = menuItems?.filter(
            (item) => item.category === category._id || item.category?._id === category._id
        );
        return itemsInCategory && itemsInCategory.length > 0;
    });

    const handleCheckboxChange = (item) => {
        const exists = selectedItems.some((i) => i._id === item._id);
        if (exists) {
            setSelectedItems(selectedItems.filter((i) => i._id !== item._id));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    // সামারি বক্স থেকে X এ ক্লিক করে আইটেম বাদ দেওয়ার ফাংশন
    const handleRemoveItem = (itemId, e) => {
        e.stopPropagation();
        setSelectedItems(selectedItems.filter((i) => i._id !== itemId));
    };

    const totalPrice = selectedItems.reduce((total, item) => total + (item.price || 0), 0);

    const isLoading = catLoading || menuLoading;

    return (
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
                <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <FiHome size={15} />
                    <span>Home</span>
                </Link>
                <FiChevronRight size={14} className="text-slate-400" />
                <span className="font-semibold text-primary capitalize">
                    Custom Catering Package
                </span>
            </nav>

            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    Build Your Custom Package
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                    Select your favorite items category-wise and create your own custom menu.
                </p>
            </div>

            {isLoading ? (
                <div className="flex justify-center py-20">
                    <Spinner label="Loading categories and menu items..." color="primary" />
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    
                    {/* LEFT 2 COLUMNS: Categories & Menu Items */}
                    <div className="lg:col-span-2 space-y-8">
                        {filteredCategories?.map((category) => {
                            const itemsInCategory = menuItems?.filter(
                                (item) => item.category === category._id || item.category?._id === category._id
                            );

                            return (
                                <div key={category._id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                                    <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                                        <span>{category.name}</span>
                                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-primary/10 text-primary">
                                            {itemsInCategory?.length || 0} Items
                                        </span>
                                    </h2>

                                    {itemsInCategory && itemsInCategory.length > 0 ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {itemsInCategory.map((item) => {
                                                const isSelected = selectedItems.some((i) => i._id === item._id);

                                                return (
                                                    <div 
                                                        key={item._id}
                                                        onClick={() => handleCheckboxChange(item)}
                                                        className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                                                            isSelected 
                                                                ? 'border-primary bg-primary/5 shadow-sm' 
                                                                : 'border-slate-100 bg-slate-50/50 hover:border-slate-300'
                                                        }`}
                                                    >
                                                        <div>
                                                            <h3 className="text-sm font-semibold text-slate-800">
                                                                {item.name}
                                                            </h3>
                                                            <p className="text-xs font-bold text-primary mt-1">
                                                                ₹{item.price}
                                                            </p>
                                                        </div>

                                                        {/* Checkbox Icon UI */}
                                                        <div className={`h-6 w-6 rounded-lg flex items-center justify-center transition-colors ${
                                                            isSelected ? 'bg-primary text-white' : 'border border-slate-300 bg-white'
                                                        }`}>
                                                            {isSelected && <FiCheck size={14} />}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <p className="text-xs text-slate-400 italic py-2">
                                            No menu items available in this category.
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT 1 COLUMN: Sticky Summary Box */}
                    <div className="sticky top-24 bg-white rounded-3xl p-6 shadow-xl border border-slate-100 space-y-6">
                        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                                <FiShoppingBag size={22} />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-slate-900">Package Summary</h2>
                                <p className="text-xs text-slate-500">Your chosen custom items</p>
                            </div>
                        </div>

                        {/* Selected Items List with X Remove Button */}
                        <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
                            {selectedItems.length > 0 ? (
                                selectedItems.map((item) => (
                                    <div key={item._id} className="flex items-center justify-between text-sm py-2 px-3 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="truncate max-w-[150px]">
                                            <span className="text-slate-700 font-medium block truncate">
                                                {item.name}
                                            </span>
                                            <span className="text-xs font-semibold text-primary">₹{item.price}</span>
                                        </div>
                                        
                                        {/* X Remove Button */}
                                        <button 
                                            onClick={(e) => handleRemoveItem(item._id, e)}
                                            className="h-6 w-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center hover:bg-rose-100 hover:text-rose-600 transition-colors"
                                            title="Remove item"
                                        >
                                            <FiX size={14} />
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-slate-400 text-center py-6 italic">
                                    No items selected yet. Click items from left to add.
                                </p>
                            )}
                        </div>

                        {/* Total Calculation */}
                        <div className="pt-4 border-t border-slate-100 space-y-2">
                            <div className="flex items-center justify-between text-sm text-slate-500">
                                <span>Total Selected Items</span>
                                <span className="font-bold text-slate-800">{selectedItems.length}</span>
                            </div>
                            <div className="flex items-center justify-between text-lg font-extrabold text-slate-900">
                                <span>Total Price</span>
                                <span className="text-primary">₹{totalPrice}</span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            disabled={selectedItems.length === 0}
                            onClick={() => alert(`Custom package created successfully with ${selectedItems.length} items! Total: ₹{totalPrice}`)}
                            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <FiCheckCircle size={18} />
                            <span>Confirm Custom Package</span>
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default CustomPackage;