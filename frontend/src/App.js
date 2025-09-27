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

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

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
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
