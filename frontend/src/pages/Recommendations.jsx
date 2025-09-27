import React from 'react';

const items = [
  { type: 'Course', title: 'SQL for Data Science', link: '#'},
  { type: 'Mini-Project', title: 'Predict student grades using ML', link: '#'},
  { type: 'Tutorial', title: 'React Hooks Deep Dive', link: '#'},
];

export default function Recommendations(){
  return (
    <div className="card">
      <h2 className="section-title">Personalized Recommendations</h2>
      <ul>
        {items.map((i, idx) => (
          <li key={idx} style={{marginBottom:10}}>
            <strong>{i.type}:</strong> {i.title} — <a href={i.link}>View</a>
          </li>
        ))}
      </ul>
      <p style={{color:'#94a3b8', fontSize:12}}>These are placeholders. They will be replaced with live recommendations from the backend engine.</p>
    </div>
  );
}
