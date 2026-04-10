import React from 'react';

export default function ResultsPage({ lang, data, onRestart, onBack }) {
  const t = {
    en: { 
      title: "Result", 
      total: "Recommended Price", 
      restart: "New Calculation",
      back: "← Edit Details" 
    },
    si: { 
      title: "අවසාන මිල", 
      total: "නිර්දේශිත මිල", 
      restart: "අලුතින් ආරම්භ කරන්න",
      back: "← විස්තර වෙනස් කරන්න"
    }
  };

  if (!data) return null;

  return (
    <div className="welcome-screen">
      <h1 className="title" style={{fontSize: '2.5rem'}}>{t[lang].title}</h1>
      
      <div className="glass-card">
        <p style={{opacity: 0.8}}>{t[lang].total}</p>
        <h2 style={{fontSize: '3rem', margin: '10px 0 30px 0', color: 'var(--teal)'}}>
          {data.currency} {data.total.toLocaleString()}
        </h2>

        {/* Start New Button */}
        <button className="btn-start" onClick={onRestart}>
          {t[lang].restart}
        </button>

        {/* New Back/Edit Button */}
        <button className="back-link" onClick={onBack} style={{marginTop: '20px'}}>
          {t[lang].back}
        </button>
      </div>
    </div>
  );
}