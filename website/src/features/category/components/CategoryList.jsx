
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from "@heroui/react";
import { FiGrid } from 'react-icons/fi';
import { useCategory } from '../../../hooks/useCategory';

const CategoryList = () => {
    
    const navigate = useNavigate();
    const { categories, loading } = useCategory();

    return (
        <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
            <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                    Explore Our Categories
                </h2>
                <p className="text-sm text-slate-500">
                    Choose from our wide range of catering services and delicious menu items
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center py-12">
                    <Spinner label="Loading categories..." color="primary" />
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {categories?.map((cat) => (
                        <div
                            key={cat._id}
                            onClick={() => navigate(`/menu?category=${cat._id}`)}
                            className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/50 transition-all cursor-pointer text-center"
                        >
                            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                                <FiGrid size={22} />
                            </div>
                            <h3 className="font-semibold text-slate-700 group-hover:text-primary transition-colors text-sm sm:text-base">
                                {cat.name}
                            </h3>
                            <span className="text-xs text-slate-400 capitalize mt-1">
                                {cat.type} category
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default CategoryList;