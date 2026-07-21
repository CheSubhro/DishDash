
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { packageService } from '../../services/packageService';

export const fetchPackages = createAsyncThunk(
    'packages/fetchPackages',
    async (eventType, { rejectWithValue }) => {
        try {
            const data = await packageService.fetchPackages(eventType);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch packages');
        }
    }
);

const packageSlice = createSlice({
    name: 'packages',
    initialState: {
        packages: [],
        loading: false,
        error: null,
        selectedEventType: 'All',
    },
    reducers: {
        setEventType: (state, action) => {
        state.selectedEventType = action.payload;
        },
    },
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
        });
    },
});

export const { setEventType } = packageSlice.actions;
export default packageSlice.reducer;