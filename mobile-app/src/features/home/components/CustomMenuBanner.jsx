
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomMenuBanner({ onPress }) {
    return (
        <TouchableOpacity 
            onPress={onPress}
            activeOpacity={0.9}
            className="my-4 bg-orange-50 border border-orange-200 rounded-3xl p-5 mb-8"
        >
            <View className="flex-row items-center justify-between">
                <View className="w-2/3">
                    <Text className="text-[#0B132B] font-bold text-lg mb-1">Have a Custom Menu?</Text>
                    <Text className="text-gray-600 text-xs mb-3 leading-relaxed">
                        Tell us your event details and set a menu to get an instant price quotation tailored just for you.
                    </Text>
                    
                    <View className="bg-[#0B132B] px-4 py-2.5 rounded-xl self-start">
                        <Text className="text-white font-semibold text-xs">Request a Quote</Text>
                    </View>
                </View>
                <View className="w-1/3 items-center justify-center">
                    <Ionicons name="restaurant-outline" size={50} color="#0B132B" />
                </View>
            </View>
        </TouchableOpacity>
    );
}