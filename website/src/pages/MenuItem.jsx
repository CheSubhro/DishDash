
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FiChevronRight, FiHome } from 'react-icons/fi';
import MenuList from '../features/menu/components/MenuList';

const MenuItem = () => {
    
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('category');

    return (
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
            {/* Breadcrumb Navigation - Side by Side */}
            <nav className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
                <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <FiHome size={15} />
                    <span>Home</span>
                </Link>
                
                <FiChevronRight size={14} className="text-slate-400" />
                
                <Link to="/menu" className="hover:text-primary transition-colors">
                    Menu
                </Link>
                
                <FiChevronRight size={14} className="text-slate-400" />
                
                <span className="font-semibold text-primary capitalize">
                    {categoryId ? 'Category Items' : 'All Menu'}
                </span>
            </nav>

            {/* Menu List */}
            <MenuList categoryId={categoryId} showAll={true} />
        </div>
    );
};

export default MenuItem;