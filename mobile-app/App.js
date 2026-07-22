import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/features/home/screens/HomeScreen';
import './global.css';

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-slate-50">
            <HomeScreen />
        </SafeAreaView>
    );
}