import { Bell, AlertTriangle, AlertCircle, Info, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import KPICard from '../components/KPICard';
import { alerts } from '../data/mockData';

export default function Alerts() {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical': return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'info': return <Info className="w-5 h-5 text-blue-400" />;
      default: return <Bell className="w-5 h-5 text-slate-400" />;
    }
  };

  const getAlertBg = (type: string) => {
    switch (type) {
      case 'critical': return 'border-red-500/30 bg-red-500/10';
      case 'warning': return 'border-yellow-500/30 bg-yellow-500/10';
      case 'info': return 'border-blue-500/30 bg-blue-500/10';
      default: return 'border-slate-600 bg-slate-700/30';
    }
  };

  const criticalCount = alerts.filter(a => a.type === 'critical').length;
  const warningCount = alerts.filter(a => a.type === 'warning').length;
  const resolvedToday = 5;

  return (
    <div>
      <Header title="Alerts" subtitle="Monitor and manage system notifications" />

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Total Alerts"
          value={alerts.length.toString()}
          subtitle="Active notifications"
          icon={Bell}
        />
        <KPICard
          title="Critical"
          value={criticalCount.toString()}
          subtitle="Requires immediate action"
          icon={AlertCircle}
        />
        <KPICard
          title="Warnings"
          value={warningCount.toString()}
          subtitle="Needs attention"
          icon={AlertTriangle}
        />
        <KPICard
          title="Resolved Today"
          value={resolvedToday.toString()}
          subtitle="Issues fixed"
          icon={CheckCircle}
        />
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Recent Alerts</h3>
          <div className="flex items-center gap-2">
            <button className="bg-violet-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium">All</button>
            <button className="text-slate-400 hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">Critical</button>
            <button className="text-slate-400 hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">Warning</button>
            <button className="text-slate-400 hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">Info</button>
          </div>
        </div>

        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className={`border rounded-xl p-4 ${getAlertBg(alert.type)}`}>
              <div className="flex items-start gap-4">
                <div className="mt-0.5">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-white font-medium">{alert.title}</h4>
                    <span className="text-slate-500 text-sm">{alert.time}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">{alert.message}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-500 text-sm">Campaign: {alert.campaign}</span>
                    <button className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">
                      View Details
                    </button>
                    <button className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
