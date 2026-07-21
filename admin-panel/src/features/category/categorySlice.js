
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { categoryService } from '../../services/categoryService';

const initialState = {
    categories: [],
    isLoading: false,
    isError: false,
    message: '',
};

// Fetch All Categories
export const fetchCategories = createAsyncThunk(
    'categories/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await categoryService.getAllCategories();
            return response.data; // ApiResponse data array
        } catch (error) {
            const message = error.response?.data?.message || error.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Add Category
export const createCategory = createAsyncThunk(
    'categories/add',
    async (categoryData, thunkAPI) => {
        try {
            const response = await categoryService.addCategory(categoryData);
            return response.data;
        } catch (error) {
            const message = error.response?.data?.message || error.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Edit Category
export const updateCategory = createAsyncThunk(
    'categories/edit',
    async ({ categoryId, categoryData }, thunkAPI) => {
        try {
            const response = await categoryService.editCategory(categoryId, categoryData);
            return response.data;
        } catch (error) {
            const message = error.response?.data?.message || error.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Delete Category
export const removeCategory = createAsyncThunk(
    'categories/delete',
    async (categoryId, thunkAPI) => {
        try {
            await categoryService.deleteCategory(categoryId);
            return categoryId;
        } catch (error) {
            const message = error.response?.data?.message || error.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        resetCategoryState: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch
            .addCase(fetchCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            // Add
            .addCase(createCategory.fulfilled, (state, action) => {
                state.categories.push(action.payload);
            })
            // Edit
            .addCase(updateCategory.fulfilled, (state, action) => {
                const index = state.categories.findIndex((cat) => cat._id === action.payload._id);
                if (index !== -1) {
                    state.categories[index] = action.payload;
                }
            })
            // Delete
            .addCase(removeCategory.fulfilled, (state, action) => {
                state.categories = state.categories.filter((cat) => cat._id !== action.payload);
            });
    },
});

export const { resetCategoryState } = categorySlice.actions;
export default categorySlice.reducer;