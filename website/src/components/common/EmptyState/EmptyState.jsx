

import React from 'react';
import { Button } from "@heroui/react";

export default function EmptyState({ title = "No data found", description = "", onAction, actionText }) {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="w-16 h-16 mb-4 text-gray-400 flex items-center justify-center bg-gray-50 rounded-full">
            📦
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {description && <p className="text-sm text-gray-500 mt-1 max-w-sm">{description}</p>}
        
        {onAction && actionText && (
            <Button color="primary" size="sm" className="mt-4" onPress={onAction}>
            {actionText}
            </Button>
        )}
        </div>
  );
}
