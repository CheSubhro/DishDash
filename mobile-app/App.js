
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootScreen from './src/screens/RootScreen'; 
import './global.css';

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-slate-50">
            <RootScreen />
        </SafeAreaView>
    );
}