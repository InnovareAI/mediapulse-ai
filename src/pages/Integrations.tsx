import { Plug, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import Header from '../components/Header';
import KPICard from '../components/KPICard';

const connectedIntegrations = [
  { name: 'Google Ads', type: 'Ad Platform', accounts: 12, lastSync: '5 min ago', status: 'connected', icon: '🔍' },
  { name: 'Meta Business', type: 'Ad Platform', accounts: 8, lastSync: '10 min ago', status: 'connected', icon: '📘' },
  { name: 'TikTok Ads', type: 'Ad Platform', accounts: 4, lastSync: '15 min ago', status: 'connected', icon: '🎵' },
  { name: 'LinkedIn Marketing', type: 'Ad Platform', accounts: 3, lastSync: '2 hours ago', status: 'warning', icon: '💼' },
  { name: 'Salesforce', type: 'CRM', accounts: 1, lastSync: '30 min ago', status: 'connected', icon: '☁️' },
  { name: 'HubSpot', type: 'CRM', accounts: 0, lastSync: 'Never', status: 'disconnected', icon: '🟠' },
  { name: 'Google Analytics 4', type: 'Analytics', accounts: 6, lastSync: '1 hour ago', status: 'connected', icon: '📊' },
  { name: 'Snowflake', type: 'Data Warehouse', accounts: 1, lastSync: '2 hours ago', status: 'connected', icon: '❄️' },
];

const availableIntegrations = [
  { name: 'Amazon Ads', type: 'Ad Platform', icon: '📦' },
  { name: 'Pinterest Ads', type: 'Ad Platform', icon: '📌' },
  { name: 'Twitter/X Ads', type: 'Ad Platform', icon: '🐦' },
  { name: 'BigQuery', type: 'Data Warehouse', icon: '🗄️' },
  { name: 'Mixpanel', type: 'Analytics', icon: '📈' },
];

export default function Integrations() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected':
        return <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-medium">connected</span>;
      case 'warning':
        return <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full text-xs font-medium">warning</span>;
      case 'disconnected':
        return <span className="px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-medium">disconnected</span>;
      default:
        return null;
    }
  };

  const connectedCount = connectedIntegrations.filter(i => i.status === 'connected').length;
  const needsAttentionCount = connectedIntegrations.filter(i => i.status !== 'connected').length;

  return (
    <div>
      <Header title="Integrations" subtitle="Connect and manage your data sources" />

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Total Integrations"
          value={connectedIntegrations.length.toString()}
          subtitle="configured"
          icon={Plug}
        />
        <KPICard
          title="Connected"
          value={connectedCount.toString()}
          subtitle="syncing data"
          icon={CheckCircle}
        />
        <KPICard
          title="Needs Attention"
          value={needsAttentionCount.toString()}
          subtitle="sync issues"
          icon={AlertTriangle}
        />
        <KPICard
          title="Last Full Sync"
          value="5m ago"
          subtitle="all platforms"
          icon={Clock}
        />
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-1">Connected Integrations</h3>
        <p className="text-slate-400 text-sm mb-4">Manage your active data connections</p>
        <div className="grid grid-cols-2 gap-4">
          {connectedIntegrations.map((integration) => (
            <div key={integration.name} className="bg-slate-700/30 border border-slate-600 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{integration.icon}</span>
                <div>
                  <h4 className="text-white font-medium">{integration.name}</h4>
                  <p className="text-slate-400 text-sm">
                    {integration.type} • {integration.accounts} accounts • Last sync: {integration.lastSync}
                  </p>
                </div>
              </div>
              {getStatusBadge(integration.status)}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-1">Available Integrations</h3>
        <p className="text-slate-400 text-sm mb-4">Connect more platforms to expand your data sources</p>
        <div className="grid grid-cols-3 gap-4">
          {availableIntegrations.map((integration) => (
            <div key={integration.name} className="bg-slate-700/30 border border-slate-600 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{integration.icon}</span>
                <div>
                  <h4 className="text-white font-medium">{integration.name}</h4>
                  <p className="text-slate-400 text-sm">{integration.type}</p>
                </div>
              </div>
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Connect
              </button>
            </div>
          ))}
          <div className="bg-slate-700/30 border border-dashed border-slate-500 rounded-xl p-4 flex flex-col items-center justify-center">
            <p className="text-slate-400 text-sm mb-2">Request Integration</p>
            <p className="text-slate-500 text-xs mb-3">Don't see what you need?</p>
            <button className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
