import { useRef, useEffect } from 'react';

const countRender = () => {
  const counter = useRef(0);

  useEffect(() => {
    counter.current += 1;
  });

  console.log(`Count render : ${counter.current}`);

  return { counter: counter.current };
};

export default countRender;
