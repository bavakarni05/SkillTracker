import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { skill: 'Python', A: 85 },
  { skill: 'JavaScript', A: 70 },
  { skill: 'SQL', A: 35 },
  { skill: 'ML', A: 50 },
  { skill: 'React', A: 60 },
  { skill: 'Node', A: 55 }
];

export default function SkillInsights(){
  return (
    <div className="grid">
      <div className="col-6">
        <div className="card">
          <h2 className="section-title">Skill Heatmap (Radar)</h2>
          <div style={{height:320}}>
            <ResponsiveContainer>
              <RadarChart data={data}>
                <PolarGrid stroke="#1f2937" />
                <PolarAngleAxis dataKey="skill" stroke="#94a3b8" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94a3b8" />
                <Tooltip />
                <Radar name="You" dataKey="A" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card">
          <h2 className="section-title">Top 5 Skills</h2>
          <ol>
            <li>Python</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
            <li>ML</li>
          </ol>
          <h2 className="section-title" style={{marginTop:16}}>Weakest Skills</h2>
          <ol>
            <li>SQL</li>
            <li>Cloud</li>
            <li>Data Engineering</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
