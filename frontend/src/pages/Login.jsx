import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import client from '../api/client';

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try{
      // Replace with actual endpoint
      const { data } = await client.post('/api/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      const redirectTo = location.state?.from?.pathname || '/dashboard';
      navigate(redirectTo, { replace: true });
    }catch(err){
      setError(err?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="card" style={{maxWidth:420, margin:'0 auto'}}>
      <h2 className="section-title">Login</h2>
      {error && <div style={{color:'#ef4444', marginBottom:8}}>{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="form-row" style={{flexDirection:'column'}}>
          <label className="label">Email</label>
          <input className="input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
        </div>
        <div className="form-row" style={{flexDirection:'column'}}>
          <label className="label">Password</label>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" />
        </div>
        <button className="button" type="submit" style={{width:'100%'}}>Login</button>
      </form>
      <div style={{marginTop:12, fontSize:12, color:'#94a3b8'}}>Or continue with: GitHub • Google (coming soon)</div>
    </div>
  );
}
