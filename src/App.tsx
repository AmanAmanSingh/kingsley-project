import { useState } from 'react';
import { Sidebar } from './components';
import { Dashboard, Tickets, Teams, Reports } from './pages';
import './App.css';

function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderPage = () => {
    switch (activeMenu) {
      case 'dashboard':
        return <Dashboard />;
      case 'tickets':
        return <Tickets />;
      case 'teams':
        return <Teams />;
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-transparent text-slate-900">
      {/* Sidebar */}
      <Sidebar
        activeMenu={activeMenu}
        onMenuChange={setActiveMenu}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col overflow-y-auto">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;

