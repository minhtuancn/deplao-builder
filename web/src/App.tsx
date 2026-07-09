import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CrmPage from './pages/CrmPage';
import ErpPage from './pages/ErpPage';
import WorkflowPage from './pages/WorkflowPage';
import AnalyticsPage from './pages/AnalyticsPage';
import { useAuthStore } from './store/authStore';

export default function App() {
  const token = useAuthStore((s) => s.token);
  if (!token) return <LoginPage />;
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/crm" element={<CrmPage />} />
      <Route path="/erp" element={<ErpPage />} />
      <Route path="/workflow" element={<WorkflowPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
    </Routes>
  );
}