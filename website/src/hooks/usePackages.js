
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPackages, setEventType } from '../features/package/packageSlice';

export const usePackages = () => {
  const dispatch = useDispatch();
  const { packages, loading, error, selectedEventType } = useSelector(
    (state) => state.packages
  );

  useEffect(() => {
    dispatch(fetchPackages(selectedEventType));
  }, [dispatch, selectedEventType]);

  const changeEventType = (eventType) => {
    dispatch(setEventType(eventType));
  };

  return { packages, loading, error, selectedEventType, changeEventType };
};