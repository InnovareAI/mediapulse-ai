import { Megaphone, TrendingUp, Users, Clock, Plus } from 'lucide-react';
import Header from '../components/Header';
import KPICard from '../components/KPICard';
import { campaigns } from '../data/mockData';

export default function Campaigns() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on track': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'over pacing': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'under pacing': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const avgRoi = campaigns.reduce((sum, c) => sum + c.roi, 0) / campaigns.length;
  const endingSoon = campaigns.filter(c => {
    const endDate = new Date(c.endDate);
    const now = new Date();
    const diff = endDate.getTime() - now.getTime();
    return diff > 0 && diff < 7 * 24 * 60 * 60 * 1000;
  }).length;

  return (
    <div>
      <Header title="Campaigns" subtitle="Manage and monitor all advertising campaigns" />

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Total Campaigns"
          value={campaigns.length.toString()}
          subtitle={`${campaigns.length} active`}
          icon={Megaphone}
        />
        <KPICard
          title="Avg. ROI"
          value={`${avgRoi.toFixed(1)}x`}
          subtitle="+8.2% vs target"
          change="+8.2% vs target"
          changeType="positive"
          icon={TrendingUp}
        />
        <KPICard
          title="Clients"
          value={new Set(campaigns.map(c => c.client)).size.toString()}
          subtitle="active clients"
          icon={Users}
        />
        <KPICard
          title="Ending Soon"
          value={endingSoon.toString()}
          subtitle="within 7 days"
          icon={Clock}
        />
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium">All</button>
            <button className="text-slate-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Active</button>
            <button className="text-slate-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Paused</button>
            <button className="text-slate-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Completed</button>
          </div>
          <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <Plus className="w-4 h-4" />
            New Campaign
          </button>
        </div>

        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-slate-700/30 border border-slate-600 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{campaign.name}</h3>
                  <p className="text-slate-400 text-sm">{campaign.client}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(campaign.status)}`}>
                  {campaign.status}
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Budget Utilization</span>
                  <span className="text-white font-medium">{((campaign.spent / campaign.budget) * 100).toFixed(0)}%</span>
                </div>
                <div className="h-2 bg-slate-600 rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full rounded-full transition-all ${
                      campaign.status === 'on track' ? 'bg-emerald-500' :
                      campaign.status === 'over pacing' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${Math.min((campaign.spent / campaign.budget) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">${(campaign.spent / 1000).toFixed(1)}K spent</span>
                  <span className="text-slate-500">${(campaign.budget / 1000).toFixed(1)}K budget</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 text-sm">
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-slate-500 mb-1">ROI</p>
                  <p className="text-white font-semibold text-lg">{campaign.roi}x</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-slate-500 mb-1">Pacing</p>
                  <p className="text-white font-semibold text-lg">{campaign.pacing}%</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-slate-500 mb-1">End Date</p>
                  <p className="text-white font-semibold text-lg">{campaign.endDate.split('-').slice(1).join('/')}</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 flex items-center justify-center">
                  <button className="text-violet-400 hover:text-violet-300 font-medium transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
