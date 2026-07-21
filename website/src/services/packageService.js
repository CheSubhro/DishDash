
import api from './api'; 

export const packageService = {
    fetchPackages: async (eventType) => {
        const url = eventType && eventType !== 'All' 
        ? `/packages/all?eventType=${eventType}` 
        : '/packages/all';
        const response = await api.get(url);
        return response.data.data;
    }
};