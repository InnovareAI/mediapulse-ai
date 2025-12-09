import { Mail, MousePointer, Eye, UserMinus, Send, TrendingUp, DollarSign, Users } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import Header from '../components/Header';
import KPICard from '../components/KPICard';
import { useTheme } from '../context/ThemeContext';

const emailTrendData = [
  { date: 'Nov 9', sent: 12500, opened: 5625, clicked: 1125 },
  { date: 'Nov 11', sent: 8200, opened: 3936, clicked: 738 },
  { date: 'Nov 13', sent: 15800, opened: 7426, clicked: 1422 },
  { date: 'Nov 15', sent: 9400, opened: 4512, clicked: 846 },
  { date: 'Nov 17', sent: 11200, opened: 5264, clicked: 1008 },
  { date: 'Nov 19', sent: 18500, opened: 9065, clicked: 1850 },
  { date: 'Nov 21', sent: 14200, opened: 6816, clicked: 1278 },
  { date: 'Nov 23', sent: 7800, opened: 3588, clicked: 702 },
  { date: 'Nov 25', sent: 16400, opened: 8036, clicked: 1558 },
  { date: 'Nov 27', sent: 13100, opened: 6419, clicked: 1179 },
  { date: 'Nov 29', sent: 19200, opened: 9792, clicked: 1920 },
  { date: 'Dec 1', sent: 22400, opened: 11648, clicked: 2240 },
  { date: 'Dec 3', sent: 17600, opened: 8976, clicked: 1672 },
  { date: 'Dec 5', sent: 21000, opened: 10710, clicked: 2100 },
  { date: 'Dec 7', sent: 15800, opened: 7742, clicked: 1422 },
];

const campaignPerformance = [
  { name: 'IMCIVREE Clinical Updates', sent: 45200, openRate: 52.8, clickRate: 18.4, segment: 'Endocrinologists', status: 'active' },
  { name: 'HCP Educational Series', sent: 38500, openRate: 48.2, clickRate: 14.2, segment: 'All HCPs', status: 'active' },
  { name: 'Obesity Medicine Conference', sent: 12800, openRate: 58.6, clickRate: 22.8, segment: 'Conf. Attendees', status: 'completed' },
  { name: 'BBS Disease Awareness', sent: 28400, openRate: 44.5, clickRate: 12.6, segment: 'PCPs', status: 'active' },
  { name: 'Patient Support Program', sent: 8900, openRate: 62.4, clickRate: 28.5, segment: 'Enrolled Patients', status: 'active' },
  { name: 'KOL Engagement', sent: 2400, openRate: 68.2, clickRate: 32.4, segment: 'Key Opinion Leaders', status: 'active' },
  { name: 'Peer-to-Peer Webinar Invite', sent: 18600, openRate: 51.2, clickRate: 19.8, segment: 'Specialists', status: 'completed' },
  { name: 'Clinical Trial Results', sent: 15200, openRate: 56.8, clickRate: 24.2, segment: 'Investigators', status: 'completed' },
];

const audienceData = [
  { name: 'Endocrinologists', value: 35, color: '#8b5cf6' },
  { name: 'PCPs', value: 28, color: '#10b981' },
  { name: 'Obesity Specialists', value: 18, color: '#f59e0b' },
  { name: 'Pediatricians', value: 12, color: '#ef4444' },
  { name: 'Other HCPs', value: 7, color: '#6366f1' },
];

const deliverabilityData = [
  { name: 'Delivered', value: 97.2, color: '#10b981' },
  { name: 'Bounced', value: 1.8, color: '#ef4444' },
  { name: 'Blocked', value: 1.0, color: '#f59e0b' },
];

const engagementBySpecialty = [
  { specialty: 'Endocrinology', openRate: 54.2, clickRate: 19.8 },
  { specialty: 'Obesity Medicine', openRate: 51.8, clickRate: 17.4 },
  { specialty: 'Pediatrics', openRate: 48.6, clickRate: 14.2 },
  { specialty: 'Primary Care', openRate: 42.4, clickRate: 11.8 },
  { specialty: 'Genetics', openRate: 58.4, clickRate: 22.6 },
];

const topPerformingSubjects = [
  { subject: "New Phase 3 Data: IMCIVREE Efficacy in BBS Patients", openRate: 62.4, clickRate: 26.8 },
  { subject: "CME Accredited: Understanding MC4R Pathway Deficiencies", openRate: 58.2, clickRate: 22.4 },
  { subject: "Invitation: Expert Panel Discussion on Rare Obesity", openRate: 56.8, clickRate: 24.2 },
  { subject: "Patient Case Study: Managing Hyperphagia in Pediatric BBS", openRate: 54.2, clickRate: 18.6 },
  { subject: "Register Now: ObesityWeek 2024 Symposium", openRate: 52.8, clickRate: 28.4 },
];

