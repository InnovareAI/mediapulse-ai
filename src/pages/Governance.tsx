import { Shield, Users, Key, Activity, UserPlus, Edit2, Download } from 'lucide-react';
import Header from '../components/Header';
import KPICard from '../components/KPICard';

const teamMembers = [
  { initials: 'SC', name: 'Sarah Chen', email: 'sarah@agency.com', role: 'Admin', color: 'bg-violet-500' },
  { initials: 'MT', name: 'Michael Torres', email: 'michael@agency.com', role: 'Media Planner', color: 'bg-blue-500' },
  { initials: 'EW', name: 'Emily Watson', email: 'emily@agency.com', role: 'Finance', color: 'bg-emerald-500' },
  { initials: 'JL', name: 'James Liu', email: 'james@agency.com', role: 'Media Buyer', color: 'bg-orange-500' },
  { initials: 'AS', name: 'Anna Smith', email: 'anna@agency.com', role: 'Viewer', color: 'bg-pink-500' },
];

const roles = [
  { name: 'Admin', permissions: ['Full Access', 'User Management', 'Billing', 'Integrations'] },
  { name: 'Media Planner', permissions: ['View All', 'Edit Campaigns', 'Export Reports'] },
  { name: 'Media Buyer', permissions: ['View All', 'Edit Budgets', 'Apply AI Suggestions'] },
  { name: 'Finance', permissions: ['View Budgets', 'View Reports', 'Export Data'] },
  { name: 'Viewer', permissions: ['View Only'] },
];

const auditTrail = [
  { action: 'Budget Updated', user: 'Sarah Chen', target: 'Q4 Holiday Push', time: '10 min ago' },
  { action: 'Campaign Paused', user: 'Michael Torres', target: 'Brand Awareness 2024', time: '1 hour ago' },
  { action: 'Report Exported', user: 'Emily Watson', target: 'November Performance', time: '2 hours ago' },
  { action: 'User Added', user: 'Sarah Chen', target: 'anna@agency.com', time: '1 day ago' },
  { action: 'AI Recommendation Applied', user: 'James Liu', target: 'Budget Reallocation', time: '2 days ago' },
];

export default function Governance() {
  return (
    <div>
      <Header title="Governance & Security" subtitle="Manage access controls, roles, and audit trails" />

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Team Members"
          value={teamMembers.length.toString()}
          subtitle="active users"
          icon={Users}
        />
        <KPICard
          title="Roles Defined"
          value={roles.length.toString()}
          subtitle="permission levels"
          icon={Key}
        />
        <KPICard
          title="Security Status"
          value="Secure"
          subtitle="SOC 2 compliant"
          icon={Shield}
        />
        <KPICard
          title="Audit Events"
          value="247"
          subtitle="this month"
          icon={Activity}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Team Members</h3>
              <p className="text-slate-400 text-sm">Manage user access and roles</p>
            </div>
            <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              <UserPlus className="w-4 h-4" />
              Invite User
            </button>
          </div>
          <div className="space-y-3">
            {teamMembers.map((member) => (
              <div key={member.email} className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${member.color} rounded-full flex items-center justify-center text-white font-medium`}>
                    {member.initials}
                  </div>
                  <div>
                    <p className="text-white font-medium">{member.name}</p>
                    <p className="text-slate-400 text-sm">{member.email}</p>
                  </div>
                </div>
                <span className="text-slate-300 text-sm bg-slate-700 px-3 py-1 rounded-full">{member.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white">Role Permissions</h3>
            <p className="text-slate-400 text-sm">Define access levels for each role</p>
          </div>
          <div className="space-y-3">
            {roles.map((role) => (
              <div key={role.name} className="bg-slate-700/30 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{role.name}</span>
                  <button className="text-violet-400 hover:text-violet-300 transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map((permission) => (
                    <span key={permission} className="text-slate-400 text-xs bg-slate-600/50 px-2 py-1 rounded">
                      {permission}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Audit Trail</h3>
            <p className="text-slate-400 text-sm">Track all changes and actions in the system</p>
          </div>
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
            <Download className="w-4 h-4" />
            Export Log
          </button>
        </div>
        <div className="space-y-3">
          {auditTrail.map((event, index) => (
            <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <div>
                  <p className="text-white">{event.action}</p>
                  <p className="text-slate-400 text-sm">{event.user} • {event.target}</p>
                </div>
              </div>
              <span className="text-slate-500 text-sm">{event.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
