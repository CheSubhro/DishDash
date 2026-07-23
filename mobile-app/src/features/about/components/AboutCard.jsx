
import React from 'react';
import { View, Text } from 'react-native';

export default function AboutCard() {
    return (
        <View className="w-full space-y-4">
            {/* Who We Are Card */}
            <View className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Text className="text-xl font-bold text-[#0B132B] mb-3">Who We Are</Text>
                <Text className="text-gray-600 leading-relaxed mb-4">
                    DishDash is your ultimate catering and food management partner, designed to make ordering for events, parties, corporate gatherings, and bulk celebrations completely seamless and delightful. We bridge the gap between premium culinary creators and food enthusiasts.
                </Text>

                <View className="border-t border-gray-100 pt-4 mt-2">
                    <Text className="text-lg font-bold text-[#0B132B] mb-2">Our Mission</Text>
                    <Text className="text-gray-600 leading-relaxed">
                        To connect food lovers with exceptional catering services, ensuring top-notch quality, absolute freshness, and strict punctuality for every single order, big or small.
                    </Text>
                </View>
            </View>

            {/* Our Vision Card */}
            <View className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Text className="text-xl font-bold text-[#0B132B] mb-3">Our Vision</Text>
                <Text className="text-gray-600 leading-relaxed">
                    To become the most trusted and tech-enabled food and catering platform, revolutionizing how people plan, customize, and experience large-scale dining events with complete peace of mind.
                </Text>
            </View>

            {/* Why Choose Us / Core Values */}
            <View className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Text className="text-xl font-bold text-[#0B132B] mb-4">Why Choose DishDash?</Text>
                
                <View className="space-y-3">
                    <View className="flex-row items-start">
                        <View className="w-2 h-2 bg-[#0B132B] rounded-full mt-2 mr-3" />
                        <View className="flex-1">
                            <Text className="font-semibold text-gray-800">Customized Menus</Text>
                            <Text className="text-sm text-gray-500">Tailor your food packages according to your exact guest count and preference.</Text>
                        </View>
                    </View>

                    <View className="flex-row items-start mt-3">
                        <View className="w-2 h-2 bg-[#0B132B] rounded-full mt-2 mr-3" />
                        <View className="flex-1">
                            <Text className="font-semibold text-gray-800">Uncompromised Quality</Text>
                            <Text className="text-sm text-gray-500">Partnered with expert chefs to bring fresh, hygienic, and delicious meals.</Text>
                        </View>
                    </View>

                    <View className="flex-row items-start mt-3">
                        <View className="w-2 h-2 bg-[#0B132B] rounded-full mt-2 mr-3" />
                        <View className="flex-1">
                            <Text className="font-semibold text-gray-800">On-Time Delivery</Text>
                            <Text className="text-sm text-gray-500">Punctuality is our core promise so your events run smoothly without delays.</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}