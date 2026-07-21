
import api from './api';

export const menuService = {
    getAllMenuItems: async () => {
        const response = await api.get('/menu/all');
        return response.data;
    },

    addMenuItem: async (formData) => {
        const response = await api.post('/menu/add', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    },

    editMenuItem: async (itemId, formData) => {
        const response = await api.patch(`/menu/edit/${itemId}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    },

    deleteMenuItem: async (itemId) => {
        const response = await api.delete(`/menu/delete/${itemId}`);
        return response.data;
    },
};