import { DollarSign, TrendingUp, Users, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Header from '../components/Header';
import KPICard from '../components/KPICard';
import { channelData, spendTrendData } from '../data/mockData';

const totalSpend = channelData.reduce((sum, c) => sum + c.spend, 0);
const totalConversions = channelData.reduce((sum, c) => sum + c.conversions, 0);
const avgRoi = channelData.reduce((sum, c) => sum + c.roi, 0) / channelData.length;
const avgCpa = totalSpend / totalConversions;

export default function Overview() {
  return (
    <div>
      <Header title="Channel Performance" subtitle="Detailed metrics by advertising platform" />

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Total Channel Spend"
          value={`$${(totalSpend / 1000000).toFixed(2)}M`}
          subtitle="Across 12 channels"
          icon={DollarSign}
        />
        <KPICard
          title="Average ROI"
          value={`${avgRoi.toFixed(1)}x`}
          subtitle="+5.2% vs last period"
          change="+5.2% vs last period"
          changeType="positive"
          icon={TrendingUp}
        />
        <KPICard
          title="Total Conversions"
          value={`${(totalConversions / 1000).toFixed(1)}K`}
          subtitle="+12.8% vs last period"
          change="+12.8% vs last period"
          changeType="positive"
          icon={Users}
        />
        <KPICard
          title="Average CPA"
          value={`$${avgCpa.toFixed(2)}`}
          subtitle="-8.3% vs last period"
          change="-8.3% vs last period"
          changeType="positive"
          icon={Target}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-1">Spend vs ROI Trend</h3>
          <p className="text-slate-400 text-sm mb-4">Last 30 days performance</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spendTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                <YAxis yAxisId="left" stroke="#64748b" fontSize={12} tickFormatter={(v) => `$${v / 1000}K`} />
                <YAxis yAxisId="right" orientation="right" stroke="#64748b" fontSize={12} tickFormatter={(v) => `${v}x`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Line yAxisId="left" type="monotone" dataKey="spend" stroke="#8b5cf6" strokeWidth={2} dot={false} name="Spend" />
                <Line yAxisId="right" type="monotone" dataKey="roi" stroke="#10b981" strokeWidth={2} dot={false} name="ROI" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
              <span className="text-sm text-slate-400">Spend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-sm text-slate-400">ROI</span>
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
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                    formatter={(value: number) => [`$${(value / 1000).toFixed(1)}K`, 'Spend']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 space-y-2 overflow-y-auto max-h-64">
              {channelData.map((channel) => (
                <div key={channel.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: channel.color }}></div>
                    <span className="text-slate-300">{channel.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400">{((channel.spend / totalSpend) * 100).toFixed(1)}%</span>
                    <span className="text-slate-500 ml-2">${(channel.spend / 1000).toFixed(1)}K</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-1">Channel Performance</h3>
        <p className="text-slate-400 text-sm mb-4">Real-time metrics by platform</p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-slate-400 font-medium text-sm">Channel</th>
                <th className="text-right py-3 px-4 text-slate-400 font-medium text-sm">Spend</th>
                <th className="text-right py-3 px-4 text-slate-400 font-medium text-sm">Impressions</th>
                <th className="text-right py-3 px-4 text-slate-400 font-medium text-sm">CPM</th>
                <th className="text-right py-3 px-4 text-slate-400 font-medium text-sm">CPC</th>
                <th className="text-right py-3 px-4 text-slate-400 font-medium text-sm">CTR</th>
                <th className="text-right py-3 px-4 text-slate-400 font-medium text-sm">Conv.</th>
                <th className="text-right py-3 px-4 text-slate-400 font-medium text-sm">ROI</th>
              </tr>
            </thead>
            <tbody>
              {channelData.map((channel) => (
                <tr key={channel.name} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: channel.color }}></div>
                      <span className="text-white font-medium">{channel.name}</span>
                    </div>
                  </td>
                  <td className="text-right py-3 px-4 text-slate-300">${(channel.spend / 1000).toFixed(1)}K</td>
                  <td className="text-right py-3 px-4 text-slate-300">{(channel.impressions / 1000000).toFixed(1)}M</td>
                  <td className="text-right py-3 px-4 text-slate-300">${channel.cpm.toFixed(2)}</td>
                  <td className="text-right py-3 px-4 text-slate-300">${channel.cpc.toFixed(2)}</td>
                  <td className="text-right py-3 px-4 text-slate-300">{channel.ctr.toFixed(1)}%</td>
                  <td className="text-right py-3 px-4 text-slate-300">{(channel.conversions / 1000).toFixed(1)}K</td>
                  <td className="text-right py-3 px-4">
                    <span className={`font-medium ${channel.roi >= 3 ? 'text-emerald-400' : channel.roi >= 2.5 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {channel.roi.toFixed(1)}x
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
