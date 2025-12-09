import { Mail, MousePointer, Eye, UserMinus, Send, TrendingUp, DollarSign, Users } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import Header from '../components/Header';
import KPICard from '../components/KPICard';
import { useTheme } from '../context/ThemeContext';

const emailTrendData = [
  { date: 'Nov 9', sent: 45000, opened: 18900, clicked: 3150 },
  { date: 'Nov 11', sent: 52000, opened: 22360, clicked: 3900 },
  { date: 'Nov 13', sent: 38000, opened: 16340, clicked: 2660 },
  { date: 'Nov 15', sent: 61000, opened: 27450, clicked: 4880 },
  { date: 'Nov 17', sent: 48000, opened: 20160, clicked: 3360 },
  { date: 'Nov 19', sent: 55000, opened: 24200, clicked: 4125 },
  { date: 'Nov 21', sent: 72000, opened: 33120, clicked: 5760 },
  { date: 'Nov 23', sent: 68000, opened: 29920, clicked: 5100 },
  { date: 'Nov 25', sent: 42000, opened: 17640, clicked: 2940 },
  { date: 'Nov 27', sent: 35000, opened: 14350, clicked: 2275 },
  { date: 'Nov 29', sent: 89000, opened: 41030, clicked: 7120 },
  { date: 'Dec 1', sent: 95000, opened: 45600, clicked: 8075 },
  { date: 'Dec 3', sent: 78000, opened: 35100, clicked: 5850 },
  { date: 'Dec 5', sent: 82000, opened: 38540, clicked: 6560 },
  { date: 'Dec 7', sent: 71000, opened: 31950, clicked: 5325 },
];

const campaignPerformance = [
  { name: 'Welcome Series', sent: 125000, openRate: 52.3, clickRate: 12.8, revenue: 45200, status: 'active' },
  { name: 'Weekly Newsletter', sent: 285000, openRate: 38.5, clickRate: 6.2, revenue: 28500, status: 'active' },
  { name: 'Abandoned Cart', sent: 42000, openRate: 45.2, clickRate: 18.5, revenue: 89400, status: 'active' },
  { name: 'Product Launch', sent: 180000, openRate: 41.8, clickRate: 9.4, revenue: 156000, status: 'completed' },
  { name: 'Re-engagement', sent: 95000, openRate: 22.1, clickRate: 3.8, revenue: 12800, status: 'active' },
  { name: 'Black Friday', sent: 320000, openRate: 48.6, clickRate: 15.2, revenue: 425000, status: 'completed' },
  { name: 'Holiday Gift Guide', sent: 245000, openRate: 44.2, clickRate: 11.8, revenue: 198000, status: 'active' },
  { name: 'Flash Sale Alert', sent: 156000, openRate: 51.4, clickRate: 14.6, revenue: 87500, status: 'paused' },
];

const deviceData = [
  { name: 'Mobile', value: 58, color: '#8b5cf6' },
  { name: 'Desktop', value: 32, color: '#10b981' },
  { name: 'Tablet', value: 10, color: '#f59e0b' },
];

const deliverabilityData = [
  { name: 'Delivered', value: 96.8, color: '#10b981' },
  { name: 'Bounced', value: 2.1, color: '#ef4444' },
  { name: 'Spam', value: 1.1, color: '#f59e0b' },
];

const listGrowthData = [
  { month: 'Jul', subscribers: 125000 },
  { month: 'Aug', subscribers: 138000 },
  { month: 'Sep', subscribers: 152000 },
  { month: 'Oct', subscribers: 168000 },
  { month: 'Nov', subscribers: 189000 },
  { month: 'Dec', subscribers: 215000 },
];

const topPerformingSubjects = [
  { subject: "🎁 Your exclusive 40% off expires tonight!", openRate: 58.2, clickRate: 18.4 },
  { subject: "Don't miss out: Items in your cart are selling fast", openRate: 52.8, clickRate: 22.1 },
  { subject: "Breaking: New arrivals just dropped", openRate: 49.5, clickRate: 14.2 },
  { subject: "[First Name], we picked these just for you", openRate: 47.3, clickRate: 11.8 },
  { subject: "Last chance: Free shipping ends at midnight", openRate: 45.9, clickRate: 16.5 },
];

