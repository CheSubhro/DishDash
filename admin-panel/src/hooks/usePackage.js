
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPackages } from '../features/package/packageSlice';

export const usePackages = () => {
    const dispatch = useDispatch();
    const { packages, loading, error } = useSelector((state) => state.packages);

    useEffect(() => {
        dispatch(fetchPackages());
    }, [dispatch]);

    return { packages, loading, error, dispatch };
};