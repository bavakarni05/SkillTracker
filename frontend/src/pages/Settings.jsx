import React, { useState } from 'react';
import client from '../api/client';

export default function Settings(){
  const [name,setName] = useState('');
  const [role,setRole] = useState('Student');
  const [goals,setGoals] = useState('');
  const [experience,setExperience] = useState(0);
  const [message,setMessage] = useState('');

  const onSave = async (e) => {
    e.preventDefault();
    try{
      await client.put('/api/user/profile', { name, role, goals, yearsOfExperience: Number(experience) });
      setMessage('Profile updated');
    }catch(err){
      setMessage(err?.response?.data?.message || 'Update failed');
    }
  };

  return (
    <div className="card" style={{maxWidth:700, margin:'0 auto'}}>
      <h2 className="section-title">Profile & Settings</h2>
      {message && <div style={{marginBottom:8}}>{message}</div>}
      <form onSubmit={onSave}>
        <div className="form-row">
          <div style={{flex:1}}>
            <label className="label">Name</label>
            <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" />
          </div>
          <div style={{flex:1}}>
            <label className="label">Role</label>
            <select className="input" value={role} onChange={e=>setRole(e.target.value)}>
              <option>Student</option>
              <option>Professional</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div style={{flex:1}}>
            <label className="label">Goals</label>
            <input className="input" value={goals} onChange={e=>setGoals(e.target.value)} placeholder="e.g., Become a Data Scientist" />
          </div>
          <div style={{width:160}}>
            <label className="label">Years of Experience</label>
            <input className="input" type="number" min="0" max="50" value={experience} onChange={e=>setExperience(e.target.value)} />
          </div>
        </div>
        <button className="button" type="submit">Save</button>
      </form>
    </div>
  );
}
