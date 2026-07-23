
import React from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContactForm from '../components/ContactForm';

export default function ContactScreen() {
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView showsVerticalScrollIndicator={false} className="px-5 pt-4 pb-10">
                
                <Text className="text-2xl font-bold text-[#0B132B] mb-1">Contact Us</Text>
                <Text className="text-gray-500 text-sm mb-4">
                    Have questions about catering or bulk orders? Reach out to our support team anytime.
                </Text>

                <ContactForm />

            </ScrollView>
        </SafeAreaView>
    );
}