const recentActivity = [
  { action: 'Opened', email: 'IMCIVREE Clinical Updates', recipient: 'Dr. Sarah Chen, MD', time: '2 min ago' },
  { action: 'Clicked', email: 'CME Educational Series', recipient: 'Dr. Michael Torres, DO', time: '8 min ago' },
  { action: 'Opened', email: 'BBS Disease Awareness', recipient: 'Dr. Emily Watson, MD', time: '15 min ago' },
  { action: 'Registered', email: 'Peer-to-Peer Webinar', recipient: 'Dr. James Liu, MD', time: '22 min ago' },
  { action: 'Downloaded', email: 'Clinical Trial Results', recipient: 'Dr. Anna Smith, PhD', time: '35 min ago' },
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

  return (
    <div>
      <Header title="Email Analytics" subtitle="HCP engagement and medical communications performance" />

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Emails Sent"
          value={`${(totalSent / 1000).toFixed(1)}K`}
          subtitle="Last 30 days"
          icon={Send}
        />
        <KPICard
          title="Open Rate"
          value={`${avgOpenRate}%`}
          subtitle="+4.8% vs industry avg"
          change="+4.8% vs industry avg"
          changeType="positive"
          icon={Eye}
        />
        <KPICard
          title="Click Rate"
          value={`${avgClickRate}%`}
          subtitle="+2.4% vs last period"
          change="+2.4% vs last period"
          changeType="positive"
          icon={MousePointer}
        />
        <KPICard
          title="HCP Reach"
          value="28.4K"
          subtitle="Unique physicians"
          icon={Users}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Deliverability"
          value="97.2%"
          subtitle="Excellent health"
          icon={Mail}
        />
        <KPICard
          title="Bounce Rate"
          value="1.8%"
          subtitle="Below threshold"
          icon={TrendingUp}
        />
        <KPICard
          title="Unsubscribe Rate"
          value="0.08%"
          subtitle="Industry leading"
          icon={UserMinus}
        />
        <KPICard
          title="CME Completions"
          value="1,245"
          subtitle="+18% this month"
          change="+18% this month"
          changeType="positive"
          icon={DollarSign}
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
          <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 mb-1">Engagement by Specialty</h3>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-sm mb-4">Open and click rates by HCP type</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementBySpecialty} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} horizontal={false} />
                <XAxis type="number" stroke={chartColors.axis} fontSize={12} tickFormatter={(v) => `${v}%`} />
                <YAxis type="category" dataKey="specialty" stroke={chartColors.axis} fontSize={11} width={90} />
                <Tooltip
                  contentStyle={{ backgroundColor: chartColors.tooltip.bg, border: `1px solid ${chartColors.tooltip.border}`, borderRadius: '8px' }}
                  labelStyle={{ color: isDark ? '#fff' : '#0f172a' }}
                  formatter={(value: number) => [`${value}%`, '']}
                />
                <Bar dataKey="openRate" fill="#8b5cf6" radius={[0, 4, 4, 0]} name="Open Rate" />
                <Bar dataKey="clickRate" fill="#10b981" radius={[0, 4, 4, 0]} name="Click Rate" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
              <span className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-500">Open Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-500">Click Rate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 rounded-xl p-6 light:shadow-sm">
          <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 mb-1">Audience Breakdown</h3>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-sm mb-4">HCP segments reached</p>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={audienceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={60}
                  dataKey="value"
                >
                  {audienceData.map((entry, index) => (
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
            {audienceData.map((item) => (
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
                <p className="text-white dark:text-white light:text-slate-900 text-xs font-medium line-clamp-2 mb-1">{item.subject}</p>
                <div className="flex gap-4 text-xs">
                  <span className="text-violet-400 dark:text-violet-400 light:text-violet-600">{item.openRate}% open</span>
                  <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">{item.clickRate}% click</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 rounded-xl p-6 light:shadow-sm">
          <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 mb-1">Campaign Performance</h3>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-sm mb-4">HCP email campaign metrics</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 dark:border-slate-700 light:border-slate-200">
                  <th className="text-left py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium text-sm">Campaign</th>
                  <th className="text-right py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium text-sm">Sent</th>
                  <th className="text-right py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium text-sm">Open %</th>
                  <th className="text-right py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium text-sm">Click %</th>
                  <th className="text-left py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium text-sm">Segment</th>
                  <th className="text-right py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {campaignPerformance.map((campaign) => (
                  <tr key={campaign.name} className="border-b border-slate-700/50 dark:border-slate-700/50 light:border-slate-100 hover:bg-slate-700/30 dark:hover:bg-slate-700/30 light:hover:bg-slate-50">
                    <td className="py-3 px-4">
                      <span className="text-white dark:text-white light:text-slate-900 font-medium text-sm">{campaign.name}</span>
                    </td>
                    <td className="text-right py-3 px-4 text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm">{(campaign.sent / 1000).toFixed(1)}K</td>
                    <td className="text-right py-3 px-4">
                      <span className={`font-medium text-sm ${campaign.openRate >= 50 ? 'text-emerald-400 dark:text-emerald-400 light:text-emerald-600' : campaign.openRate >= 40 ? 'text-yellow-400 dark:text-yellow-400 light:text-yellow-600' : 'text-red-400 dark:text-red-400 light:text-red-600'}`}>
                        {campaign.openRate}%
                      </span>
                    </td>
                    <td className="text-right py-3 px-4">
                      <span className={`font-medium text-sm ${campaign.clickRate >= 18 ? 'text-emerald-400 dark:text-emerald-400 light:text-emerald-600' : campaign.clickRate >= 12 ? 'text-yellow-400 dark:text-yellow-400 light:text-yellow-600' : 'text-red-400 dark:text-red-400 light:text-red-600'}`}>
                        {campaign.clickRate}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-500 text-sm">{campaign.segment}</td>
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

        <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 rounded-xl p-6 light:shadow-sm">
          <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 mb-1">Recent Activity</h3>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-sm mb-4">Real-time HCP engagement</p>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-3 border-b border-slate-700/50 dark:border-slate-700/50 light:border-slate-100 last:border-0">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.action === 'Clicked' || activity.action === 'Registered' || activity.action === 'Downloaded'
                    ? 'bg-emerald-500'
                    : 'bg-violet-500'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-white dark:text-white light:text-slate-900 text-sm font-medium">{activity.action}</p>
                  <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-xs truncate">{activity.email}</p>
                  <p className="text-slate-500 dark:text-slate-500 light:text-slate-400 text-xs">{activity.recipient}</p>
                </div>
                <span className="text-slate-500 dark:text-slate-500 light:text-slate-400 text-xs whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
