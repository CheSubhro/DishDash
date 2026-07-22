
import React from 'react';
import { View, Text } from 'react-native';

export const WelcomeCard = () => {
    return (
        <View className="p-6 m-4 bg-white rounded-2xl shadow-sm border border-gray-100 items-center">
            <Text className="text-2xl font-bold text-[#0B132B] mb-2">
                Welcome to DishDash!
            </Text>
            <Text className="text-gray-500 text-center text-sm">
                Mobile app setup is successful and running with NativeWind Tailwind styles.
            </Text>
        </View>
    );
};