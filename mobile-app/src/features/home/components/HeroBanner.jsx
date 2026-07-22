
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
const BANNER_WIDTH = width - 32; 

const SLIDES = [
    {
        id: '1',
        tag: 'Griha Prabesh (House Warming)',
        title: 'Blessed House Warming Feast',
        description: 'Traditional and authentic dishes crafted specially for your auspicious Griha Prabesh ceremony.',
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800',
    },
    {
        id: '2',
        tag: 'Wedding',
        title: 'Grand Wedding Catering',
        description: 'Make your big day unforgettable with our royal spread and mouth-watering wedding delicacies.',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800',
    },
    {
        id: '3',
        tag: 'Birthday',
        title: 'Joyful Birthday Celebrations',
        description: 'Delight your guests with fun, delicious food and customized menus tailored for birthdays.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    },
];

const EVENT_TAG_COLORS = {
    'Griha Prabesh (House Warming)': 'bg-emerald-600',
    'Wedding': 'bg-rose-600',
    'Birthday': 'bg-sky-600',
    'Default': 'bg-orange-500',
};

export default function HeroBanner() {

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef(null);

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
                {SLIDES.map((slide) => {
                    const tagColor = EVENT_TAG_COLORS[slide.tag] || EVENT_TAG_COLORS['Default'];

                    return (
                        <View key={slide.id} style={{ width: BANNER_WIDTH }} className="h-48 rounded-3xl overflow-hidden">
                            <ImageBackground
                                source={{ uri: slide.image }}
                                className="flex-1 justify-between p-6"
                                resizeMode="cover"
                            >
                                <View className="absolute inset-0 bg-black/60" />

                                <View className="flex-row justify-between items-start z-10">
                                    <View className={`${tagColor} self-start px-3 py-1 rounded-full`}>
                                        <Text className="text-white text-[11px] font-bold uppercase tracking-wider">
                                            {slide.tag}
                                        </Text>
                                    </View>
                                </View>

                                <View className="z-10 pb-1">
                                    <Text className="text-white text-2xl font-extrabold mb-1 tracking-tight" numberOfLines={1}>
                                        {slide.title}
                                    </Text>
                                    <Text className="text-gray-100 text-sm mb-4 leading-4" numberOfLines={2}>
                                        {slide.description}
                                    </Text>
                                    
                                    <TouchableOpacity className="bg-orange-600 px-5 py-2.5 rounded-2xl self-start shadow-sm">
                                        <Text className="text-white font-bold text-sm">Explore Menu</Text>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </View>
                    );
                })}
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