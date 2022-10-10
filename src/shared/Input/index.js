import React, { useState } from 'react';

import s from './Input.module';

const Input = ({ label }) => {
  const { text, minValue, maxValue } = label;

  const beginvalue = maxValue / 2;

  const [value, setValue] = useState(beginvalue);

  const handleChangeInput = (e) => {
    const currentValue = e.target.value;
    setValue(currentValue);
  };

  const handleChangeInputRange = (e) => {
    setValue(e.target.value);
  };

  return (
    <label className={s.label}>
      {text}
      <input
        type='number'
        min={minValue}
        max={maxValue}
        value={value}
        onChange={handleChangeInput}
      />
      <input
        type='range'
        min={minValue}
        max={maxValue}
        step='1'
        value={value}
        onInput={handleChangeInputRange}
      />
    </label>
  );
};

export default Input;
