import React from 'react';
import { Menu, X, LogOut, Settings } from 'lucide-react';

interface SidebarProps {
    activeMenu: string;
    onMenuChange: (menu: string) => void;
    isOpen?: boolean;
    onToggle?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
    activeMenu,
    onMenuChange,
    isOpen = true,
    onToggle
}) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊' },
        { id: 'tickets', label: 'Tickets', icon: '🎫' },
        { id: 'teams', label: 'Teams', icon: '👥' },
        { id: 'reports', label: 'Reports', icon: '📈' },
    ];

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={onToggle}
                className="md:hidden fixed top-4 left-4 z-50 p-2.5 bg-slate-900 text-white rounded-xl shadow-lg"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Sidebar */}
            <div
                className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 fixed md:relative w-72 h-screen bg-white text-slate-900 transition-transform duration-300 z-40 shadow-2xl flex flex-col border-r border-slate-200`}
            >
                {/* Logo */}
                <div className="p-6 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">A</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold tracking-tight text-slate-900">Allocations</h1>
                            <p className="text-xs text-slate-600">Support Operations</p>
                        </div>
                    </div>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 px-4 py-5 space-y-5">
                    <div>
                        <p className="px-4 text-xs uppercase tracking-[0.2em] text-slate-700 font-semibold">Workspace</p>
                        <div className="mt-3 space-y-2">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        onMenuChange(item.id);
                                        if (onToggle && window.innerWidth < 768) {
                                            onToggle();
                                        }
                                    }}
                                    className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-200 flex items-center gap-3 ${activeMenu === item.id
                                        ? 'bg-cyan-600 text-white font-semibold shadow-lg'
                                        : 'text-slate-900 hover:bg-slate-200'
                                        }`}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-cyan-300 bg-cyan-50 p-4">
                        <p className="text-xs text-slate-700 font-semibold">Active Queue</p>
                        <p className="mt-2 text-2xl font-bold text-slate-900">18</p>
                        <p className="text-xs text-emerald-600 font-medium">+4 new today</p>
                    </div>
                </nav>

                {/* Footer */}
                <div className="border-t border-slate-200 p-4 space-y-2">
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-800 hover:bg-slate-200 transition-colors">
                        <Settings size={18} />
                        <span className="text-sm font-medium">Settings</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-800 hover:bg-rose-100 transition-colors">
                        <LogOut size={18} />
                        <span className="text-sm font-medium">Logout</span>
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={onToggle}
                />
            )}
        </>
    );
};

export default Sidebar;
