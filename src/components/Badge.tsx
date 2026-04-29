import React from 'react';

interface BadgeProps {
    label: string;
    variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    label,
    variant = 'default',
    className = ''
}) => {
    const variants = {
        default: 'bg-slate-100 text-slate-700 ring-1 ring-slate-200',
        success: 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200',
        warning: 'bg-amber-100 text-amber-800 ring-1 ring-amber-200',
        danger: 'bg-rose-100 text-rose-800 ring-1 ring-rose-200',
        info: 'bg-sky-100 text-sky-800 ring-1 ring-sky-200',
    };

    return (
        <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
        >
            {label}
        </span>
    );
};

export default Badge;
