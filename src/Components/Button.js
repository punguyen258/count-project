import React, { memo } from 'react';
import PropTypes from 'prop-types';
import useCount from '../hooks/countRender';

const Button = (props) => {
  const counter = useCount();

  console.log(`Button render lai ${counter}`);
  return (
    <div className="counter">
      <button type="button" onClick={props.handleDecrement}>
        decrement
      </button>
      <button type="button" onClick={props.handleIncrement}>
        increment
      </button>
    </div>
  );
};

Button.propTypes = {
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default memo(Button);
