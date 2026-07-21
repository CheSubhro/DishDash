
import React from 'react';

const Card = ({ children, className = "", ...props }) => (
    <div 
        className={`p-5 shadow-md border border-gray-100 rounded-lg bg-white ${className}`} 
        {...props}
    >
        {children}
    </div>
);

export default Card;
