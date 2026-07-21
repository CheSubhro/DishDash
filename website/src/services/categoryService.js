
import api from './api';

export const fetchAllCategories = async () => {
    const response = await api.get('/categories/all');
    return response.data;
};


const categoryService = {
    fetchAllCategories,
};

export default categoryService;