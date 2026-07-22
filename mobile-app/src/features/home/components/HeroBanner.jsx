
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
const BANNER_WIDTH = width - 32; // প্যাডিং (px-4 = 16 করে উভয়পাশে ৩২ বাদ)

const SLIDES = [
    {
        id: '1',
        tag: 'Special Offer',
        title: 'Delicious Catering Menu!',
        description: 'Explore our fresh, tasty dishes crafted for your perfect events.',
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800',
    },
    {
        id: '2',
        tag: 'Wedding & Events',
        title: 'Grand Party Packages',
        description: 'Book customized catering packages with mouth-watering food items.',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800',
    },
    {
        id: '3',
        tag: 'Chef Specials',
        title: 'Handcrafted With Love',
        description: 'Experience authentic flavors delivered hot right to your venue.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    },
];

export default function HeroBanner() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef(null);

    // অটো স্লাইড ইফেক্ট (প্রতি ৩ সেকেন্ড পর পর স্লাইড হবে)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                const nextIndex = prevIndex === SLIDES.length - 1 ? 0 : prevIndex + 1;
                scrollViewRef.current?.scrollTo({
                    x: nextIndex * BANNER_WIDTH,
                    animated: true,
                });
                return nextIndex;
            });
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    // স্ক্রল করার সময় ইনডেক্স ট্র্যাক করা
    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / BANNER_WIDTH);
        setActiveIndex(currentIndex);
    };

    return (
        <View className="my-4">
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                className="rounded-3xl overflow-hidden shadow-lg"
            >
                {SLIDES.map((slide) => (
                    <View key={slide.id} style={{ width: BANNER_WIDTH }} className="h-44 rounded-3xl overflow-hidden">
                        <ImageBackground
                            source={{ uri: slide.image }}
                            className="flex-1 justify-center p-5"
                            resizeMode="cover"
                        >
                            {/* ডার্ক ওভারলে যাতে টেক্সট ক্লিয়ার বোঝা যায় */}
                            <View className="absolute inset-0 bg-black/50" />

                            <View className="w-3/4 z-10">
                                <View className="bg-orange-500 self-start px-3 py-0.5 rounded-full mb-1.5">
                                    <Text className="text-white text-[10px] font-bold">{slide.tag}</Text>
                                </View>
                                <Text className="text-white text-lg font-bold mb-1" numberOfLines={1}>
                                    {slide.title}
                                </Text>
                                <Text className="text-gray-200 text-xs mb-3" numberOfLines={2}>
                                    {slide.description}
                                </Text>
                                <TouchableOpacity className="bg-orange-500 px-3.5 py-1.5 rounded-xl self-start">
                                    <Text className="text-white font-semibold text-xs">Explore</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                ))}
            </ScrollView>

            <View className="flex-row justify-center items-center mt-2 space-x-1.5">
                {SLIDES.map((_, index) => (
                    <View
                        key={index}
                        className={`h-1.5 rounded-full ${
                            activeIndex === index
                                ? 'w-5 bg-orange-500'
                                : 'w-1.5 bg-gray-300'
                        }`}
                    />
                ))}
            </View>
        </View>
    );
}