
import api from './api';

const packageService = {
    getAllPackages: async () => {
        const response = await api.get('/packages/all');
        return response.data;
    },
    getPackageById: async (id) => {
        const response = await api.get(`/packages/${id}`);
        return response.data;
    },
    createPackage: async (packageData) => {
        const response = await api.post('/packages/add', packageData);
        return response.data;
    },
    updatePackage: async (id, packageData) => {
        const response = await api.patch(`/packages/edit/${id}`, packageData);
        return response.data;
    },
    deletePackage: async (id) => {
        const response = await api.delete(`/packages/delete/${id}`);
        return response.data;
    }
};

export default packageService;