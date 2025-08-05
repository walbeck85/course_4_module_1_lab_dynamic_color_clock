import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import './App.css'

function App() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <h1>Dynamic Color Clock</h1>
      <p>{format(now, 'PPpp')}</p>
    </div>
  );
}
    

export default App
