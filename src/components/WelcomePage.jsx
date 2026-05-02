import React from 'react';

export default function WelcomePage({ onStart, lang }) {
  const text = {
    en: { 
      title: "Crochet Price", 
      sub: "Calculator", 
      start: "Start Now" 
    },
    si: { 
      title: "ගෙත්තම්  මිල", 
      sub: "ගණකය​", 
      start: "ආරම්භ කරන්න" 
    }
  };

  return (
    <div className="welcome-screen">
      <h1 className="title">{text[lang].title}</h1>

      {/* subtitle updated */}
      <p className="subtitle">
        {text[lang].sub}
      </p>

      <div className="glass-card">
        <button className="btn-start" onClick={onStart}>
          {text[lang].start}
        </button>
      </div>
    </div>
  );
}