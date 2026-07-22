
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import MenuList from '../features/menu/components/MenuList';

const MenuItem = () => {
    
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('category');

    return (
        <MenuList categoryId={categoryId} showAll={true} />
    )
}

export default MenuItem