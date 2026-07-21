
import React from 'react';
import { Spinner as HeroSpinner } from "@heroui/react";

const Spinner = ({ label = "Loading...", ...props }) => {
    return (
        <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="flex flex-col items-center space-y-2">
                <HeroSpinner
                    size="lg"
                    color="primary"
                    {...props}
                />
                {label && <p className="text-gray-500 text-sm">{label}</p>}
            </div>
        </div>
    );
};

export default Spinner;