
// features/home/homeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeSlide: 0,
    categories: [
        "Wedding Catering",
        "Birthday Party",
        "Corporate Events",
        "Traditional Bengali Food",
        "Special Packages"
    ],
    loading: false,
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setActiveSlide: (state, action) => {
            state.activeSlide = action.payload;
        },
    },
});

export const { setActiveSlide } = homeSlice.actions;
export default homeSlice.reducer;