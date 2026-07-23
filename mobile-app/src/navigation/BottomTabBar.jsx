
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function BottomTabBar({ currentView, navigateTo }) {
    const tabs = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'package', label: 'Package' },
        { id: 'contact', label: 'Contact' },
    ];

    const isTabActive = (tabId) => currentView === tabId;

    return (
        <View className="flex-row bg-white border-t border-gray-200 py-3 px-6 justify-between items-center shadow-lg">
            {tabs.map((tab) => {
                const active = isTabActive(tab.id);
                return (
                    <TouchableOpacity
                        key={tab.id}
                        onPress={() => navigateTo(tab.id)}
                        className="items-center justify-center flex-1"
                    >
                        <Text className={`text-xs font-semibold ${active ? 'text-[#0B132B]' : 'text-gray-400'}`}>
                            {tab.label}
                        </Text>
                        {active && (
                            <View className="w-1.5 h-1.5 bg-[#0B132B] rounded-full mt-1" />
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}