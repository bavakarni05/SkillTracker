import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const lineData = [
  { month: 'Jun', Python: 60, ML: 30 },
  { month: 'Jul', Python: 65, ML: 35 },
  { month: 'Aug', Python: 72, ML: 38 },
  { month: 'Sep', Python: 78, ML: 42 },
  { month: 'Oct', Python: 85, ML: 46 },
  { month: 'Nov', Python: 90, ML: 50 },
];

const skills = [
  { name: 'Python', value: 85 },
  { name: 'JavaScript', value: 70 },
  { name: 'ML', value: 50 },
  { name: 'SQL', value: 35 },
  { name: 'React', value: 60 }
];

const COLORS = ['#22c55e','#60a5fa','#f59e0b','#ef4444','#a78bfa'];

export default function Dashboard(){
  return (
    <div className="grid">
      <div className="col-8">
        <div className="card">
          <h2 className="section-title">Skill Evolution</h2>
          <div style={{height:280}}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="Python" stroke="#60a5fa" strokeWidth={2} />
                <Line type="monotone" dataKey="ML" stroke="#22c55e" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card">
          <h2 className="section-title">Skill Strengths</h2>
          <div style={{height:280}}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={skills} dataKey="value" nameKey="name" outerRadius={100}>
                  {skills.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="card">
          <h2 className="section-title">Career Suggestion</h2>
          <p><strong>Junior Data Scientist</strong> — 80% ready. Estimated 3 months to readiness.</p>
        </div>
      </div>
    </div>
  );
}
