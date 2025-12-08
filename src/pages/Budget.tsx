import { DollarSign, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Header from '../components/Header';
import KPICard from '../components/KPICard';
import { campaigns, forecastData, channelData } from '../data/mockData';

const totalBudget = campaigns.reduce((sum, c) => sum + c.budget, 0);
const totalSpent = campaigns.reduce((sum, c) => sum + c.spent, 0);
const onTrack = campaigns.filter(c => c.status === 'on track').length;
const needsAttention = campaigns.filter(c => c.status !== 'on track').length;

export default function Budget() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on track': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'over pacing': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'under pacing': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div>
      <Header title="Budget & Pacing" subtitle="Track spending against planned budgets with predictive control" />

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Total Budget"
          value={`$${(totalBudget / 1000000).toFixed(2)}M`}
          subtitle="Across 5 campaigns"
          icon={DollarSign}
        />
        <KPICard
          title="Total Spent"
          value={`$${(totalSpent / 1000).toFixed(1)}K`}
          subtitle={`${((totalSpent / totalBudget) * 100).toFixed(1)}% utilized`}
          icon={TrendingUp}
        />
        <KPICard
          title="On Track"
          value={onTrack.toString()}
          subtitle="campaigns performing well"
          icon={CheckCircle}
        />
        <KPICard
          title="Needs Attention"
          value={needsAttention.toString()}
          subtitle="2 over, 1 under pacing"
          icon={AlertTriangle}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-1">Spend Forecast</h3>
          <p className="text-slate-400 text-sm mb-4">Actual vs AI-predicted spend</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} tickFormatter={(v) => `$${v / 1000000}M`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                  formatter={(value: number) => [`$${(value / 1000).toFixed(0)}K`, '']}
                />
                <Line type="monotone" dataKey="actual" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} name="Actual" />
                <Line type="monotone" dataKey="forecast" stroke="#64748b" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#64748b' }} name="Forecast" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
              <span className="text-sm text-slate-400">Actual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-slate-500"></div>
              <span className="text-sm text-slate-400">Forecast</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-1">Budget Allocation</h3>
          <p className="text-slate-400 text-sm mb-4">Spend distribution by channel</p>
          <div className="flex">
            <div className="w-1/2 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="spend"
                    nameKey="name"
                  >
                    {channelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 space-y-2 overflow-y-auto max-h-64">
              {channelData.map((channel) => {
                const total = channelData.reduce((sum, c) => sum + c.spend, 0);
                return (
                  <div key={channel.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: channel.color }}></div>
                      <span className="text-slate-300">{channel.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400">{((channel.spend / total) * 100).toFixed(1)}%</span>
                      <span className="text-slate-500 ml-2">${(channel.spend / 1000).toFixed(1)}K</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">Campaign Budget Details</h3>
        <div className="space-y-3">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="flex items-center justify-between bg-slate-700/30 rounded-lg p-4">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-white font-medium">{campaign.name}</p>
                  <p className="text-slate-400 text-sm">{campaign.client}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(campaign.status)}`}>
                  {campaign.status}
                </span>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-48">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">${(campaign.spent / 1000).toFixed(1)}K / ${(campaign.budget / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        campaign.status === 'on track' ? 'bg-emerald-500' :
                        campaign.status === 'over pacing' ? 'bg-red-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${Math.min((campaign.spent / campaign.budget) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-slate-400 text-sm">{campaign.pacing}% pacing</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Budget & Pacing</h3>
        <p className="text-slate-400 text-sm mb-4">Active campaign tracking</p>
        <div className="grid grid-cols-2 gap-4">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-slate-700/30 border border-slate-600 rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-white font-semibold">{campaign.name}</h4>
                  <p className="text-slate-400 text-sm">{campaign.client}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(campaign.status)}`}>
                  {campaign.status === 'on track' ? 'On Track' : campaign.status === 'over pacing' ? 'Over Pacing' : 'Under Pacing'}
                </span>
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">${(campaign.spent / 1000).toFixed(1)}K / ${(campaign.budget / 1000).toFixed(1)}K</span>
                  <span className="text-slate-400">{((campaign.spent / campaign.budget) * 100).toFixed(0)}%</span>
                </div>
                <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      campaign.status === 'on track' ? 'bg-emerald-500' :
                      campaign.status === 'over pacing' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${Math.min((campaign.spent / campaign.budget) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-500">Pacing</p>
                  <p className="text-white font-medium">{campaign.pacing}%</p>
                </div>
                <div>
                  <p className="text-slate-500">ROI</p>
                  <p className="text-white font-medium">{campaign.roi}x</p>
                </div>
                <div>
                  <p className="text-slate-500">Ends</p>
                  <p className="text-white font-medium">{campaign.endDate.split('-').slice(1).join('/')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
