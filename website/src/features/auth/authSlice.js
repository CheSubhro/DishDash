
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";

export const register = createAsyncThunk("auth/register", async (data, thunkAPI) => {
    try {
        return await authService.register(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Registration failed");
    }
});

export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {
        return await authService.login(credentials);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
    }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await authService.logout();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Logout failed");
    }
});

export const getCurrentUser = createAsyncThunk("auth/getCurrentUser", async (_, thunkAPI) => {
    try {
        return await authService.getCurrentUser();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Not authenticated");
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: { 
        user: null, 
        isAuthenticated: false,
        loading: false, 
        error: null 
    },
    reducers: {
        setUser: (state, action) => { 
            state.user = action.payload; 
            state.isAuthenticated = !!action.payload;
        },
        logoutSuccess: (state) => { 
            state.user = null; 
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(login.pending, (state) => { 
                state.loading = true; 
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.data.user;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Register
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Get Current User (Refresh session check)
            .addCase(getCurrentUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload?.data || null; 
                state.isAuthenticated = !!action.payload?.data;
            })
            .addCase(getCurrentUser.rejected, (state) => {
                state.loading = false;
                state.user = null; 
                state.isAuthenticated = false;
            })
            // Logout
            .addCase(logout.fulfilled, (state) => {
                state.user = null; 
                state.isAuthenticated = false;
                state.loading = false;
                state.error = null;
            });
    }
});

export const { setUser, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;