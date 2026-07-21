
import React from 'react';
import { Button as HeroButton } from "@heroui/react";

const Button = ({ 
    children, 
    variant = 'solid', 
    colorScheme = 'primary', 
    isLoading = false, 
    leftIcon, 
    ...props 
}) => {
    // Map Chakra color schemes to HeroUI colors if necessary, or pass directly if matching
    const colorMap = {
        blue: 'primary',
        red: 'danger',
        green: 'success',
        yellow: 'warning',
        purple: 'secondary',
    };

    const heroColor = colorMap[colorScheme] || colorScheme;

    // Map Chakra variants to HeroUI variants
    const variantMap = {
        solid: 'solid',
        outline: 'bordered',
        ghost: 'light',
        link: 'light',
    };

    const heroVariant = variantMap[variant] || 'solid';

    return (
        <HeroButton
            variant={heroVariant}
            color={heroColor}
            isLoading={isLoading}
            startContent={leftIcon}
            {...props}
        >
            {children}
        </HeroButton>
    );
};

export default Button;