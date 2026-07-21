
import { configureStore } from '@reduxjs/toolkit';
// এখানে আপনার তৈরি করা রিডিউসারগুলো ইমপোর্ট করবেন (যেমন: packageReducer ইত্যাদি)

export const store = configureStore({
    reducer: {
        // packages: packageReducer, (উদাহরণস্বরূপ)
    },
});