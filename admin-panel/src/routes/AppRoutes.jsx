
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
// import Home from '../pages/Home'; // যদি তৈরি করে থাকেন
// import NotFound from '../pages/NotFound'; // যদি তৈরি করে থাকেন

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            
            {/* ড্যাশবোর্ড বা অন্যান্য প্রটেক্টেড রাউট এখানে পরে যোগ করবেন */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
};

export default AppRoutes;