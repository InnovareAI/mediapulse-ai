import { Calendar, Filter, Download } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-slate-400 text-sm mt-1">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
          <Download className="w-4 h-4" />
          Export Report
        </button>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span>Filters:</span>
          <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-3 py-2 rounded-lg transition-colors">
            <Calendar className="w-4 h-4" />
            Nov 8 - Dec 8, 2025
          </button>
          <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-3 py-2 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            Clients
          </button>
          <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-3 py-2 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            Campaigns
          </button>
          <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-3 py-2 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            Channels
          </button>
        </div>
      </div>
    </div>
  );
}
