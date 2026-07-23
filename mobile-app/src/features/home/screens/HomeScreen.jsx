
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MenuItems from '../components/MenuItems';
import HeroBanner from '../components/HeroBanner';


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
                <Header onNotificationPress={() => console.log('Notification clicked')} />

                {/* Search Bar */}
                <SearchBar 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                />
                
                {/* Hero Banner */}
                <HeroBanner />

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