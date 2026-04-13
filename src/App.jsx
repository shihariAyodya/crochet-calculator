import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import CalculatorPage from './components/CalculatorPage';
import ResultsPage from './components/ResultsPage';

function App() {
  const [page, setPage] = useState('welcome');
  const [lang, setLang] = useState('en');
  const [resultData, setResultData] = useState(null);

  // This handles the math logic
  const handleCalculate = (data) => {
    const total = Number(data.yarn) + (Number(data.hours) * Number(data.rate));
    setResultData({ ...data, total });
    setPage('results');
  };

  return (
    <div className="app-container">
      
      {/* --- NEW PART STARTS HERE: The Global Language Switcher --- */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '10px', zIndex: 100 }}>
        <button 
          className={`btn-lang ${lang === 'en' ? 'active' : ''}`} 
          onClick={() => setLang('en')}
        >
          EN
        </button>
        <button 
          className={`btn-lang ${lang === 'si' ? 'active' : ''}`} 
          onClick={() => setLang('si')}
        >
          සිංහල
        </button>
      </div>
      {/* --- NEW PART ENDS --- */}

      {/* 1. Welcome Page (Updated to use global lang) */}
      {page === 'welcome' && (
        <WelcomePage 
          lang={lang} 
          onStart={() => setPage('calculator')} 
        />
      )}

      {/* 2. Calculator Page */}
      {page === 'calculator' && (
        <CalculatorPage 
          lang={lang} 
          onBack={() => setPage('welcome')} 
          onCalculate={handleCalculate} 
        />
      )}

      {/* 3. Results Page */}
      {page === 'results' && (
        <ResultsPage 
          lang={lang} 
          data={resultData} 
          onRestart={() => setPage('welcome')} 
          onBack={() => setPage('calculator')} 
        />
      )}
    </div>
  );
}

export default App;