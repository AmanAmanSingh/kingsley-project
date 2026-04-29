import React, { useState } from 'react';
import { Header, Card, TicketCard, Button } from '../components';
import { Search, Plus } from 'lucide-react';
import type { Ticket, TicketStatus } from '../types';

const mockTickets: Ticket[] = [
    {
        id: 'ALLOC-1022',
        title: 'Implement dark mode toggle in settings',
        description: 'Users have requested a dark mode option.',
        status: 'Backlog',
        priority: 'Medium',
        type: ['Feature', 'UX/UI'],
        created_date: '2026-04-27',
        updated_date: '2026-04-28',
        assignee: { id: 'user1', name: 'Alex K.', email: 'alex@example.com', role: 'Engineer' },
        reporter: { id: 'user2', name: 'Sarah Chen', email: 'sarah@example.com', role: 'Lead' },
    },
    {
        id: 'ALLOC-1023',
        title: 'Database connection pool exhaustion during batch processing',
        description: 'Connection pool issues causing batch job failures.',
        status: 'Triaged',
        priority: 'High',
        type: ['Bug', 'Database'],
        created_date: '2026-04-25',
        updated_date: '2026-04-28',
        reporter: { id: 'user2', name: 'Sarah Chen', email: 'sarah@example.com', role: 'Lead' },
    },
    {
        id: 'ALLOC-1024',
        title: 'API rate limiting causing 429 errors in production',
        description: 'Multiple users reporting intermittent 429 errors.',
        status: 'In Progress',
        priority: 'Critical',
        type: ['Bug', 'API'],
        created_date: '2026-04-22',
        updated_date: '2026-04-28',
        assignee: { id: 'user3', name: 'MC', email: 'mc@example.com', role: 'Engineer' },
        reporter: { id: 'user2', name: 'Sarah Chen', email: 'sarah@example.com', role: 'Lead' },
    },
    {
        id: 'ALLOC-1020',
        title: 'Memory leak in WebSocket connection handler',
        description: 'Profiling shows a memory leak that grows over time.',
        status: 'Backlog',
        priority: 'High',
        type: ['Bug', 'Performance'],
        created_date: '2026-04-20',
        updated_date: '2026-04-26',
        reporter: { id: 'user2', name: 'Sarah Chen', email: 'sarah@example.com', role: 'Lead' },
    },
    {
        id: 'ALLOC-1019',
        title: 'Add two-factor authentication support',
        description: 'Implement 2FA using TOTP (Time-based One-Time Password).',
        status: 'In Progress',
        priority: 'High',
        type: ['Feature', 'Security'],
        created_date: '2026-04-18',
        updated_date: '2026-04-27',
        assignee: { id: 'user4', name: 'DW', email: 'dw@example.com', role: 'Engineer' },
        reporter: { id: 'user2', name: 'Sarah Chen', email: 'sarah@example.com', role: 'Lead' },
    },
    {
        id: 'ALLOC-1018',
        title: 'Update API documentation for new v2 endpoints',
        description: 'The API documentation needs to reflect the new v2 endpoints.',
        status: 'Backlog',
        priority: 'Medium',
        type: ['Documentation', 'API'],
        created_date: '2026-04-15',
        updated_date: '2026-04-25',
        reporter: { id: 'user2', name: 'Sarah Chen', email: 'sarah@example.com', role: 'Lead' },
    },
    {
        id: 'ALLOC-1017',
        title: 'Optimize dashboard loading performance',
        description: 'The main dashboard takes 3-4 seconds to load.',
        status: 'Backlog',
        priority: 'Medium',
        type: ['Performance', 'UX/UI'],
        created_date: '2026-04-12',
        updated_date: '2026-04-24',
        reporter: { id: 'user2', name: 'Sarah Chen', email: 'sarah@example.com', role: 'Lead' },
    },
    {
        id: 'ALLOC-1015',
        title: 'Query complexity limits for GraphQL',
        description: 'Implement query complexity analysis to prevent DoS.',
        status: 'Backlog',
        priority: 'Medium',
        type: ['Feature', 'Security'],
        created_date: '2026-04-10',
        updated_date: '2026-04-22',
        reporter: { id: 'user2', name: 'Sarah Chen', email: 'sarah@example.com', role: 'Lead' },
    },
];

const statuses: TicketStatus[] = ['Backlog', 'Triaged', 'In Progress', 'Waiting on Info', 'Resolved'];

const Tickets: React.FC = () => {
    const [selectedStatus, setSelectedStatus] = useState<TicketStatus | 'All'>('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [isCreating, setIsCreating] = useState(false);

    const handleCreateTicket = () => {
        setIsCreating(true);
        setTimeout(() => {
            setIsCreating(false);
            alert('New ticket created successfully!');
        }, 1000);
    };

    const filteredTickets = mockTickets.filter((ticket) => {
        const matchesStatus = selectedStatus === 'All' || ticket.status === selectedStatus;
        const matchesSearch =
            ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    return (
        <div>
            <Header title="Tickets" subtitle="Manage and track all support tickets" />

            <div className="mx-auto w-full max-w-7xl px-8 md:px-12 py-10 md:py-12 space-y-12">
                {/* Controls */}
                <Card className="bg-white/90">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {/* Search */}
                        <div className="flex-1 flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-2.5 border border-slate-200 shadow-sm">
                            <Search size={18} className="text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search tickets, tags, or IDs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-transparent flex-1 text-sm focus:outline-none placeholder:text-slate-400"
                            />
                        </div>

                        {/* Add Button */}
                        <Button
                            label={isCreating ? "Creating..." : "New Ticket"}
                            variant="primary"
                            icon={<Plus size={18} />}
                            onClick={handleCreateTicket}
                            loading={isCreating}
                        />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <button
                            onClick={() => setSelectedStatus('All')}
                            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${selectedStatus === 'All'
                                ? 'bg-cyan-600 text-white shadow-md'
                                : 'bg-white text-slate-700 border border-slate-200 hover:border-cyan-300'
                                }`}
                        >
                            All
                        </button>
                        {statuses.map((status) => (
                            <button
                                key={status}
                                onClick={() => setSelectedStatus(status)}
                                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${selectedStatus === status
                                    ? 'bg-cyan-600 text-white shadow-md'
                                    : 'bg-white text-slate-700 border border-slate-200 hover:border-cyan-300'
                                    }`}
                            >
                                {status} {filteredTickets.filter((t) => t.status === status).length > 0 && (
                                    <span className="ml-2">
                                        ({filteredTickets.filter((t) => t.status === status).length})
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </Card>

                {/* Tickets Grid */}
                {filteredTickets.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
                        {filteredTickets.map((ticket) => (
                            <TicketCard
                                key={ticket.id}
                                ticket={ticket}
                                onClick={() => alert(`Opening ticket details for ${ticket.id}: ${ticket.title}`)}
                            />
                        ))}
                    </div>
                ) : (
                    <Card className="text-center py-12">
                        <div className="text-6xl mb-4">📭</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No tickets found</h3>
                        <p className="text-gray-500">Try adjusting your filters or search terms</p>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default Tickets;
