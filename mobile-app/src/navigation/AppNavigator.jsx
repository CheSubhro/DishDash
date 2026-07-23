
import React, { useState } from 'react';
import HomeScreen from '../features/home/screens/HomeScreen'; 
import CustomPackageScreen from '../features/home/screens/CustomPackageScreen';
import NewsletterScreen from '../features/newsletter/screens/NewsletterScreen';

export default function AppNavigator() {
    const [currentView, setCurrentView] = useState('home');
    const [viewParams, setViewParams] = useState(null); 

    if (currentView === 'customPackage') {
        return <CustomPackageScreen onBack={() => setCurrentView('home')} />;
    }

    if (currentView === 'newsletter') {
        return <NewsletterScreen onBack={() => setCurrentView('home')} />;
    }

    return (
        <HomeScreen 
            navigateTo={(view) => setCurrentView(view)} 
        />
    );
}