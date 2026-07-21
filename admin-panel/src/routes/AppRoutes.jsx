
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard'; 
import {Categories} from '../pages/Categories'; 
import {NotFound} from '../pages/NotFound'; 

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="*" element={<NotFound />} /> 
        </Routes>
    );
};

export default AppRoutes;