
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems } from '../features/menu/menuSlice';

export const useMenu = (categoryId = '') => {
    
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.menu);

    const loadMenuItems = useCallback(() => {
        dispatch(fetchMenuItems(categoryId));
    }, [dispatch, categoryId]);

    useEffect(() => {
        loadMenuItems();
    }, [loadMenuItems]);

    return {
        menuItems: items,
        loading,
        error,
        refetchMenu: loadMenuItems,
    };
};