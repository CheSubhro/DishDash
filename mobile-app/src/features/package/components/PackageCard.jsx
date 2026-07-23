
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function PackageCard({ item, onSelect, onCustomRequest }) {
    const [showMenus, setShowMenus] = useState(false);
    
    return (
        <View className="mb-4">
            {/* মূল প্যাকেজ কার্ড */}
            <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-2">
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

                {/* আইটেম লিস্ট */}
                {showMenus && (
                    <View className="mb-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <Text className="text-xs font-bold text-gray-500 uppercase mb-2">Package Items ({item.items?.length || 0}):</Text>
                        
                        {item.items && item.items.length > 0 ? (
                            item.items.map((subItem, index) => {
                                const itemName = subItem.itemName || subItem.name || 'Unnamed Item';
                                return (
                                    <View key={subItem._id || index} className="flex-row justify-between py-1.5 border-b border-gray-200/60 last:border-0">
                                        <Text className="text-sm text-gray-700 flex-1">• {itemName}</Text>
                                        {subItem.price && (
                                            <Text className="text-xs font-semibold text-gray-500">₹{subItem.price}</Text>
                                        )}
                                    </View>
                                );
                            })
                        ) : (
                            <Text className="text-sm text-gray-500 italic">No items found in this package.</Text>
                        )}
                    </View>
                )}

                {/* View Details বাটন */}
                <TouchableOpacity
                    onPress={() => {
                        setShowMenus(!showMenus);
                        if (onSelect) onSelect(item);
                    }}
                    className="w-full bg-[#0B132B] py-3 rounded-xl items-center justify-center active:opacity-90"
                >
                    <Text className="text-white font-bold text-sm">
                        {showMenus ? 'Hide Details' : 'View Details'}
                    </Text>
                </TouchableOpacity>            
            </View>
        </View>
    );
}