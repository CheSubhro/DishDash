
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import packageService from '../../services/packageService';

export const fetchPackages = createAsyncThunk(
    'packages/fetchAll',
    async (_, thunkAPI) => {
        try {
            const data = await packageService.getAllPackages();
            return data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const createNewPackage = createAsyncThunk(
    'packages/create',
    async (packageData, thunkAPI) => {
        try {
            const data = await packageService.createPackage(packageData);
            return data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const updateExistingPackage = createAsyncThunk(
    'packages/update',
    async ({ id, packageData }, thunkAPI) => {
        try {
            const data = await packageService.updatePackage(id, packageData);
            return data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const removePackage = createAsyncThunk(
    'packages/delete',
    async (id, thunkAPI) => {
        try {
            await packageService.deletePackage(id);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

const packageSlice = createSlice({
    name: 'packages',
    initialState: {
        packages: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPackages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPackages.fulfilled, (state, action) => {
                state.loading = false;
                state.packages = action.payload;
            })
            .addCase(fetchPackages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createNewPackage.fulfilled, (state, action) => {
                state.packages.unshift(action.payload);
            })
            .addCase(updateExistingPackage.fulfilled, (state, action) => {
                const index = state.packages.findIndex((p) => p._id === action.payload._id);
                if (index !== -1) {
                    state.packages[index] = action.payload;
                }
            })
            .addCase(removePackage.fulfilled, (state, action) => {
                state.packages = state.packages.filter((p) => p._id !== action.payload);
            });
    },
});

export default packageSlice.reducer;