import React, { useState } from 'react';

export default function CalculatorPage({ lang, onBack, onCalculate }) {
  const [project, setProject] = useState('custom');
  const [yarn, setYarn] = useState('');
  const [hours, setHours] = useState('');
  const [rate, setRate] = useState('');
  const [currency, setCurrency] = useState('Rs.');

  // Expanded Project Presets Data
  const presets = {
    custom: { en: "Custom Product", si: "වෙනත් නිර්මාණ", yarn: '', hours: '' },
    babyDress03: { en: "Baby Dress (0-3 Months)", si: "ළමා ඇඳුම් (මාස 0-3)", yarn: '800', hours: '6' },
    babyDress36: { en: "Baby Dress (3-6 Months)", si: "ළමා ඇඳුම් (මාස 3-6)", yarn: '1000', hours: '8' },
    babyDress612: { en: "Baby Dress (6-12 Months)", si: "ළමා ඇඳුම් (මාස 6-12)", yarn: '1200', hours: '10' },
    sweater: { en: "Sweater (Adult)", si: "ස්වීටර් ", yarn: '2500', hours: '20' },
    cardigan: { en: "Cardigan", si: "කාඩිගන් ", yarn: '2800', hours: '25' },
    dress: { en: "Dress (Adult)", si: "ගවුම්", yarn: '3500', hours: '35' },
    cropTop: { en: "Crop Top ", si: "ක්‍රොප් ටොප්", yarn: '900', hours: '8' },
    beanie: { en: "Beanie Hat", si: "හිස්වැසුම් (Beanie)", yarn: '400', hours: '3' }
  };

  const t = {
    en: { 
      title: "Details", 
      projectLabel: "Select Product Type",
      curr: "Currency", 
      yarn: "Yarn Cost", 
      hrs: "Time Spent (Hours)", 
      rate: "Hourly Rate", 
      calc: "Calculate Price", 
      back: "← Back" 
    },
    si: { 
      title: "විස්තර", 
      projectLabel: "නිර්මාණයේ වර්ගය",
      curr: "මුදල් වර්ගය", 
      yarn: "නූල් පිරිවැය", 
      hrs: "කාලය (පැය)", 
      rate: "පැයකට මිල", 
      calc: "මිල ගණනය කරන්න", 
      back: "← ආපසු" 
    }
  };

  const handleProjectChange = (e) => {
    const val = e.target.value;
    setProject(val);
    if (val !== 'custom') {
      setYarn(presets[val].yarn);
      setHours(presets[val].hours);
    } else {
      setYarn('');
      setHours('');
    }
  };

  return (
    <div className="welcome-screen">
      <h1 className="title" style={{fontSize: '2.2rem', marginBottom: '15px'}}>{t[lang].title}</h1>
      
      <div className="glass-card" style={{padding: '25px'}}>
        
        {/* Project Type Dropdown */}
        <div className="input-group">
          <label>{t[lang].projectLabel}</label>
          <select className="stylish-input" value={project} onChange={handleProjectChange}>
            {Object.keys(presets).map(key => (
              <option key={key} value={key} style={{color: 'black'}}>
                {presets[key][lang]}
              </option>
            ))}
          </select>
        </div>

        {/* Currency Selection */}
        <div className="input-group">
          <label>{t[lang].curr}</label>
          <select className="stylish-input" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="LKR" style={{color: 'black'}}>LKR</option>
            <option value="$" style={{color: 'black'}}>$ (USD)</option>
          </select>
        </div>

        {/* Dynamic Yarn Input */}
        <div className="input-group">
          <label>{t[lang].yarn} ({currency})</label>
          <input 
            type="number" 
            className="stylish-input" 
            value={yarn} 
            onChange={(e) => setYarn(e.target.value)} 
            placeholder="0"
          />
        </div>

        {/* Dynamic Hours Input */}
        <div className="input-group">
          <label>{t[lang].hrs}</label>
          <input 
            type="number" 
            className="stylish-input" 
            value={hours} 
            onChange={(e) => setHours(e.target.value)} 
            placeholder="0"
          />
        </div>

        {/* Hourly Rate Input */}
        <div className="input-group">
          <label>{t[lang].rate} ({currency})</label>
          <input 
            type="number" 
            className="stylish-input" 
            value={rate} 
            onChange={(e) => setRate(e.target.value)} 
            placeholder="500"
          />
        </div>

        <button 
          className="btn-start" 
          style={{fontSize: '1.2rem'}}
          onClick={() => onCalculate({yarn, hours, rate, currency})}
        >
          {t[lang].calc}
        </button>
        
        <button className="back-link" onClick={onBack}>{t[lang].back}</button>
      </div>
    </div>
  );
}