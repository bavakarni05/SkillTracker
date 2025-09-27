import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import client from '../api/client';
import '../components/Layout.css';

export default function Auth(){
  const location = useLocation();
  const navigate = useNavigate();
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlMode = new URLSearchParams(location.search).get('mode');
    if (urlMode === 'signup' || urlMode === 'login') setMode(urlMode);
  }, [location.search]);

  const toggleMode = () => {
    const next = mode === 'login' ? 'signup' : 'login';
    setMode(next);
    setError('');
    // keep URL in sync so it's obvious which mode is active
    const params = new URLSearchParams(location.search);
    params.set('mode', next);
    navigate(`/auth?${params.toString()}`, { replace: true });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try{
      if (mode === 'login') {
        const { data } = await client.post('/api/auth/login', { email: email.trim(), password });
        localStorage.setItem('token', data.token);
      } else {
        const { data } = await client.post('/api/auth/signup', { name: name.trim(), email: email.trim(), password });
        localStorage.setItem('token', data.token);
      }
      const redirectTo = location.state?.from?.pathname || '/dashboard';
      navigate(redirectTo, { replace: true });
    }catch(err){
      console.error('Auth error:', err);
      const apiMsg = err?.response?.data?.message;
      const status = err?.response?.status;
      const text = apiMsg || `${mode === 'login' ? 'Login' : 'Signup'} failed`;
      setError(status ? `${text} (HTTP ${status})` : text);
    } finally {
      setLoading(false);
    }
  };

  // After hooks are set up, redirect early if already authenticated
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="brand">AI Skill Evolution Tracker</div>
        <nav className="nav">
          <button className="button secondary" onClick={toggleMode}>
            {mode === 'login' ? 'Need an account? Sign up' : 'Have an account? Sign in'}
          </button>
        </nav>
      </header>
      <main className="app-main main-center">
        <div className="card" style={{maxWidth:480, margin:'0 auto'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
            <h2 className="section-title" style={{margin:0}}>{mode === 'login' ? 'Sign in' : 'Create your account'}</h2>
          </div>
          {error && <div style={{color:'#ef4444', marginBottom:8}}>{error}</div>}

          <form onSubmit={onSubmit}>
            {mode === 'signup' && (
              <div className="form-row" style={{flexDirection:'column'}}>
                <label className="label">Name</label>
                <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" />
              </div>
            )}
            <div className="form-row" style={{flexDirection:'column'}}>
              <label className="label">Email</label>
              <input className="input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
            </div>
            <div className="form-row" style={{flexDirection:'column'}}>
              <label className="label">Password</label>
              <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" />
            </div>
            <button className="button" type="submit" style={{width:'100%'}} disabled={loading || (mode==='signup' ? (!name || !email || !password) : (!email || !password))}>
              {loading ? 'Please wait...' : (mode === 'login' ? 'Login' : 'Sign up')}
            </button>
          </form>

          {mode === 'login' && (
            <div style={{marginTop:12, fontSize:12, color:'#94a3b8'}}>Or continue with: GitHub • Google (coming soon)</div>
          )}
        </div>
      </main>
      <footer className="app-footer">© 2025 SkillTracker</footer>
    </div>
  );
}
