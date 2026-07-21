
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorBoundary } from "./components/common";
import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import { getCurrentUser } from "./features/auth/authSlice"; 

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUser()); 
    }, [dispatch]);

    return (
        <Router>
            <ErrorBoundary>
                <MainLayout>
                    <AppRoutes />
                    <ToastContainer 
                        position="top-right" 
                        autoClose={3000} 
                        hideProgressBar={false} 
                        newestOnTop 
                        closeOnClick 
                        rtl={false} 
                        pauseOnFocusLoss 
                        draggable 
                        pauseOnHover 
                    />
                </MainLayout>
            </ErrorBoundary>
        </Router>
    );
}

export default App;