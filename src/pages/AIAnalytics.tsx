import { Brain, Lightbulb, CheckCircle, AlertTriangle, Send } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '../components/Header';
import KPICard from '../components/KPICard';
import { aiInsights, whatIfScenarios, seasonalityInsights, forecastData } from '../data/mockData';

export default function AIAnalytics() {
  return (
    <div>
      <Header title="AI Analytics" subtitle="Predictive and prescriptive insights powered by AI" />

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-1">Ask AI Anything</h3>
        <p className="text-slate-400 text-sm mb-4">Natural language queries about your media performance</p>
        <div className="relative">
          <input
            type="text"
            placeholder='e.g., Show me clients overspending by 10% this week...'
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <Send className="w-4 h-4" />
            Ask AI
          </button>
        </div>
        <div className="flex gap-2 mt-3">
          <button className="bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 px-3 py-1.5 rounded-full text-sm transition-colors">
            "Which campaigns are underperforming?"
          </button>
          <button className="bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 px-3 py-1.5 rounded-full text-sm transition-colors">
            "Predict next month's ROI"
          </button>
          <button className="bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 px-3 py-1.5 rounded-full text-sm transition-colors">
            "Find budget optimization opportunities"
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard
          title="AI Insights Generated"
          value="24"
          subtitle="This week"
          icon={Lightbulb}
        />
        <KPICard
          title="Actions Taken"
          value="8"
          subtitle="$42K saved"
          icon={CheckCircle}
        />
        <KPICard
          title="Forecast Accuracy"
          value="94.2%"
          subtitle="Last 30 days"
          icon={Brain}
        />
        <KPICard
          title="Anomalies Detected"
          value="3"
          subtitle="Requires review"
          icon={AlertTriangle}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-1">What-If Scenarios</h3>
          <p className="text-slate-400 text-sm mb-4">Simulate budget changes and predict outcomes with AI</p>
          <div className="space-y-4">
            {whatIfScenarios.map((scenario) => (
              <div key={scenario.id} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-white font-medium">{scenario.title}</h4>
                  <span className="text-slate-400 text-sm">{scenario.confidence}% confidence</span>
                </div>
                <div className="flex items-center gap-6 mb-3">
                  <div>
                    <span className="text-emerald-400 font-semibold">{scenario.roiChange}</span>
                    <span className="text-slate-400 text-sm ml-1">ROI</span>
                  </div>
                  <div>
                    <span className={scenario.conversionsChange.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}>
                      {scenario.conversionsChange}
                    </span>
                    <span className="text-slate-400 text-sm ml-1">conversions</span>
                  </div>
                </div>
                <button className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">
                  Analyze with AI →
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-1">Seasonality Insights</h3>
          <p className="text-slate-400 text-sm mb-4">AI-detected patterns and recommendations</p>
          <div className="space-y-4">
            {seasonalityInsights.map((insight, index) => (
              <div key={index} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">{insight.title}</h4>
                <p className="text-violet-400 text-sm mb-1">{insight.prediction}</p>
                <p className="text-slate-400 text-sm">{insight.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
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
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">AI Insights</h3>
              <p className="text-slate-400 text-sm">Powered by predictive analytics</p>
            </div>
            <button className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">
              View All
            </button>
          </div>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {aiInsights.map((insight) => (
              <div key={insight.id} className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-white font-medium">{insight.title}</h4>
                  <span className="text-slate-500 text-xs">{insight.time}</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">{insight.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm">
                    <span className={insight.type === 'opportunity' ? 'text-emerald-400' : 'text-yellow-400'}>
                      {insight.impact}
                    </span>
                    <span className="text-slate-500">{insight.confidence}% confidence</span>
                  </div>
                  <button className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                    {insight.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
