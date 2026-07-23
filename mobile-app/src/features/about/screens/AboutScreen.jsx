
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-gray-50 p-4">
            <Text className="text-2xl font-bold text-[#0B132B] mb-2">About DishDash</Text>
            <Text className="text-gray-600 text-center">Your ultimate catering and food management partner.</Text>
        </SafeAreaView>
    );
}