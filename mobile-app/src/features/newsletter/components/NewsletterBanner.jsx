
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function NewsletterBanner({ onPress }) {
    return (
        <TouchableOpacity 
            onPress={onPress}
            activeOpacity={0.9}
            className="bg-white border border-gray-200 p-4 rounded-2xl mb-8 flex-row items-center justify-between shadow-sm"
        >
            <View>
                <Text className="text-[#0B132B] font-bold text-base">Newsletter & Updates</Text>
                <Text className="text-gray-500 text-xs mt-0.5">Stay updated with our latest offers</Text>
            </View>
            <View className="bg-orange-50 px-3 py-2 rounded-xl">
                <Text className="text-orange-600 font-bold text-xs">View</Text>
            </View>
        </TouchableOpacity>
    );
}