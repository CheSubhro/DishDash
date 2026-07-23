
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ onNotificationPress }) {
    return (
        <View className="flex-row items-center justify-between py-3">
            <View>
                <Text className="text-2xl font-bold tracking-wider text-[#0B132B]">
                    Dish<Text className="text-orange-500">Dash</Text>
                </Text>
                <Text className="text-xs text-gray-500">Delivering Delicious Catering</Text>
            </View>
            
            <TouchableOpacity 
                onPress={onNotificationPress}
                className="p-2 bg-white rounded-full shadow-sm border border-gray-100"
            >
                <Ionicons name="notifications-outline" size={22} color="#0B132B" />
            </TouchableOpacity>
        </View>
    );
}