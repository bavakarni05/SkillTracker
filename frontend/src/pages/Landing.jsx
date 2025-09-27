import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing(){
  return (
    <div className="grid">
      <div className="col-12">
        <div className="card">
          <h1 className="section-title">Track. Analyze. Evolve.</h1>
          <p>AI Skill Evolution Tracker helps you analyze your coding activity, quantify your skill growth, and get personalized career recommendations.</p>
          <div style={{marginTop:16, display:'flex', gap:12}}>
            <Link to="/signup" className="button">Get Started</Link>
            <Link to="/login" className="button secondary">Login</Link>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card">
          <h2 className="section-title">Core Features</h2>
          <ul>
            <li>User auth with email/JWT and OAuth (GitHub/Google)</li>
            <li>GitHub integration: repos, commits, languages</li>
            <li>Skill growth analysis & projections</li>
            <li>Career path predictions with readiness timeline</li>
            <li>Personalized course & project recommendations</li>
          </ul>
        </div>
      </div>
      <div className="col-6">
        <div className="card">
          <h2 className="section-title">How it works</h2>
          <ol>
            <li>Connect GitHub and optionally LinkedIn</li>
            <li>We analyze activity and extract skills</li>
            <li>Get dashboards, insights, and suggestions</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
