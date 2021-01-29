import React, { useState } from 'react';
import Counter from './Components/Counter';
import Button from './Components/Button';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  console.log('App');

  return (
    <div className="App">
      <Button onSubmit={decrement} text="DECREMENT" />
      <Counter count={count} />
      <Button onSubmit={increment} text="INCREMENT" />
    </div>
  );
};

export default App;
