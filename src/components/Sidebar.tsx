import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  Wallet,
  GitBranch,
  Brain,
  Megaphone,
  Bell,
  Plug,
  Shield,
  MessageSquare,
  Sparkles,
  Sun,
  Moon,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Overview' },
  { path: '/channels', icon: BarChart3, label: 'Channel Performance' },
  { path: '/budget', icon: Wallet, label: 'Budget & Pacing' },
  { path: '/attribution', icon: GitBranch, label: 'Attribution' },
  { path: '/ai-analytics', icon: Brain, label: 'AI Analytics' },
  { path: '/campaigns', icon: Megaphone, label: 'Campaigns' },
  { path: '/alerts', icon: Bell, label: 'Alerts' },
  { path: '/integrations', icon: Plug, label: 'Integrations' },
  { path: '/governance', icon: Shield, label: 'Governance' },
  { path: '/assistant', icon: MessageSquare, label: 'AI Assistant' },
];

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 dark:bg-slate-900 light:bg-white border-r border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col">
      <div className="p-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white dark:text-white light:text-slate-900">MediaPulse AI</h1>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">Intelligent Media Analytics</p>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-yellow-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? 'bg-violet-600 text-white'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
        <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-lg p-4 border border-violet-500/30">
          <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-2">Get instant insights and recommendations</p>
          <button className="w-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Ask AI
          </button>
        </div>
      </div>
    </aside>
  );
}
