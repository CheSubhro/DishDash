
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WelcomeCard } from './src/features/home/components/WelcomeCard';
import "./global.css";

export default function App() {
	return (
		<SafeAreaView className="flex-1 bg-slate-50">
			<ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
				<View className="py-12 px-6 items-center bg-[#0B132B]">
				<Text className="text-3xl font-extrabold text-white">DishDash</Text>
				<Text className="text-slate-300 text-sm mt-1 text-center">Catering App Mobile</Text>
				</View>

				<WelcomeCard />
			</ScrollView>
		</SafeAreaView>
	);
}