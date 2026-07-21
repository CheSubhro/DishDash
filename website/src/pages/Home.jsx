
import React from 'react'
import HeroSection from '../features/home/components/HeroSection';
import CategoryList from '../features/category/components/CategoryList';

const Home = () => {

    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <HeroSection />
            <CategoryList />
        </div>
    )
}

export default Home