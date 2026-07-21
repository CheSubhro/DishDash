
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';
import categoryReducer from '../features/category/categorySlice';
import menuReducer from '../features/menu/menuSlice';
import packageReducer from '../features/package/packageSlice';

export const store = configureStore({
    reducer: {
        home: homeReducer,
        category:categoryReducer,
        menu: menuReducer,
        packages: packageReducer,
    },
});