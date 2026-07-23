
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function NewsletterScreen({ onBack }) {
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView className="px-4 pt-2 pb-10" showsVerticalScrollIndicator={false}>
                {/* Back Button & Header */}
                <View className="flex-row items-center mb-6">
                    <TouchableOpacity 
                        onPress={onBack} 
                        className="bg-white p-2 rounded-full border border-gray-200 mr-3 shadow-sm"
                    >
                        <Ionicons name="arrow-back" size={20} color="#0B132B" />
                    </TouchableOpacity>
                    <Text className="text-xl font-bold text-[#0B132B]">Newsletter & Updates</Text>
                </View>

                {/* Newsletter Content */}
                <View className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-4">
                    <Text className="text-[#0B132B] font-bold text-lg mb-2">Stay Updated with DishDash!</Text>
                    <Text className="text-gray-600 text-xs leading-relaxed mb-4">
                        Get the latest updates on new menu items, special catering packages, and exclusive discount offers directly to your inbox.
                    </Text>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}