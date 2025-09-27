import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  const navigate = useNavigate();
  const isAuthed = typeof window !== 'undefined' && !!localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="brand">AI Skill Evolution Tracker</div>
        <nav className="nav">
          {isAuthed ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/skills">Skill Insights</NavLink>
              <NavLink to="/career">Career Paths</NavLink>
              <NavLink to="/recommendations">Recommendations</NavLink>
              <NavLink to="/settings">Settings</NavLink>
              <button className="button secondary" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="auth">Login</NavLink>
              <NavLink to="/signup" className="auth">Signup</NavLink>
            </>
          )}
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">© 2025 SkillTracker</footer>
    </div>
  );
}