export default function Email() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const chartColors = {
    grid: isDark ? '#334155' : '#e2e8f0',
    axis: isDark ? '#64748b' : '#94a3b8',
    tooltip: {
      bg: isDark ? '#1e293b' : '#ffffff',
      border: isDark ? '#334155' : '#e2e8f0',
    },
  };

  const totalSent = emailTrendData.reduce((sum, d) => sum + d.sent, 0);
  const totalOpened = emailTrendData.reduce((sum, d) => sum + d.opened, 0);
  const totalClicked = emailTrendData.reduce((sum, d) => sum + d.clicked, 0);
  const avgOpenRate = ((totalOpened / totalSent) * 100).toFixed(1);
  const avgClickRate = ((totalClicked / totalSent) * 100).toFixed(1);
  const totalRevenue = campaignPerformance.reduce((sum, c) => sum + c.revenue, 0);

  return (
    <div>
      <Header title="Email Analytics" subtitle="Monitor email campaign performance and engagement metrics" />

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Emails Sent"
          value={`${(totalSent / 1000).toFixed(0)}K`}
          subtitle="Last 30 days"
          icon={Send}
        />
        <KPICard
          title="Open Rate"
          value={`${avgOpenRate}%`}
          subtitle="+3.2% vs last period"
          change="+3.2% vs last period"
          changeType="positive"
          icon={Eye}
        />
        <KPICard
          title="Click Rate"
          value={`${avgClickRate}%`}
          subtitle="+1.8% vs last period"
          change="+1.8% vs last period"
          changeType="positive"
          icon={MousePointer}
        />
        <KPICard
          title="Email Revenue"
          value={`$${(totalRevenue / 1000).toFixed(0)}K`}
          subtitle="+24.5% vs last period"
          change="+24.5% vs last period"
          changeType="positive"
          icon={DollarSign}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Deliverability"
          value="96.8%"
          subtitle="Excellent health"
          icon={Mail}
        />
        <KPICard
          title="Bounce Rate"
          value="2.1%"
          subtitle="-0.3% vs last period"
          change="-0.3% vs last period"
          changeType="positive"
          icon={TrendingUp}
        />
        <KPICard
          title="Unsubscribe Rate"
          value="0.12%"
          subtitle="Below industry avg"
          icon={UserMinus}
        />
        <KPICard
          title="List Size"
          value="215K"
          subtitle="+13.8% growth"
          change="+13.8% growth"
          changeType="positive"
          icon={Users}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 rounded-xl p-6 light:shadow-sm">
          <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 mb-1">Email Performance Trend</h3>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-sm mb-4">Sends, opens, and clicks over time</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={emailTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis dataKey="date" stroke={chartColors.axis} fontSize={12} />
                <YAxis stroke={chartColors.axis} fontSize={12} tickFormatter={(v) => `${v / 1000}K`} />
                <Tooltip
                  contentStyle={{ backgroundColor: chartColors.tooltip.bg, border: `1px solid ${chartColors.tooltip.border}`, borderRadius: '8px' }}
                  labelStyle={{ color: isDark ? '#fff' : '#0f172a' }}
                  formatter={(value: number) => [`${(value / 1000).toFixed(1)}K`, '']}
                />
                <Line type="monotone" dataKey="sent" stroke="#64748b" strokeWidth={2} dot={false} name="Sent" />
                <Line type="monotone" dataKey="opened" stroke="#8b5cf6" strokeWidth={2} dot={false} name="Opened" />
                <Line type="monotone" dataKey="clicked" stroke="#10b981" strokeWidth={2} dot={false} name="Clicked" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
              <span className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-500">Sent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
              <span className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-500">Opened</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-500">Clicked</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 rounded-xl p-6 light:shadow-sm">
          <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 mb-1">List Growth</h3>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-sm mb-4">Subscriber count over time</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={listGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis dataKey="month" stroke={chartColors.axis} fontSize={12} />
                <YAxis stroke={chartColors.axis} fontSize={12} tickFormatter={(v) => `${v / 1000}K`} />
                <Tooltip
                  contentStyle={{ backgroundColor: chartColors.tooltip.bg, border: `1px solid ${chartColors.tooltip.border}`, borderRadius: '8px' }}
                  labelStyle={{ color: isDark ? '#fff' : '#0f172a' }}
                  formatter={(value: number) => [`${(value / 1000).toFixed(0)}K subscribers`, '']}
                />
                <Bar dataKey="subscribers" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 rounded-xl p-6 light:shadow-sm">
          <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 mb-1">Device Breakdown</h3>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-sm mb-4">Opens by device type</p>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={60}
                  dataKey="value"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: chartColors.tooltip.bg, border: `1px solid ${chartColors.tooltip.border}`, borderRadius: '8px' }}
                  formatter={(value: number) => [`${value}%`, '']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-2">
            {deviceData.map((device) => (
              <div key={device.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: device.color }}></div>
                  <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">{device.name}</span>
                </div>
                <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">{device.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 rounded-xl p-6 light:shadow-sm">
          <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 mb-1">Deliverability</h3>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-sm mb-4">Email delivery health</p>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deliverabilityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={60}
                  dataKey="value"
                >
                  {deliverabilityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: chartColors.tooltip.bg, border: `1px solid ${chartColors.tooltip.border}`, borderRadius: '8px' }}
                  formatter={(value: number) => [`${value}%`, '']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-2">
            {deliverabilityData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">{item.name}</span>
                </div>
                <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 rounded-xl p-6 light:shadow-sm">
          <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 mb-1">Top Subject Lines</h3>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-sm mb-4">Best performing subjects</p>
          <div className="space-y-3">
            {topPerformingSubjects.slice(0, 4).map((item, index) => (
              <div key={index} className="bg-slate-700/30 dark:bg-slate-700/30 light:bg-slate-50 rounded-lg p-3">
                <p className="text-white dark:text-white light:text-slate-900 text-sm font-medium truncate mb-1">{item.subject}</p>
                <div className="flex gap-4 text-xs">
                  <span className="text-violet-400 dark:text-violet-400 light:text-violet-600">{item.openRate}% open</span>
                  <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">{item.clickRate}% click</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 rounded-xl p-6 light:shadow-sm">
        <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 mb-1">Campaign Performance</h3>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-sm mb-4">Email campaign metrics</p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 dark:border-slate-700 light:border-slate-200">
                <th className="text-left py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium text-sm">Campaign</th>
                <th className="text-right py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium text-sm">Sent</th>
                <th className="text-right py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium text-sm">Open Rate</th>
                <th className="text-right py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium text-sm">Click Rate</th>
                <th className="text-right py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium text-sm">Revenue</th>
                <th className="text-right py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {campaignPerformance.map((campaign) => (
                <tr key={campaign.name} className="border-b border-slate-700/50 dark:border-slate-700/50 light:border-slate-100 hover:bg-slate-700/30 dark:hover:bg-slate-700/30 light:hover:bg-slate-50">
                  <td className="py-3 px-4">
                    <span className="text-white dark:text-white light:text-slate-900 font-medium">{campaign.name}</span>
                  </td>
                  <td className="text-right py-3 px-4 text-slate-300 dark:text-slate-300 light:text-slate-700">{(campaign.sent / 1000).toFixed(0)}K</td>
                  <td className="text-right py-3 px-4">
                    <span className={`font-medium ${campaign.openRate >= 45 ? 'text-emerald-400 dark:text-emerald-400 light:text-emerald-600' : campaign.openRate >= 35 ? 'text-yellow-400 dark:text-yellow-400 light:text-yellow-600' : 'text-red-400 dark:text-red-400 light:text-red-600'}`}>
                      {campaign.openRate}%
                    </span>
                  </td>
                  <td className="text-right py-3 px-4">
                    <span className={`font-medium ${campaign.clickRate >= 12 ? 'text-emerald-400 dark:text-emerald-400 light:text-emerald-600' : campaign.clickRate >= 6 ? 'text-yellow-400 dark:text-yellow-400 light:text-yellow-600' : 'text-red-400 dark:text-red-400 light:text-red-600'}`}>
                      {campaign.clickRate}%
                    </span>
                  </td>
                  <td className="text-right py-3 px-4 text-slate-300 dark:text-slate-300 light:text-slate-700">${(campaign.revenue / 1000).toFixed(1)}K</td>
                  <td className="text-right py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'active' ? 'bg-emerald-500/20 text-emerald-400 dark:text-emerald-400 light:text-emerald-600' :
                      campaign.status === 'completed' ? 'bg-blue-500/20 text-blue-400 dark:text-blue-400 light:text-blue-600' :
                      'bg-yellow-500/20 text-yellow-400 dark:text-yellow-400 light:text-yellow-600'
                    }`}>
                      {campaign.status}
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
