import React, { useState } from 'react';
import client from '../api/client';

export default function Signup(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try{
      const { data } = await client.post('/api/auth/signup', { name, email, password });
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    }catch(err){
      setError(err?.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="card" style={{maxWidth:480, margin:'0 auto'}}>
      <h2 className="section-title">Create your account</h2>
      {error && <div style={{color:'#ef4444', marginBottom:8}}>{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="form-row" style={{flexDirection:'column'}}>
          <label className="label">Name</label>
          <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" />
        </div>
        <div className="form-row" style={{flexDirection:'column'}}>
          <label className="label">Email</label>
          <input className="input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
        </div>
        <div className="form-row" style={{flexDirection:'column'}}>
          <label className="label">Password</label>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" />
        </div>
        <button className="button" type="submit" style={{width:'100%'}}>Sign up</button>
      </form>
    </div>
  );
}
