import React from 'react';
import PropTypes from 'prop-types';
import useCount from '../hooks/countRender';

const Button = (props) => {
  const { count, setCount } = props;
  const counter = useCount();
  console.log(`Button render lai ${counter}`);

  return (
    <div className="counter">
      <button type="button" onClick={() => setCount(count - 1)}>
        decrement
      </button>
      <button type="button" onClick={() => setCount(count + 1)}>
        increment
      </button>
    </div>
  );
};

Button.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default Button;
