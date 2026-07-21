
import api from './api';

export const menuService = {
    getAllMenuItems: async (categoryId = '') => {
        const url = categoryId ? `/menu/all?categoryId=${categoryId}` : '/menu/all';
        const response = await api.get(url);
        return response.data;
    },
};

export default menuService;