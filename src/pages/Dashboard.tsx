import React from 'react';
import { Header, StatCard, Card, TicketCard } from '../components';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';
import type { Ticket } from '../types';

const mockTickets: Ticket[] = [
    {
        id: 'ALLOC-1022',
        title: 'Implement dark mode toggle in settings',
        description: 'Users have requested a dark mode option. We need to implement a theme toggle in the settings page.',
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
        description: 'Our nightly batch processing jobs are exhausting the database connection pool, causing failures.',
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
        description: 'Multiple users reporting intermittent 429 errors when accessing the API. Need to investigate rate limits.',
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
        description: 'Profiling shows a memory leak in the WebSocket handler that grows over time.',
        status: 'Backlog',
        priority: 'High',
        type: ['Bug', 'Performance'],
        created_date: '2026-04-20',
        updated_date: '2026-04-26',
        reporter: { id: 'user2', name: 'Sarah Chen', email: 'sarah@example.com', role: 'Lead' },
    },
];

const chartData = [
    { day: 'Mon', tickets: 12, resolved: 8 },
    { day: 'Tue', tickets: 19, resolved: 12 },
    { day: 'Wed', tickets: 15, resolved: 11 },
    { day: 'Thu', tickets: 25, resolved: 18 },
    { day: 'Fri', tickets: 22, resolved: 16 },
    { day: 'Sat', tickets: 8, resolved: 6 },
    { day: 'Sun', tickets: 5, resolved: 4 },
];

const Dashboard: React.FC = () => {
    return (
        <div>
            <Header
                title="Dashboard"
                subtitle="Overview of support tickets and team performance"
            />

            <div className="mx-auto w-full max-w-7xl px-8 md:px-12 py-10 md:py-12 space-y-12">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <StatCard
                        title="Total Tickets"
                        value="10"
                        change={-12}
                        icon={<AlertCircle className="text-cyan-500" size={24} />}
                        color="cyan"
                        subtitle="Across all statuses"
                    />
                    <StatCard
                        title="Open Tickets"
                        value="8"
                        change={-5}
                        icon={<Clock className="text-orange-500" size={24} />}
                        color="orange"
                        subtitle="Requiring attention"
                    />
                    <StatCard
                        title="SLA at Risk"
                        value="0"
                        icon={<AlertCircle className="text-red-500" size={24} />}
                        color="red"
                        subtitle="Deadline within 2 hours"
                    />
                    <StatCard
                        title="Resolved This Week"
                        value="2"
                        change={23}
                        icon={<CheckCircle className="text-green-500" size={24} />}
                        color="green"
                        subtitle="Tickets closed"
                    />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Line Chart */}
                    <Card className="bg-white/90">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-slate-900">Weekly Trend</h3>
                            <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                7 days
                            </span>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="day" stroke="#6b7280" />
                                <YAxis stroke="#6b7280" />
                                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="tickets"
                                    stroke="#0ea5e9"
                                    strokeWidth={2}
                                    dot={{ fill: '#0ea5e9', r: 4 }}
                                    activeDot={{ r: 6 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="resolved"
                                    stroke="#14b8a6"
                                    strokeWidth={2}
                                    dot={{ fill: '#14b8a6', r: 4 }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>

                    {/* Bar Chart */}
                    <Card className="bg-white/90">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-slate-900">Daily Volume</h3>
                            <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                This week
                            </span>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="day" stroke="#6b7280" />
                                <YAxis stroke="#6b7280" />
                                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
                                <Legend />
                                <Bar dataKey="tickets" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
                                <Bar dataKey="resolved" fill="#14b8a6" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </div>

                {/* Recent Tickets */}
                <Card className="bg-white/90">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-slate-900">Recent Tickets</h3>
                        <a href="#" className="text-cyan-600 text-sm font-medium hover:underline">
                            View all →
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {mockTickets.slice(0, 3).map((ticket) => (
                            <TicketCard key={ticket.id} ticket={ticket} />
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
