import React, { useState, useCallback } from 'react';

import useCount from './hooks/countRender';
import AppContext from './contexts/AppContext';
import Button from './components/Button';
import Counter from './components/Counter';

const App = () => {
  const counter = useCount();
  const [count, setCount] = useState(0);
  const decrement = useCallback(() => setCount((count) => count - 1), []);
  const increment = useCallback(() => setCount((count) => count + 1), []);
  console.log(`App render lai ${counter}`);

  return (
    <div className="App">
      <div className="d-flex">
        <AppContext.Provider
          value={{
            count,
            handleDecrement: decrement,
            handleIncrement: increment,
          }}
        >
          <Button />
          <Counter />
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default App;
