
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchMenuItems,
    addMenuItem,
    editMenuItem,
    deleteMenuItem,
} from '../features/menu/menuSlice';
import { toast } from 'react-toastify';

export const useMenu = () => {
    const dispatch = useDispatch();
    const { menuItems, isLoading, error } = useSelector((state) => state.menu);

    const loadMenuItems = useCallback(() => {
        dispatch(fetchMenuItems());
    }, [dispatch]);

    useEffect(() => {
        loadMenuItems();
    }, [loadMenuItems]);

    const handleAddMenu = async (formData) => {
        try {
            await dispatch(addMenuItem(formData)).unwrap();
            toast.success('Menu item added successfully!');
        } catch (err) {
            toast.error(err || 'Failed to add menu item');
        }
    };

    const handleEditMenu = async (itemId, formData) => {
        try {
            await dispatch(editMenuItem({ itemId, formData })).unwrap();
            toast.success('Menu item updated successfully!');
        } catch (err) {
            toast.error(err || 'Failed to update menu item');
        }
    };

    const handleDeleteMenu = async (itemId) => {
        try {
            await dispatch(deleteMenuItem(itemId)).unwrap();
            toast.success('Menu item deleted successfully!');
        } catch (err) {
            toast.error(err || 'Failed to delete menu item');
        }
    };

    return {
        menuItems,
        isLoading,
        error,
        addMenuItem: handleAddMenu,
        editMenuItem: handleEditMenu,
        deleteMenuItem: handleDeleteMenu,
        refreshMenu: loadMenuItems,
    };
};