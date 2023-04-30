import './App.css';

import React, { useState } from 'react';

import Rate from './components/rate';
import Result from './components/result';

function App() {
  const [rateResult, setRateResult] = useState<number>(0);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  const handleRate = (rateValue: number) => {
    setRateResult(rateValue);
  };
  const handlePage = () => {
    setIsSubmited(true);
  };
  return (
    <div className="container">
      {isSubmited === false ? <Rate handlePage={handlePage} handleRate={handleRate} /> : <Result result={rateResult} />}
    </div>
  );
}

export default App;
