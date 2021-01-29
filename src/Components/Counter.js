/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  console.log('Counter');
  return (
    <div className="counter">
      <p>{props.count}</p>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.string.isRequired,
};

export default Counter;
