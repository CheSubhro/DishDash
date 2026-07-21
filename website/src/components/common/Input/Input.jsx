
import React, { forwardRef } from 'react';
import { Input as HeroInput } from "@heroui/react";

const Input = forwardRef(({ label, error, helperText, ...props }, ref) => {
    return (
        <div className="w-full mb-4">
            <HeroInput
                ref={ref}
                label={label}
                isInvalid={!!error}
                errorMessage={error}
                description={!error ? helperText : undefined}
                variant="bordered"
                size="sm"
                {...props}
            />
        </div>
    );
});

Input.displayName = 'Input';

export default Input;