import React from 'react';

const roles = [
  { role: 'Junior Data Scientist', prob: 0.82, timeline: '3 months' },
  { role: 'Backend Developer', prob: 0.68, timeline: '5 months' },
  { role: 'Full-Stack Developer', prob: 0.55, timeline: '6-8 months' }
];

export default function CareerPaths(){
  return (
    <div className="card">
      <h2 className="section-title">Career Suggestions</h2>
      <ul>
        {roles.map((r)=> (
          <li key={r.role} style={{marginBottom:10}}>
            <div><strong>{r.role}</strong> — Probability: {(r.prob*100).toFixed(0)}%</div>
            <div>Estimated readiness: {r.timeline}</div>
          </li>
        ))}
      </ul>
      <p style={{color:'#94a3b8', fontSize:12}}>These are placeholder values. Once backend/ML endpoints are ready, this page will fetch live predictions.</p>
    </div>
  );
}
