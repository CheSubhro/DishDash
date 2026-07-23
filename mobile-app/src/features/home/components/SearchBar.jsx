
import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({ searchQuery, setSearchQuery, placeholder = "Search for menu items..." }) {
    return (
        <View className="my-3 flex-row items-center bg-white rounded-2xl px-4 py-3 border border-gray-100 shadow-sm">
            <Ionicons name="search" size={20} color="#9CA3AF" />
            <TextInput 
                placeholder={placeholder} 
                placeholderTextColor="#9CA3AF"
                value={searchQuery}
                onChangeText={setSearchQuery}
                className="flex-1 ml-2 text-base text-gray-800"
            />
        </View>
    );
}