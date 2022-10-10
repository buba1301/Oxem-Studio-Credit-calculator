import React from 'react';

import s from './Input.module';

const Input = ({ label }) => {
  const { text, min, max } = label;
  return (
    <label className={s.label}>
      {text}
      <input type='number' min={min} max={max} />
      <input type='range' min={min} max={max} />
    </label>
  );
};

export default Input;
