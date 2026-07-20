
import api from './api';

export const loginUser = async (credentials) => {
    const response = await api.post('/users/login', credentials);
    return response.data;
};

export const logoutUser = async () => {
    await api.post('/users/logout');
};

export const getMe = async () => {
    const response = await api.get('/users/current-user');
    return response.data;
};