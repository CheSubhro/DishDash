
import React from 'react';
import { Button } from "@heroui/react";
import { useNavigate } from 'react-router-dom';
import { FiAlertTriangle, FiArrowLeft, FiHome } from 'react-icons/fi';

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
            {/* Icon Banner / Visual */}
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-danger-50 text-danger shadow-inner">
                <FiAlertTriangle size={48} />
            </div>

            {/* Error Code */}
            <h1 className="text-7xl font-extrabold tracking-tight text-slate-800 lg:text-9xl">
                404
            </h1>

            {/* Title */}
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-700 sm:text-3xl">
                Page not found
            </h2>

            {/* Description */}
            <p className="mt-2 max-w-md text-sm text-slate-500 sm:text-base">
                Sorry, we couldn’t find the page you’re looking for. It might have been removed, renamed, or didn't exist in the first place.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button 
                    variant="bordered" 
                    startContent={<FiArrowLeft size={18} />}
                    onClick={() => navigate(-1)}
                    className="font-semibold text-slate-700"
                >
                    Go Back
                </Button>
            </div>
        </div>
    );
};

export default NotFound;