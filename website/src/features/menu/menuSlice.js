
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import menuService from '../../services/menuService';

export const fetchMenuItems = createAsyncThunk(
    'menu/fetchMenuItems',
    async (categoryId, { rejectWithValue }) => {
        try {
            const data = await menuService.getAllMenuItems(categoryId);
            return data.data; 
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch menu items');
        }
    }
);

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenuItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMenuItems.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchMenuItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default menuSlice.reducer;