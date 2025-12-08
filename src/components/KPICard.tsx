import type { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  subtitle: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: LucideIcon;
}

export default function KPICard({ title, value, subtitle, change, changeType = 'neutral', icon: Icon }: KPICardProps) {
  const changeColors = {
    positive: 'text-emerald-400',
    negative: 'text-red-400',
    neutral: 'text-slate-400',
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-white mt-1">{value}</p>
          <p className="text-slate-500 text-sm mt-1">{subtitle}</p>
          {change && (
            <p className={`text-sm mt-2 ${changeColors[changeType]}`}>{change}</p>
          )}
        </div>
        {Icon && (
          <div className="w-10 h-10 bg-violet-600/20 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-violet-400" />
          </div>
        )}
      </div>
    </div>
  );
}
