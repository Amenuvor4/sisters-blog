import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) {
    const baseStyles = 'font-medium rounded-full transition-colors focus: outline-none focus:ring-2 focus:rind-offset-2';

    const variants = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-2 text-base',
        lg: 'px-8 py-3 text-lg'
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} `

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>

    );
}