import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
    loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    icon,
    loading = false,
}) => {
    const baseStyles = 'rounded-xl font-medium transition-all duration-200 inline-flex items-center gap-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40';

    const variants = {
        primary: 'bg-cyan-600 hover:bg-cyan-700 text-white',
        secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-900',
        success: 'bg-emerald-500 hover:bg-emerald-600 text-white',
        danger: 'bg-rose-500 hover:bg-rose-600 text-white',
        ghost: 'bg-transparent hover:bg-slate-100 text-slate-900',
    };

    const sizes = {
        sm: 'px-3.5 py-2 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                } ${className}`}
        >
            {loading ? (
                <div className="animate-spin">⏳</div>
            ) : (
                icon && icon
            )}
            {label}
        </button>
    );
};

export default Button;
