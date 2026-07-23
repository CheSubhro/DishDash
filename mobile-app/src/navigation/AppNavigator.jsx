
import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from '../features/home/screens/HomeScreen'; 
import CustomPackageScreen from '../features/home/screens/CustomPackageScreen';
import NewsletterScreen from '../features/newsletter/screens/NewsletterScreen';
import AboutScreen from '../features/about/screens/AboutScreen'; 
import PackagesScreen from '../features/package/screens/PackagesScreen';
import ContactScreen from '../features/contact/screens/ContactScreen';
import BottomTabBar from './BottomTabBar';

export default function AppNavigator() {
    
    const [currentView, setCurrentView] = useState('home');

    const renderScreen = () => {
        switch (currentView) {
            case 'home':
                return <HomeScreen navigateTo={setCurrentView} />;
            case 'customPackage':
                return <CustomPackageScreen navigateTo={setCurrentView} />;
            case 'newsletter':
                return <NewsletterScreen navigateTo={setCurrentView} />;
            case 'package':
                return <PackagesScreen />;
            case 'about':
                return <AboutScreen navigateTo={setCurrentView} />;
            case 'contact':
                return <ContactScreen navigateTo={setCurrentView} />;
            default:
                return <HomeScreen navigateTo={setCurrentView} />;
        }
    };

    return (
        <View className="flex-1 bg-white">
            <View className="flex-1">
                {renderScreen()}
            </View>

            <BottomTabBar currentView={currentView} navigateTo={setCurrentView} />
        </View>
    );
}