
import React from 'react'
import HeroSection from '../features/home/components/HeroSection';
import CategoryList from '../features/category/components/CategoryList';
import MenuList from '../features/menu/components/MenuList';
import CateringPackages from '../features/package/components/CateringPackages';
import {Newsletter} from '../pages/Newsletter';


const Home = () => {

    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <HeroSection />
            <CategoryList />
            <MenuList />
            <CateringPackages />
            <Newsletter />
        </div>
    )
}

export default Home