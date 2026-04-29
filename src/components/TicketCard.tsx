import React from 'react';
import { Card } from './Card';
import { Badge } from './Badge';
import type { Ticket } from '../types';
import { Calendar } from 'lucide-react';

interface TicketCardProps {
    ticket: Ticket;
    onClick?: () => void;
}

export const TicketCard: React.FC<TicketCardProps> = ({ ticket, onClick }) => {
    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'Critical':
                return 'danger';
            case 'High':
                return 'warning';
            case 'Medium':
                return 'info';
            case 'Low':
                return 'success';
            default:
                return 'default';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Resolved':
                return 'success';
            case 'In Progress':
                return 'info';
            case 'Triaged':
                return 'warning';
            case 'Waiting on Info':
                return 'warning';
            case 'Backlog':
                return 'default';
            default:
                return 'default';
        }
    };

    return (
        <Card hover onClick={onClick} className="group">
            <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <p className="text-xs text-slate-500 font-medium tracking-wide">{ticket.id}</p>
                        <h4 className="text-base md:text-lg font-semibold text-slate-900 mt-1 group-hover:text-cyan-600 transition-colors line-clamp-2">
                            {ticket.title}
                        </h4>
                    </div>
                </div>

                <p className="text-sm text-slate-600 mb-5 leading-relaxed line-clamp-2">{ticket.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                    <Badge label={ticket.priority} variant={getPriorityColor(ticket.priority)} />
                    <Badge label={ticket.status} variant={getStatusColor(ticket.status)} />
                    {ticket.type.map((t) => (
                        <Badge key={t} label={t} variant="default" className="text-xs" />
                    ))}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4 mt-auto">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(ticket.created_date).toLocaleDateString()}
                    </div>
                    {ticket.assignee && (
                        <div className="flex items-center gap-1">
                            <div className="w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xs font-semibold shadow-sm">
                                {ticket.assignee.name.charAt(0)}
                            </div>
                            <span className="hidden sm:inline">{ticket.assignee.name}</span>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default TicketCard;
