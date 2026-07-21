
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../features/category/categorySlice';

export const useCategory = () => {
    
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector((state) => state.category);

    const loadCategories = useCallback(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        loadCategories();
    }, [loadCategories]);

    return {
        categories,
        loading,
        error,
        refetchCategories: loadCategories,
    };
};