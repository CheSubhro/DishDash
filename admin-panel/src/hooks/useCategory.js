
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    fetchCategories, 
    createCategory, 
    updateCategory, 
    removeCategory, 
    resetCategoryState 
} from '../features/category/categorySlice';

export const useCategory = () => {

    const dispatch = useDispatch();
    const { categories, isLoading, isError, message } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleAddCategory = async (data) => {
        return await dispatch(createCategory(data));
    };

    const handleEditCategory = async (categoryId, data) => {
        return await dispatch(updateCategory({ categoryId, categoryData: data }));
    };

    const handleDeleteCategory = async (categoryId) => {
        return await dispatch(removeCategory(categoryId));
    };

    const resetState = () => {
        dispatch(resetCategoryState());
    };

    return {
        categories,
        isLoading,
        isError,
        message,
        addCategory: handleAddCategory,
        editCategory: handleEditCategory,
        deleteCategory: handleDeleteCategory,
        resetState,
        refreshCategories: () => dispatch(fetchCategories()),
    };
};