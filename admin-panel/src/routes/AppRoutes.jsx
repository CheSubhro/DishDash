
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard'; 
import {Categories} from '../pages/Categories'; 
import {MenuItems} from '../pages/MenuItems';
import {NotFound} from '../pages/NotFound'; 

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/menu-items" element={<MenuItems />} />
            <Route path="*" element={<NotFound />} /> 
        </Routes>
    );
};

export default AppRoutes;