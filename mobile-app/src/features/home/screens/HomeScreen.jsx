
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import MenuItems from '../components/MenuItems';

const API_BASE_URL = 'http://10.120.172.52:8000/api/v1'; 

export default function HomeScreen() {

    const [activeCategoryId, setActiveCategoryId] = useState('all'); 
    const [categories, setCategories] = useState([{ _id: 'all', name: 'All' }]);
    const [menuItems, setMenuItems] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch(`${API_BASE_URL}/categories/all`)
        .then((res) => res.json())
        .then((data) => {
            if (data && data.data) {
                const filteredCategories = data.data.filter(cat => {
                    const name = cat.name.toLowerCase();
                    return name !== 'veg' && name !== 'non-veg category' && name !== 'vegetarian' && name !== 'non-vegetarian';
                });
                setCategories([{ _id: 'all', name: 'All' }, ...filteredCategories]);
            }
        })
        .catch((err) => console.log('Error fetching categories:', err));
    }, []);

    useEffect(() => {
        setLoading(true);
        let url = `${API_BASE_URL}/menu/all`;
        
        if (activeCategoryId !== 'all') {
            url += `?categoryId=${activeCategoryId}`;
        }

        fetch(url)
        .then(async (res) => {
            const textResponse = await res.text(); 
            try {
                const jsonResponse = JSON.parse(textResponse); 
                return jsonResponse;
            } catch (e) {
                console.log("Server HTML/Text Response:", textResponse); 
                throw new Error("Server returned HTML instead of JSON");
            }
        })
        .then((data) => {
            if (data && data.data) {
                setMenuItems(data.data);
            }
            setLoading(false);
        })
        .catch((err) => {
            console.log('Error fetching menu items:', err.message);
            setLoading(false);
        });
    }, [activeCategoryId]);

    const filteredMenuItems = menuItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView showsVerticalScrollIndicator={false} className="px-4 pt-2">
                
                {/* Logo and Header */}
                <View className="flex-row items-center justify-between py-3">
                    <View>
                        <Text className="text-2xl font-bold tracking-wider text-[#0B132B]">
                            Dish<Text className="text-orange-500">Dash</Text>
                        </Text>
                        <Text className="text-xs text-gray-500">Delivering Delicious Catering</Text>
                    </View>
                    
                    <TouchableOpacity className="p-2 bg-white rounded-full shadow-sm border border-gray-100">
                        <Ionicons name="notifications-outline" size={22} color="#0B132B" />
                    </TouchableOpacity>
                </View>

                {/* Search Bar */}
                <View className="my-3 flex-row items-center bg-white rounded-2xl px-4 py-3 border border-gray-100 shadow-sm">
                    <Ionicons name="search" size={20} color="#9CA3AF" />
                    <TextInput 
                        placeholder="Search for menu items..." 
                        placeholderTextColor="#9CA3AF"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        className="flex-1 ml-2 text-base text-gray-800"
                    />
                </View>
                
                {/* Hero Banner */}
                <View className="my-4 bg-[#0B132B] rounded-3xl p-5 overflow-hidden shadow-lg relative">
                    <View className="w-3/4">
                        <View className="bg-orange-500 self-start px-3 py-1 rounded-full mb-2">
                            <Text className="text-white text-xs font-bold">Special Offer</Text>
                        </View>
                        <Text className="text-white text-xl font-bold mb-1">Delicious Menu Items!</Text>
                        <Text className="text-gray-300 text-xs mb-4">Explore our fresh and tasty items category wise.</Text>
                        <TouchableOpacity className="bg-orange-500 px-4 py-2 rounded-xl self-start">
                            <Text className="text-white font-semibold text-sm">Explore</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Category Chips */}
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

                {/* Menu Items Section */}
                <View className="my-3">
                    <View className="flex-row items-center justify-between mb-3">
                        <Text className="text-lg font-bold text-[#0B132B]">Menu Items</Text>
                    </View>

                    <MenuItems menuItems={filteredMenuItems} loading={loading} />
                </View>

                {/* Custom Order */}
                <View className="my-4 bg-orange-50 border border-orange-200 rounded-3xl p-5 mb-8">
                    <View className="flex-row items-center justify-between">
                        <View className="w-2/3">
                            <Text className="text-[#0B132B] font-bold text-lg mb-1">Have a Custom Menu?</Text>
                            <Text className="text-gray-600 text-xs mb-3">Tell us your event details and get a custom price quotation instantly.</Text>
                            <TouchableOpacity className="bg-[#0B132B] px-4 py-2.5 rounded-xl self-start">
                                <Text className="text-white font-semibold text-xs">Request a Quote</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="w-1/3 items-center justify-center">
                            <Ionicons name="restaurant-outline" size={50} color="#0B132B" />
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}