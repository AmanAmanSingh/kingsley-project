import React from 'react';
import Card from './Card';

interface StatCardProps {
    title: string;
    value: string | number;
    change?: number;
    icon?: React.ReactNode;
    color?: 'cyan' | 'green' | 'red' | 'orange';
    subtitle?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    change,
    icon,
    color = 'cyan',
    subtitle,
}) => {
    const colorClasses = {
        cyan: 'text-cyan-600 bg-cyan-50 ring-1 ring-cyan-200/60',
        green: 'text-emerald-600 bg-emerald-50 ring-1 ring-emerald-200/60',
        red: 'text-rose-600 bg-rose-50 ring-1 ring-rose-200/60',
        orange: 'text-amber-600 bg-amber-50 ring-1 ring-amber-200/60',
    };

    return (
        <Card className="relative overflow-hidden group">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <p className="text-sm text-slate-500 font-medium">{title}</p>
                    <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-2 tracking-tight">
                        {value}
                    </h3>
                    {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
                </div>
                {icon && (
                    <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
                        {icon}
                    </div>
                )}
            </div>

            {change && (
                <div className="mt-4 flex items-center gap-2">
                    <span className={`text-sm font-semibold ${change > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {change > 0 ? '+' : ''}{change}%
                    </span>
                    <span className="text-xs text-slate-500">vs last week</span>
                </div>
            )}

            {/* Background decoration */}
            <div
                className={`absolute -right-8 -bottom-8 w-24 h-24 rounded-full opacity-10 transition-transform group-hover:scale-110 ${colorClasses[color]}`}
            />
        </Card>
    );
};

export default StatCard;
