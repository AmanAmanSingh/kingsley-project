import React from 'react';
import { Header, Card, Button } from '../components';
import { Plus, Mail, X, CheckCircle2 } from 'lucide-react';
import type { User } from '../types';

const teamMembers: User[] = [
    {
        id: 'user1',
        name: 'Alex K.',
        email: 'alex@example.com',
        role: 'Senior Engineer',
        avatar: 'AK',
        status: 'online',
    },
    {
        id: 'user2',
        name: 'Sarah Chen',
        email: 'sarah@example.com',
        role: 'Engineering Lead',
        avatar: 'SC',
        status: 'online',
    },
    {
        id: 'user3',
        name: 'MC',
        email: 'mc@example.com',
        role: 'Full Stack Engineer',
        avatar: 'MC',
        status: 'away',
    },
    {
        id: 'user4',
        name: 'DW',
        email: 'dw@example.com',
        role: 'Security Engineer',
        avatar: 'DW',
        status: 'online',
    },
    {
        id: 'user5',
        name: 'EL',
        email: 'el@example.com',
        role: 'Product Manager',
        avatar: 'EL',
        status: 'offline',
    },
    {
        id: 'user6',
        name: 'JW',
        email: 'jw@example.com',
        role: 'DevOps Engineer',
        avatar: 'JW',
        status: 'online',
    },
];

const Teams: React.FC = () => {
    const [actionState, React_setActionState] = React.useState<{ id: string, type: 'assign' | 'edit' } | null>(null);
    const [toast, React_setToast] = React.useState<string | null>(null);
    const [showAddModal, React_setShowAddModal] = React.useState(false);
    const [isSavingUser, React_setIsSavingUser] = React.useState(false);

    const showToast = (message: string) => {
        React_setToast(message);
        setTimeout(() => React_setToast(null), 3000);
    };

    const handleAction = (id: string, type: 'assign' | 'edit') => {
        React_setActionState({ id, type });
        setTimeout(() => {
            React_setActionState(null);
            const user = teamMembers.find(m => m.id === id);
            showToast(`${type === 'assign' ? 'Assignment updated' : 'Profile updated'} for ${user?.name}.`);
        }, 800);
    };

    const handleAddMemberSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        React_setIsSavingUser(true);
        setTimeout(() => {
            React_setIsSavingUser(false);
            React_setShowAddModal(false);
            showToast('Invitation successfully sent to new team member!');
        }, 1200);
    };

    return (
        <div className="relative">
            {/* Global Toast */}
            {toast && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none fade-in duration-300">
                    <div className="bg-slate-900 border border-slate-800 text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl">
                        <CheckCircle2 size={18} className="text-emerald-400" />
                        <span className="text-sm font-medium">{toast}</span>
                    </div>
                </div>
            )}

            {/* Add Member Modal */}
            {showAddModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-md bg-white shadow-2xl overflow-hidden pointer-events-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold tracking-tight text-slate-900">Add Team Member</h3>
                            <button onClick={() => React_setShowAddModal(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleAddMemberSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                                <input type="email" required placeholder="colleague@example.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition-all text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Role</label>
                                <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition-all text-sm bg-white">
                                    <option>Support Agent</option>
                                    <option>Engineering Lead</option>
                                    <option>Product Manager</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                            <div className="pt-4 border-t border-slate-100 flex gap-3 justify-end items-center">
                                <button type="button" onClick={() => React_setShowAddModal(false)} className="px-5 py-2.5 rounded-xl font-medium text-sm text-slate-600 hover:bg-slate-100 transition-colors">
                                    Cancel
                                </button>
                                <button type="submit" disabled={isSavingUser} className={`px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-cyan-600 hover:bg-cyan-700 transition-colors flex items-center gap-2 ${isSavingUser ? 'opacity-70 pointer-events-none' : ''}`}>
                                    {isSavingUser && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                                    {isSavingUser ? "Sending Invite..." : "Send Invite"}
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>
            )}

            <Header title="Teams" subtitle="Manage team members and assignments" />

            <div className="mx-auto w-full max-w-7xl px-8 md:px-12 py-10 md:py-12 space-y-12">
                {/* Add Member Button */}
                <div className="flex justify-end">
                    <Button
                        label="Add Team Member"
                        variant="primary"
                        icon={<Plus size={18} />}
                        onClick={() => React_setShowAddModal(true)}
                    />
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member) => (
                        <Card key={member.id} hover className="bg-white/90">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3 flex-1">
                                    <div className="relative">
                                        <div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-sm ${member.id === 'user2'
                                                ? 'bg-gradient-to-br from-cyan-400 to-teal-500'
                                                : 'bg-gradient-to-br from-slate-400 to-slate-600'
                                                }`}
                                        >
                                            {member.avatar}
                                        </div>
                                        <div
                                            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${member.status === 'online'
                                                ? 'bg-green-500'
                                                : member.status === 'away'
                                                    ? 'bg-yellow-500'
                                                    : 'bg-gray-500'
                                                }`}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">{member.name}</h3>
                                        <p className="text-xs text-gray-500 capitalize">{member.status}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">Role</p>
                                    <p className="text-sm text-slate-900">{member.role}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">Email</p>
                                    <p className="text-sm text-cyan-700 font-mono flex items-center gap-2">
                                        <Mail size={14} />
                                        {member.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-4 border-t border-slate-100 pt-4">
                                <Button
                                    label={actionState?.id === member.id && actionState.type === 'assign' ? 'Assigning...' : 'Assign'}
                                    size="sm"
                                    variant="primary"
                                    className="flex-1"
                                    onClick={() => handleAction(member.id, 'assign')}
                                    loading={actionState?.id === member.id && actionState.type === 'assign'}
                                />
                                <Button
                                    label={actionState?.id === member.id && actionState.type === 'edit' ? 'Saving...' : 'Edit'}
                                    size="sm"
                                    variant="secondary"
                                    className="flex-1"
                                    onClick={() => handleAction(member.id, 'edit')}
                                    loading={actionState?.id === member.id && actionState.type === 'edit'}
                                />
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Team Stats */}
                <Card className="bg-white/90">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Team Statistics</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="text-3xl font-semibold text-cyan-600">{teamMembers.length}</div>
                            <p className="text-sm text-slate-600 mt-1">Total Members</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-semibold text-emerald-600">
                                {teamMembers.filter((m) => m.status === 'online').length}
                            </div>
                            <p className="text-sm text-slate-600 mt-1">Online</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-semibold text-amber-600">
                                {teamMembers.filter((m) => m.status === 'away').length}
                            </div>
                            <p className="text-sm text-slate-600 mt-1">Away</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-semibold text-slate-500">
                                {teamMembers.filter((m) => m.status === 'offline').length}
                            </div>
                            <p className="text-sm text-slate-600 mt-1">Offline</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Teams;
