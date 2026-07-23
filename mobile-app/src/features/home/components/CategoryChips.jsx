
import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

export default function CategoryChips({ categories, activeCategoryId, setActiveCategoryId }) {
    return (
        <View className="my-2">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-1">
                {categories.map((cat) => {
                    const isActive = activeCategoryId === cat._id;
                    return (
                        <TouchableOpacity
                            key={cat._id}
                            onPress={() => setActiveCategoryId(cat._id)}
                            className={`px-5 py-2.5 rounded-full mr-3 ${
                                isActive ? 'bg-[#0B132B]' : 'bg-white border border-gray-200'
                            }`}
                        >
                            <Text className={`font-medium ${isActive ? 'text-white' : 'text-gray-600'}`}>
                                {cat.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}