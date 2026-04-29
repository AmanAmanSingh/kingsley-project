import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    onClick,
    hover = false
}) => {
    return (
        <div
            onClick={onClick}
            className={`bg-white/90 backdrop-blur rounded-2xl border border-slate-200/70 shadow-sm p-7 md:p-8 transition-all duration-200 ${hover ? 'hover:shadow-lg hover:border-cyan-300/60 hover:-translate-y-0.5 cursor-pointer' : ''
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
