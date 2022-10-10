import React, { useState } from 'react';

import s from './Input.module';

const Input = ({ label }) => {
  const { text, minValue, maxValue, name } = label;

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
    <div className={s.divRow}>
      <label className={s.label} htmlFor={name}>
        {text}
      </label>
      <input
        className={s.inputNumber}
        name={name}
        type='number'
        min={minValue}
        max={maxValue}
        value={value}
        onChange={handleChangeInput}
      />
      <i>&#8381;</i>
      <input
        type='range'
        name={name}
        min={minValue}
        max={maxValue}
        step='1'
        value={value}
        onInput={handleChangeInputRange}
      />
    </div>
  );
};

export default Input;
