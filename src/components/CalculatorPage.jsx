import React, { useState } from 'react';

export default function CalculatorPage({ lang, onBack, onCalculate }) {
  const [yarn, setYarn] = useState('');
  const [hours, setHours] = useState('');
  const [rate, setRate] = useState('');
  const [currency, setCurrency] = useState('Rs.');

  const t = {
    en: { title: "Details", curr: "Currency", yarn: `Yarn Cost`, hrs: "Time (Hrs)", rate: `Rate / Hr`, calc: "Calculate", back: "Back" },
    si: { title: "විස්තර", curr: "මුදල් වර්ගය", yarn: `නූල් මිල`, hrs: "කාලය (පැය)", rate: `පැයකට මිල`, calc: "ගණනය කරන්න", back: "ආපසු" }
  };

  return (
    <div className="welcome-screen">
      <h1 className="title" style={{fontSize: '2rem'}}>{t[lang].title}</h1>
      <div className="glass-card">
        <div className="input-group">
          <label>{t[lang].curr}</label>
          <select className="stylish-input" style={{color: 'white'}} value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="Rs." style={{color: 'black'}}>Rs.</option>
            <option value="$" style={{color: 'black'}}>$ (USD)</option>
            <option value="LKR" style={{color: 'black'}}>LKR</option>
          </select>
        </div>
        <div className="input-group">
          <label>{t[lang].yarn} ({currency})</label>
          <input type="number" className="stylish-input" value={yarn} onChange={(e) => setYarn(e.target.value)} />
        </div>
        <div className="input-group">
          <label>{t[lang].hrs}</label>
          <input type="number" className="stylish-input" value={hours} onChange={(e) => setHours(e.target.value)} />
        </div>
        <div className="input-group">
          <label>{t[lang].rate} ({currency})</label>
          <input type="number" className="stylish-input" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
        <button className="btn-start" onClick={() => onCalculate({yarn, hours, rate, currency})}>{t[lang].calc}</button>
        <button className="back-link" onClick={onBack}>{t[lang].back}</button>
      </div>
    </div>
  );
}