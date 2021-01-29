/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Counter = (props) => {
  return (
    <div className="counter">
      <p>{props.count}</p>
    </div>
  );
};

export default Counter;
