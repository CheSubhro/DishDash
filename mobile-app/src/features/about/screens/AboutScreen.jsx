
import React from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AboutCard from '../components/AboutCard';

export default function AboutScreen() {
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView showsVerticalScrollIndicator={false} className="px-5 pt-4 pb-10">
                
                <Text className="text-2xl font-bold text-[#0B132B] mb-1">About DishDash</Text>
                <Text className="text-gray-500 text-sm mb-4">
                    Learn more about our journey, vision, and what drives us forward.
                </Text>

                <AboutCard />

            </ScrollView>
        </SafeAreaView>
    );
}