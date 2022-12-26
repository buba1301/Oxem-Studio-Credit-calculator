import React from 'react';

import s from './InputRange.module';

const InputRange = ({ name, min, max, value, onInput, disabled }) => (
  <input
    className={s.inputRange}
    type='range'
    name={name}
    min={min}
    max={max}
    step='1'
    value={value}
    onInput={onInput}
    disabled={disabled}
  />
);

export default InputRange;
