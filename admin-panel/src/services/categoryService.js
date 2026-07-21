
import api from './api';

export const categoryService = {
    getAllCategories: async () => {
        const response = await api.get('/categories/all');
        return response.data;
    },

    addCategory: async (categoryData) => {
        const response = await api.post('/categories/add', categoryData);
        return response.data;
    },

    editCategory: async (categoryId, categoryData) => {
        const response = await api.patch(`/categories/edit/${categoryId}`, categoryData);
        return response.data;
    },

    deleteCategory: async (categoryId) => {
        const response = await api.delete(`/categories/delete/${categoryId}`);
        return response.data;
    },
};