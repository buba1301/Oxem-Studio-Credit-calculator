import React from 'react';
import cn from 'classnames';

import s from './Input.module';

const Input = ({
  name,
  text,
  min,
  max,
  value,
  onChange,
  onFocus,
  onBlur,
  disabled,
}) => {
  const classNamesInput = cn({
    [s.inputNumber]: name !== 'percent',
    [s.inputPercent]: name === 'percent',
    [s.fee]: name === 'initial',
  });

  return (
    <>
      <label className={s.label} htmlFor={name}>
        {text}
      </label>
      <input
        className={classNamesInput}
        name={name}
        type='text'
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
      />
    </>
  );
};

export default Input;
