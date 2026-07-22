
import React from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EventPackages({ packages, loading }) {
    
    if (loading) {
        return (
        <View className="py-10 items-center justify-center">
            <ActivityIndicator size="large" color="#0B132B" />
        </View>
        );
    }

    if (packages.length === 0) {
        return (
        <View className="py-10 items-center justify-center">
            <Text className="text-gray-500 text-sm">No packages found for this category.</Text>
        </View>
        );
    }

    return (
        <View className="flex-row flex-wrap justify-between">
        {packages.map((item) => (
            <TouchableOpacity 
            key={item._id} 
            className="w-[48%] bg-white rounded-2xl p-2.5 mb-4 border border-gray-100 shadow-sm"
            >
            <Image 
                source={{ 
                uri: item.image || 'https://images.unsplash.com/photo-1555244162-803834f70033?w=500' 
                }} 
                className="w-full h-32 rounded-xl mb-2"
                resizeMode="cover"
            />
            <Text className="text-gray-900 font-bold text-sm mb-1" numberOfLines={1}>
                {item.name}
            </Text>
            <View className="flex-row items-center justify-between mt-1">
                <Text className="text-orange-600 font-bold text-xs">৳{item.price} / প্লেট</Text>
                <View className="flex-row items-center bg-gray-100 px-1.5 py-0.5 rounded-md">
                <Ionicons name="star" size={12} color="#F59E0B" />
                <Text className="text-gray-700 text-xs ml-1 font-medium">4.8</Text>
                </View>
            </View>
            </TouchableOpacity>
        ))}
        </View>
    );
}