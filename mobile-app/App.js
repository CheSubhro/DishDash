
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import './global.css';

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-slate-50">
            <AppNavigator />
        </SafeAreaView>
    );
}