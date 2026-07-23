
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function ContactForm() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {

        if (!name || !email || !message) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        
        Alert.alert('Success', 'Thank you! Your message has been sent.');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <View className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 my-4">
            <Text className="text-xl font-bold text-[#0B132B] mb-4">Send us a Message</Text>

            <View className="mb-4">
                <Text className="text-sm font-semibold text-gray-700 mb-1">Your Name</Text>
                <TextInput
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800"
                    placeholder="Enter your name"
                    placeholderTextColor="#9CA3AF"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View className="mb-4">
                <Text className="text-sm font-semibold text-gray-700 mb-1">Email Address</Text>
                <TextInput
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800"
                    placeholder="Enter your email"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View className="mb-6">
                <Text className="text-sm font-semibold text-gray-700 mb-1">Message</Text>
                <TextInput
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 h-32 text-start"
                    placeholder="Type your message here..."
                    placeholderTextColor="#9CA3AF"
                    multiline={true}
                    textAlignVertical="top"
                    value={message}
                    onChangeText={setMessage}
                />
            </View>

            <TouchableOpacity
                onPress={handleSubmit}
                className="w-full bg-[#0B132B] py-4 rounded-xl items-center justify-center shadow-md active:opacity-90"
            >
                <Text className="text-white font-bold text-base">Submit Message</Text>
            </TouchableOpacity>
        </View>
    );
}