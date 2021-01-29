import React, { useState } from 'react';
import Counter from './Components/Counter';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  console.log('App');
  return (
    <div className="App">
      <button type="button" onClick={() => setCount(count - 1)}>
        DECREMENT
      </button>
      <Counter count={count} />
      <button type="button" onClick={() => setCount(count + 1)}>
        INCREMENT
      </button>
    </div>
  );
};

export default App;
