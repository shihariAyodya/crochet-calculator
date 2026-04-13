import React from 'react';

export default function WelcomePage({ onStart, lang }) {
  // We use the 'lang' passed from App.jsx instead of a local state
  const text = {
    en: { 
      title: "Crochet Price", 
      sub: "Handmade Calculator", 
      start: "Start Now" 
    },
    si: { 
      title: "ගෙත්තම්  මිල", 
      sub: "ගණනය කරමු", 
      start: "ආරම්භ කරන්න" 
    }
  };

  return (
    <div className="welcome-screen">
      <h1 className="title">{text[lang].title}</h1>
      <p style={{ marginBottom: '30px', opacity: 0.8 }}>
        {text[lang].sub}
      </p>
      
      <div className="glass-card">
        {/* Buttons are removed from here because they are now in the top-right corner */}
        <button className="btn-start" onClick={onStart}>
          {text[lang].start}
        </button>
      </div>
    </div>
  );
}