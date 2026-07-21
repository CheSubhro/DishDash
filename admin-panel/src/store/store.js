
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice";
import categoryReducer from '../features/category/categorySlice';
import menuReducer from '../features/menu/menuSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        categories: categoryReducer,
        menu: menuReducer,
    },
});