import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import SkillInsights from './pages/SkillInsights';
import CareerPaths from './pages/CareerPaths';
import Recommendations from './pages/Recommendations';
import Settings from './pages/Settings';
import RequireAuth from './components/RequireAuth';
import Auth from './pages/Auth';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="auth" element={<Auth />} />
      {/* Backward-compatible redirects */}
      <Route path="login" element={<Navigate to="/auth?mode=login" replace />} />
      <Route path="signup" element={<Navigate to="/auth?mode=signup" replace />} />

      {/* Protected routes */}
      <Route element={<RequireAuth />}> 
        <Route element={<Layout />}> 
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="skills" element={<SkillInsights />} />
          <Route path="career" element={<CareerPaths />} />
          <Route path="recommendations" element={<Recommendations />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
}

export default App;
