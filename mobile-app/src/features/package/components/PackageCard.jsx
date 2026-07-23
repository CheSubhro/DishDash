
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function PackageCard({ item, onSelect }) {
    
    return (
        <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-4">
            <View className="flex-row justify-between items-start mb-2">
                <View className="flex-1 mr-2">
                    <Text className="text-lg font-bold text-[#0B132B]">{item.name || 'Catering Package'}</Text>
                    <Text className="text-xs text-indigo-600 font-semibold uppercase tracking-wider mt-0.5">
                        {item.eventType || 'General Event'}
                    </Text>
                </View>
                <View className="bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
                    <Text className="text-base font-extrabold text-[#0B132B]">₹{item.price || 0}</Text>
                </View>
            </View>

            <Text className="text-gray-600 text-sm mb-4 leading-relaxed" numberOfLines={2}>
                {item.description || 'Custom catering package tailored for your events.'}
            </Text>

            <TouchableOpacity
                onPress={() => onSelect && onSelect(item)}
                className="w-full bg-[#0B132B] py-3 rounded-xl items-center justify-center active:opacity-90"
            >
                <Text className="text-white font-bold text-sm">View Details</Text>
            </TouchableOpacity>
        </View>
    );
}