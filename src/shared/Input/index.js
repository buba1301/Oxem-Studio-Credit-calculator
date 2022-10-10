import React, { useState } from 'react';
import cn from 'classnames';

import s from './Input.module';

const Input = ({ label }) => {
  const { text, minValue, maxValue, name, currency } = label;

  const beginvalue = maxValue / 2;

  const [value, setValue] = useState(beginvalue);

  const handleChangeInput = (e) => {
    const currentValue = e.target.value;
    setValue(currentValue);
  };

  const handleChangeInputRange = (e) => {
    setValue(e.target.value);
  };

  const classNamesForInputNumber = cn(s.inputNumber, {
    [s.fee]: name === 'fee',
  });

  return (
    <div className={s.divRow}>
      <label className={s.label} htmlFor={name}>
        {text}
      </label>
      <input
        className={classNamesForInputNumber}
        name={name}
        type='number'
        min={minValue}
        max={maxValue}
        value={value}
        onChange={handleChangeInput}
      />
      {name === 'sum' && <i>&#8381;</i>}
      {name === 'fee' && (
        <input
          className={s.inputPercent}
          name={name}
          type='number'
          min={minValue}
          max={maxValue}
          value={value}
          onChange={handleChangeInput}
        />
      )}
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
