
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, logoutUser, getMe } from '../../services/authService';

export const login = createAsyncThunk('auth/login', async (credentials) => {
    return await loginUser(credentials);
});

export const logout = createAsyncThunk('auth/logout', async () => {
    await logoutUser();
});

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async () => {
    return await getMe();
});

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, loading: false, error: null },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(login.pending, (state) => { state.loading = true; })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.data; 
            })
            // Logout
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })
            // Current User 
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload.data;
            });
    },
});

export default authSlice.reducer;