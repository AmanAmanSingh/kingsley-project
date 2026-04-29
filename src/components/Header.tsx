import React from 'react';
import { Bell, Search } from 'lucide-react';

interface HeaderProps {
    title: string;
    subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    const [isSearching, setIsSearching] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchValue.trim()) {
            setIsSearching(true);
            setTimeout(() => {
                setIsSearching(false);
                alert(`Search results for "${searchValue}" not found.`);
            }, 800);
        }
    };

    return (
        <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/75 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 md:py-6">
                <div className="flex-1 md:ml-0 ml-12">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                        {title}
                    </h2>
                    {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                    {/* Search Bar - Hidden on Mobile */}
                    <div className={`hidden md:flex items-center bg-white rounded-full px-4 py-2 border ${isSearching ? 'border-cyan-400 ring-2 ring-cyan-100' : 'border-slate-200'} shadow-sm transition-all`}>
                        {isSearching ? (
                            <div className="w-[18px] h-[18px] border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <Search size={18} className="text-slate-400" />
                        )}
                        <input
                            type="text"
                            placeholder="Search (press Enter)..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyDown={handleSearch}
                            disabled={isSearching}
                            className="bg-transparent ml-2 text-sm focus:outline-none placeholder:text-slate-400"
                        />
                    </div>

                    {/* Notification Bell */}
                    <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors relative">
                        <Bell size={20} className="text-slate-600" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
                    </button>

                    {/* User Profile */}
                    <button className="p-1.5 hover:bg-slate-100 rounded-xl transition-colors">
                        <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-semibold ring-2 ring-white">
                            SC
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
