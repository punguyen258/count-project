/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  console.log({ count });
  return (
    <div className="App">
      <button onClick={() => setCount(count - 1)}>DECREMENT</button>
      <Counter count={count} />
      <button onClick={() => setCount(count + 1)}>INCREMENT</button>
    </div>
  );
};

export default App;
