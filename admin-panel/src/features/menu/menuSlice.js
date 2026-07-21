
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { menuService } from '../../services/menuService';

export const fetchMenuItems = createAsyncThunk(
    'menu/fetchAll',
    async (_, thunkAPI) => {
        try {
            const data = await menuService.getAllMenuItems();
            return data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch menu items');
        }
    }
);

export const addMenuItem = createAsyncThunk(
    'menu/add',
    async (formData, thunkAPI) => {
        try {
            const data = await menuService.addMenuItem(formData);
            return data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to add menu item');
        }
    }
);

export const editMenuItem = createAsyncThunk(
    'menu/edit',
    async ({ itemId, formData }, thunkAPI) => {
        try {
            const data = await menuService.editMenuItem(itemId, formData);
            return data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to update menu item');
        }
    }
);

export const deleteMenuItem = createAsyncThunk(
    'menu/delete',
    async (itemId, thunkAPI) => {
        try {
            await menuService.deleteMenuItem(itemId);
            return itemId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to delete menu item');
        }
    }
);

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuItems: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenuItems.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMenuItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.menuItems = action.payload;
            })
            .addCase(fetchMenuItems.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addMenuItem.fulfilled, (state, action) => {
                state.menuItems.unshift(action.payload);
            })
            .addCase(editMenuItem.fulfilled, (state, action) => {
                state.menuItems = state.menuItems.map((item) =>
                    item._id === action.payload._id ? action.payload : item
                );
            })
            .addCase(deleteMenuItem.fulfilled, (state, action) => {
                state.menuItems = state.menuItems.filter((item) => item._id !== action.payload);
            });
    },
});

export default menuSlice.reducer;