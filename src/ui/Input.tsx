import React, { FC } from 'react';

const Input: FC<{
    type?: string;
    name?: string;
    value?: any;
    defaultValue?:any;
    onChange?: (text: any) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    autocomplete?: any;
}> = ({ type, name, value, onChange, placeholder,defaultValue, className, disabled, autocomplete }) => {
    return (
        <input
            type={type}
            value={value}
            defaultValue={defaultValue}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            className={`bg-gray-100 outline-none pl-3 py-2 rounded-lg text-gray-900 ${className}`}
            autoComplete={autocomplete}
        />
    );
};

export default Input;
