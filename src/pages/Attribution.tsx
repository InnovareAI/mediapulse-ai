import { Users, GitBranch, TrendingUp, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Header from '../components/Header';
import KPICard from '../components/KPICard';
import { attributionModels, touchpointData, channelLift } from '../data/mockData';

export default function Attribution() {
  return (
    <div>
      <Header title="Attribution & ROI" subtitle="Connect spend to business outcomes across touchpoints" />

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Attributed Conversions"
          value="46.3K"
          subtitle="+18.4% vs last period"
          change="+18.4% vs last period"
          changeType="positive"
          icon={Users}
        />
        <KPICard
          title="Avg. Touchpoints"
          value="4.2"
          subtitle="per conversion path"
          icon={GitBranch}
        />
        <KPICard
          title="Incremental Lift"
          value="+22.5%"
          subtitle="Above baseline"
          change="Above baseline"
          changeType="positive"
          icon={TrendingUp}
        />
        <KPICard
          title="Customer LTV"
          value="$847"
          subtitle="+12.1% predicted growth"
          change="+12.1% predicted growth"
          changeType="positive"
          icon={DollarSign}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-1">Attribution Model Comparison</h3>
          <p className="text-slate-400 text-sm mb-4">Credit distribution across different models</p>
          <div className="flex items-center">
            <div className="w-1/2 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={attributionModels}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    dataKey="value"
                    nameKey="name"
                  >
                    {attributionModels.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                    formatter={(value: number) => [`${value}%`, '']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 space-y-3">
              {attributionModels.map((model) => (
                <div key={model.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: model.color }}></div>
                    <span className="text-slate-300 text-sm">{model.name}</span>
                  </div>
                  <span className="text-white font-medium">{model.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-1">Touchpoint Contribution</h3>
          <p className="text-slate-400 text-sm mb-4">Conversion credit by journey touchpoint</p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={touchpointData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                <XAxis type="number" stroke="#64748b" fontSize={12} />
                <YAxis type="category" dataKey="name" stroke="#64748b" fontSize={12} width={100} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="value" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-1">Channel Conversion Lift Analysis</h3>
        <p className="text-slate-400 text-sm mb-4">Incremental conversions attributable to each channel</p>
        <div className="grid grid-cols-4 gap-4">
          {channelLift.map((channel) => (
            <div key={channel.name} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">{channel.name}</h4>
              <p className="text-emerald-400 text-lg font-semibold">+{channel.incremental.toLocaleString()} incremental</p>
              <p className="text-slate-400 text-sm">+{channel.lift}% lift</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
