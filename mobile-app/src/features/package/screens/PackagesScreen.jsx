
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {API_BASE_URL} from '../../../config/api'; 
import PackageCard from '../components/PackageCard';

export default function PackagesScreen() {

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPackages = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/packages/all`);
            const data = await response.json();

            if (data && data.data) {
                setPackages(data.data);
            } else if (Array.isArray(data)) {
                setPackages(data);
            }
        } catch (err) {
            console.error('Error fetching packages:', err);
            setError('Failed to load packages. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPackages();
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="px-5 pt-4 pb-2">
                <Text className="text-2xl font-bold text-[#0B132B] mb-1">Catering Packages</Text>
                <Text className="text-gray-500 text-sm">Explore our best food packages curated for your events.</Text>
            </View>

            {loading ? (
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="#0B132B" />
                    <Text className="text-gray-500 mt-2 text-sm">Loading packages...</Text>
                </View>
            ) : error ? (
                <View className="flex-1 items-center justify-center px-5">
                    <Text className="text-red-500 text-center font-medium">{error}</Text>
                </View>
            ) : packages.length === 0 ? (
                <View className="flex-1 items-center justify-center px-5">
                    <Text className="text-gray-500 text-center">No packages available at the moment.</Text>
                </View>
            ) : (
                <FlatList
                    data={packages}
                    keyExtractor={(item) => item._id || item.id || Math.random().toString()}
                    renderItem={({ item }) => (
                        <PackageCard 
                            item={item} 
                            onSelect={(selectedPackage) => {
                                console.log('Selected:', selectedPackage.name);
                            }} 
                        />
                    )}
                    contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100, paddingTop: 10 }}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </SafeAreaView>
    );
}