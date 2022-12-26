import React from 'react';
import cn from 'classnames';

import s from './Input.module';
import Maybe from '../../components/MayBe';

const Input = ({
  name,
  text,
  type,
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
      <Maybe test={name !== 'percent'}>
        <label className={s.label} htmlFor={name}>
          {text}
        </label>
      </Maybe>

      <input
        className={classNamesInput}
        name={name}
        type={type}
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
