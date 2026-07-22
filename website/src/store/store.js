
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import homeReducer from '../features/home/homeSlice';
import categoryReducer from '../features/category/categorySlice';
import menuReducer from '../features/menu/menuSlice';
import packageReducer from '../features/package/packageSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        home: homeReducer,
        category:categoryReducer,
        menu: menuReducer,
        packages: packageReducer,
    },
});