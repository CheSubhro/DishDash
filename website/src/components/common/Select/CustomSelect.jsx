import React from 'react';
import { Select } from '@heroui/react';

const CustomSelect = ({
    label,
    value,
    onValueChange,
    options = [],
    placeholder = 'Select option',
    flex,
}) => {
    const formattedOptions = options.map((opt) => ({
        key: opt.value !== undefined ? String(opt.value) : String(opt),
        label: opt.label !== undefined ? opt.label : String(opt),
    }));

    return (
        <div className={flex ? `flex-[${flex}]` : 'flex-1'}>
            <Select
                label={label}
                placeholder={placeholder}
                value={value ? String(value) : ''}
                onChange={(event) => {
                    onValueChange?.(event.target.value);
                }}
                variant="secondary"
                size="sm"
                className="max-w-full"
            >
                {formattedOptions.map((item) => (
                    <Select.Item
                        key={item.key}
                        id={item.key}
                    >
                        {item.label}
                    </Select.Item>
                ))}
            </Select>
        </div>
    );
};

export default CustomSelect;