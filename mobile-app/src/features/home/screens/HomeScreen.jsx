
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import SearchBar from '../components/SearchBar';
import CategoryChips from '../components/CategoryChips';
import MenuItems from '../components/MenuItems';
import CustomMenuBanner from '../components/CustomMenuBanner';
import NewsletterBanner from '../../newsletter/components/NewsletterBanner';

import { API_BASE_URL } from '../../../config/api';


export default function HomeScreen({ navigateTo }) {
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
                return JSON.parse(textResponse); 
            } catch (e) {
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
            <ScrollView showsVerticalScrollIndicator={false} className="px-4 pt-2 pb-10">
                
                <Header onNotificationPress={() => console.log('Notification clicked')} />

                <SearchBar 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                />
                
                <HeroBanner />

                <CategoryChips 
                    categories={categories} 
                    activeCategoryId={activeCategoryId} 
                    setActiveCategoryId={setActiveCategoryId} 
                />

                <View className="my-3">
                    <View className="flex-row items-center justify-between mb-3">
                        <Text className="text-lg font-bold text-[#0B132B]">Menu Items</Text>
                    </View>

                    <MenuItems menuItems={filteredMenuItems} loading={loading} />
                </View>

                {/* Custom Order Banner */}
                <CustomMenuBanner 
                    onPress={() => navigateTo('customPackage')} 
                />

                {/* Newsletter Banner Component */}
                <NewsletterBanner 
                    onPress={() => navigateTo('newsletter')} 
                />

            </ScrollView>
        </SafeAreaView>
    );
}