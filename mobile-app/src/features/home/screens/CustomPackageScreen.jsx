
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const API_BASE_URL = 'http://10.120.172.52:8000/api/v1';

export default function CustomPackageScreen({ onBack }) {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]); 

    useEffect(() => {
        fetch(`${API_BASE_URL}/menu/all`)
            .then(async (res) => {
                const text = await res.text();
                try {
                    return JSON.parse(text);
                } catch (e) {
                    throw new Error("Invalid JSON response");
                }
            })
            .then((data) => {
                if (data && data.data) {
                    setMenuItems(data.data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log('Error fetching menu for custom package:', err);
                setLoading(false);
            });
    }, []);

    // মেনু সিলেক্ট বা আনসিলেক্ট করার ফাংশন
    const toggleSelectItem = (item) => {
        const isSelected = selectedItems.some((i) => i._id === item._id);
        if (isSelected) {
            setSelectedItems(selectedItems.filter((i) => i._id !== item._id));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    // মোট দাম হিসাব করা
    const totalPrice = selectedItems.reduce((sum, item) => sum + (item.price || 0), 0);

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView className="px-4 pt-2 pb-10" showsVerticalScrollIndicator={false}>
                {/* Back Button & Header */}
                <View className="flex-row items-center mb-4">
                    <TouchableOpacity 
                        onPress={onBack} 
                        className="bg-white p-2 rounded-full border border-gray-200 mr-3"
                    >
                        <Ionicons name="arrow-back" size={20} color="#0B132B" />
                    </TouchableOpacity>
                    <Text className="text-xl font-bold text-[#0B132B]">Custom Menu Request</Text>
                </View>

                {/* Instruction / Banner */}
                <View className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-5">
                    <Text className="text-gray-700 font-bold text-base mb-1">Tell us your event details and set a menu</Text>
                    <Text className="text-gray-400 text-xs mb-3">
                        Select items from the list below to build your custom catering package and get an instant price quotation.
                    </Text>
                    
                    <View className="bg-orange-50 p-3 rounded-xl border border-orange-100 flex-row justify-between items-center">
                        <Text className="text-orange-800 font-semibold text-xs">
                            Selected Items: {selectedItems.length}
                        </Text>
                        <Text className="text-orange-900 font-bold text-sm">
                            Total: ৳{totalPrice}
                        </Text>
                    </View>
                </View>

                {/* Menu List Section */}
                <Text className="text-lg font-bold text-[#0B132B] mb-3">Available Menu Items</Text>

                {loading ? (
                    <View className="py-10 items-center justify-center">
                        <ActivityIndicator size="large" color="#0B132B" />
                        <Text className="text-gray-400 text-xs mt-2">Loading menu items...</Text>
                    </View>
                ) : menuItems.length === 0 ? (
                    <View className="py-10 items-center justify-center">
                        <Text className="text-gray-400 text-sm">No menu items found.</Text>
                    </View>
                ) : (
                    <View className="space-y-3 mb-24">
                        {menuItems.map((item) => {
                            const isSelected = selectedItems.some((i) => i._id === item._id);
                            return (
                                <TouchableOpacity
                                    key={item._id}
                                    onPress={() => toggleSelectItem(item)}
                                    activeOpacity={0.8}
                                    className={`p-4 rounded-2xl border flex-row items-center justify-between bg-white mb-3 ${
                                        isSelected ? 'border-orange-500 bg-orange-50/30' : 'border-gray-200'
                                    }`}
                                >
                                    <View className="flex-1 pr-3">
                                        <Text className="text-[#0B132B] font-bold text-sm mb-1">{item.name}</Text>
                                        <Text className="text-gray-500 text-xs mb-2" numberOfLines={2}>
                                            {item.description || 'Delicious catering item for your event.'}
                                        </Text>
                                        <Text className="text-orange-600 font-bold text-xs">৳{item.price || 0}</Text>
                                    </View>

                                    <View className={`w-7 h-7 rounded-full items-center justify-center border ${
                                        isSelected ? 'bg-orange-500 border-orange-500' : 'border-gray-300 bg-white'
                                    }`}>
                                        {isSelected && <Ionicons name="checkmark" size={16} color="white" />}
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                )}
            </ScrollView>

            {/* Bottom Summary & Request Quote Action Bar */}
            {selectedItems.length > 0 && (
                <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-5 py-4 flex-row items-center justify-between shadow-lg">
                    <View>
                        <Text className="text-gray-400 text-xs">Total Estimated Price</Text>
                        <Text className="text-[#0B132B] font-bold text-lg">৳{totalPrice}</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={() => {
                            alert(`Order submitted with ${selectedItems.length} items! Total: ৳${totalPrice}`);
                        }}
                        className="bg-[#0B132B] px-6 py-3 rounded-xl shadow-md"
                    >
                        <Text className="text-white font-bold text-xs">Request Quotation</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
}