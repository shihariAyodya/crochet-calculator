import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import CalculatorPage from './components/CalculatorPage';
import ResultsPage from './components/ResultsPage';

function App() {
  const [page, setPage] = useState('welcome');
  const [lang, setLang] = useState('en');
  const [resultData, setResultData] = useState(null);

  const handleStart = (selectedLang) => {
    setLang(selectedLang);
    setPage('calculator');
  };

  const handleCalculate = (data) => {
    const total = Number(data.yarn) + (Number(data.hours) * Number(data.rate));
    setResultData({ ...data, total });
    setPage('results');
  };

  return (
    <div className="app-container">
      {page === 'welcome' && <WelcomePage onStart={handleStart} />}
      {page === 'calculator' && (
        <CalculatorPage 
          lang={lang} 
          onBack={() => setPage('welcome')} 
          onCalculate={handleCalculate} 
        />
      )}
      {page === 'results' && (
  <ResultsPage 
    lang={lang} 
    data={resultData} 
    onRestart={() => setPage('welcome')} 
    onBack={() => setPage('calculator')} // This is the new line
  />
)}
    </div>
  );
}

export default App;