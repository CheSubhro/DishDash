
import { useDispatch, useSelector } from "react-redux";
import { login as loginAction, logout as logoutAction, getCurrentUser } from "../features/auth/authSlice";

export const useAuth = () => {
    const dispatch = useDispatch();
    const { user, isAuthenticated, loading, error } = useSelector((state) => state.auth);

    const login = async (credentials) => dispatch(loginAction(credentials)).unwrap();
    const logout = async () => dispatch(logoutAction()).unwrap();
    const fetchCurrentUser = async () => dispatch(getCurrentUser()).unwrap();

    return { 
        user, 
        isAuthenticated, 
        loading, 
        error, 
        login, 
        logout, 
        fetchCurrentUser 
    };
};