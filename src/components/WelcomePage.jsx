import React, { useState } from 'react';

export default function WelcomePage({ onStart }) {
  const [language, setLanguage] = useState('en');

  const text = {
    en: { title: "Crochet Price", sub: "Handmade Calculator", start: "Start Now" },
    si: { title: "ක්‍රොෂේ මිල", sub: "මිල ගණනය කරමු", start: "ආරම්භ කරන්න" }
  };

  return (
    <div className="welcome-screen">
      <h1 className="title">{text[language].title}</h1>
      <p style={{marginBottom: '30px', opacity: 0.8}}>{text[language].sub}</p>
      <div className="glass-card">
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px'}}>
          <button className={`btn-lang ${language === 'en' ? 'active' : ''}`} onClick={() => setLanguage('en')}>English</button>
          <button className={`btn-lang ${language === 'si' ? 'active' : ''}`} onClick={() => setLanguage('si')}>සිංහල</button>
        </div>
        <button className="btn-start" onClick={() => onStart(language)}>{text[language].start}</button>
      </div>
    </div>
  );
}