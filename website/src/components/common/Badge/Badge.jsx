
import React from 'react';
import { Chip } from "@heroui/react";

const Badge = ({ variant, status, children, ...props }) => {
    const rawKey = (variant || status || 'info').toLowerCase();
    const activeKey = rawKey === 'inactive' ? 'warning' : rawKey;

    const colorClasses = {
        success: 'bg-green-50 text-green-700 border-green-200',
        danger: 'bg-red-50 text-red-700 border-red-200',
        error: 'bg-red-50 text-red-700 border-red-200',
        warning: 'bg-amber-50 text-amber-700 border-amber-200', 
        info: 'bg-blue-50 text-blue-700 border-blue-200',
    };

    const styleClass = colorClasses[activeKey] || 'bg-gray-50 text-gray-600 border-gray-200';

    return (
        <Chip
            variant="flat"
            className={`px-2.5 py-0.5 border rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center ${styleClass}`}
            {...props}
        >
            {children}
        </Chip>
    );
};

export default Badge;