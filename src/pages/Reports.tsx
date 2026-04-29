import React, { useState } from 'react';
import { Header, Card } from '../components';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const resolutionTimeData = [
    { week: 'Week 1', avgTime: 2.5 },
    { week: 'Week 2', avgTime: 2.8 },
    { week: 'Week 3', avgTime: 2.1 },
    { week: 'Week 4', avgTime: 1.9 },
    { week: 'Week 5', avgTime: 2.3 },
    { week: 'Week 6', avgTime: 1.6 },
];

const teamPerformanceData = [
    { name: 'Alex K.', resolved: 15, pending: 3 },
    { name: 'Sarah Chen', resolved: 22, pending: 2 },
    { name: 'MC', resolved: 18, pending: 4 },
    { name: 'DW', resolved: 12, pending: 3 },
    { name: 'EL', resolved: 8, pending: 1 },
];

const ticketVolumeData = [
    { category: 'Bug', value: 35, fill: '#ef4444' },
    { category: 'Feature', value: 28, fill: '#3b82f6' },
    { category: 'Documentation', value: 15, fill: '#f59e0b' },
    { category: 'Performance', value: 12, fill: '#10b981' },
    { category: 'Security', value: 10, fill: '#8b5cf6' },
];

const popularIssuesData = [
    { issue: 'API Rate Limiting', count: 12 },
    { issue: 'Database Performance', count: 9 },
    { issue: 'WebSocket Memory Leak', count: 7 },
    { issue: 'Authentication Issues', count: 6 },
    { issue: 'UI Performance', count: 5 },
];

const Reports: React.FC = () => {
    const [selectedReport, setSelectedReport] = useState('all');
    const [downloading, setDownloading] = useState<string | null>(null);

    const handleDownload = (format: string) => {
        setDownloading(format);
        setTimeout(() => {
            setDownloading(null);
            alert(`Report successfully exported as ${format.toUpperCase()}!`);
        }, 1500);
    };

    return (
        <div>
            <Header title="Reports" subtitle="Analytics and insights about your support system" />

            <div className="mx-auto w-full max-w-7xl px-8 md:px-12 py-10 md:py-12 space-y-12">
                {/* Report Filters */}
                <div className="flex flex-wrap gap-2">
                    {[
                        { id: 'all', label: 'All Reports' },
                        { id: 'resolution', label: 'Resolution Time' },
                        { id: 'performance', label: 'Team Performance' },
                        { id: 'volume', label: 'Ticket Volume' },
                        { id: 'popular', label: 'Popular Issues' },
                    ].map((report) => (
                        <button
                            key={report.id}
                            onClick={() => setSelectedReport(report.id)}
                            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${selectedReport === report.id
                                ? 'bg-cyan-600 text-white shadow-md'
                                : 'bg-white text-slate-700 border border-slate-200 hover:border-cyan-300'
                                }`}
                        >
                            {report.label}
                        </button>
                    ))}
                </div>

                {/* Resolution Time Chart */}
                {selectedReport === 'all' || selectedReport === 'resolution' && (
                    <Card className="bg-white/90">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">
                            Average Resolution Time (Days)
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={resolutionTimeData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="week" stroke="#6b7280" />
                                <YAxis stroke="#6b7280" />
                                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
                                <Line
                                    type="monotone"
                                    dataKey="avgTime"
                                    stroke="#0ea5e9"
                                    strokeWidth={3}
                                    dot={{ fill: '#0ea5e9', r: 5 }}
                                    activeDot={{ r: 7 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                )}

                {/* Team Performance Chart */}
                {selectedReport === 'all' || selectedReport === 'performance' && (
                    <Card className="bg-white/90">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Team Performance</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={teamPerformanceData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="name" stroke="#6b7280" />
                                <YAxis stroke="#6b7280" />
                                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
                                <Legend />
                                <Bar dataKey="resolved" fill="#10b981" radius={[8, 8, 0, 0]} />
                                <Bar dataKey="pending" fill="#f59e0b" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                )}

                {/* Ticket Volume Pie Chart */}
                {selectedReport === 'all' || selectedReport === 'volume' && (
                    <Card className="bg-white/90">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Ticket Volume by Type</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={ticketVolumeData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, value }) => `${name}: ${value}`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {ticketVolumeData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>
                )}

                {/* Popular Issues Table */}
                {selectedReport === 'all' || selectedReport === 'popular' && (
                    <Card className="bg-white/90">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Issues This Month</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600">
                                            Rank
                                        </th>
                                        <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600">
                                            Issue
                                        </th>
                                        <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600">
                                            Reports
                                        </th>
                                        <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600">
                                            Trend
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {popularIssuesData.map((issue, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                                        >
                                            <td className="py-3 px-4 text-sm font-semibold text-gray-900">
                                                #{index + 1}
                                            </td>
                                            <td className="py-3 px-4 text-sm text-gray-900">{issue.issue}</td>
                                            <td className="py-3 px-4 text-sm font-semibold text-cyan-600">
                                                {issue.count}
                                            </td>
                                            <td className="py-3 px-4 text-sm">
                                                <span className="text-emerald-600 font-medium">↑ 12%</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                )}

                {/* Export Options */}
                <Card className="bg-gradient-to-r from-cyan-50/80 to-teal-50/80">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900">Export Reports</h3>
                            <p className="text-sm text-slate-600 mt-1">
                                Download detailed reports in CSV or PDF format
                            </p>
                        </div>
                        <div className="flex gap-3 mt-4 sm:mt-0">
                            <button
                                onClick={() => handleDownload('csv')}
                                disabled={downloading !== null}
                                className={`px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium hover:border-cyan-300 transition-colors flex items-center gap-2 ${downloading === 'csv' ? 'opacity-70' : ''}`}
                            >
                                {downloading === 'csv' ? <div className="w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" /> : '📥'} {downloading === 'csv' ? 'Exporting...' : 'CSV'}
                            </button>
                            <button
                                onClick={() => handleDownload('pdf')}
                                disabled={downloading !== null}
                                className={`px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium hover:border-cyan-300 transition-colors flex items-center gap-2 ${downloading === 'pdf' ? 'opacity-70' : ''}`}
                            >
                                {downloading === 'pdf' ? <div className="w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" /> : '📄'} {downloading === 'pdf' ? 'Exporting...' : 'PDF'}
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Reports;
