
import React from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuItems({ menuItems, loading }) {
    
    if (loading) {
        return (
            <View className="py-10 items-center justify-center">
                <ActivityIndicator size="large" color="#0B132B" />
            </View>
        );
    }

    if (menuItems.length === 0) {
        return (
            <View className="py-10 items-center justify-center">
                <Text className="text-gray-500 text-sm">No items found in this category.</Text>
            </View>
        );
    }

    return (
        <View className="flex-row flex-wrap justify-between">
            {menuItems.map((item) => (
                <TouchableOpacity 
                    key={item._id} 
                    className="w-[48%] bg-white rounded-2xl p-2.5 mb-4 border border-gray-100 shadow-sm"
                >
                    <Image 
                        source={{ 
                            uri: item.image || `https://dummyimage.com/600x400/f1f5f9/475569&text=${encodeURIComponent(item.name)}`
                        }} 
                        className="w-full h-32 rounded-xl mb-2"
                        resizeMode="cover"
                    />
                    <Text className="text-gray-900 font-bold text-sm mb-1" numberOfLines={1}>
                        {item.name}
                    </Text>
                    <Text className="text-gray-500 text-xs mb-1" numberOfLines={1}>
                        {item.description || 'Tasty food item'}
                    </Text>
                    <View className="flex-row items-center justify-between mt-1">
                        <Text className="text-orange-600 font-bold text-xs">₹{item.price}</Text>
                        <View className="flex-row items-center bg-gray-100 px-1.5 py-0.5 rounded-md">
                            <Ionicons name="checkmark-circle" size={12} color={item.isAvailable ? "#10B981" : "#EF4444"} />
                            <Text className="text-gray-700 text-xs ml-1 font-medium">
                                {item.isAvailable ? 'Available' : 'Out'}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}