import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Budget from './pages/Budget';
import Attribution from './pages/Attribution';
import AIAnalytics from './pages/AIAnalytics';
import Campaigns from './pages/Campaigns';
import Alerts from './pages/Alerts';
import Integrations from './pages/Integrations';
import Governance from './pages/Governance';
import Assistant from './pages/Assistant';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900">
        <Sidebar />
        <main className="ml-64 p-6">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/channels" element={<Overview />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/attribution" element={<Attribution />} />
            <Route path="/ai-analytics" element={<AIAnalytics />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/assistant" element={<Assistant />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
