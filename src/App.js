import React, { useState, useCallback } from 'react';
import Counter from './Components/Counter';
import Button from './Components/Button';
import useCount from './hooks/countRender';

const App = () => {
  const counter = useCount();
  const [count, setCount] = useState(0);
  const decrement = useCallback(() => setCount((count) => count - 1), [
    setCount,
  ]);
  const increment = useCallback(() => setCount((count) => count + 1), [
    setCount,
  ]);
  console.log(`App render lai ${counter}`);

  return (
    <div className="App">
      <div className="d-flex">
        <Button handleDecrement={decrement} handleIncrement={increment} />
        <Counter count={count} />
      </div>
    </div>
  );
};

export default App;
