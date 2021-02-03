import { useRef, useEffect } from 'react';

const countRender = () => {
  const counter = useRef(1);

  useEffect(() => {
    counter.current += 1;
  });

  return counter.current;
};

export default countRender;
