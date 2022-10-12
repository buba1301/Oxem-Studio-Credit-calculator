import React, { useState } from 'react';
import cn from 'classnames';

import s from './Input.module';
import { numberWithSpaces } from '../../utils';

const Input = ({ label, dispatch, initialValue, percentValue }) => {
  const { text, minValue, maxValue, name } = label;

  const [value, setValue] = useState('');

  const handleChangeInput = (e) => {
    const currentValue = Number(e.target.value.replace(/\s+/g, ''));
    const currentName = e.target.name;
    dispatch({ type: currentName, payload: currentValue });
  };

  const handleChangeInputRange = (e) => {
    const currentValue = e.target.value;
    const currentName = e.target.name;
    setValue(currentValue);
    dispatch({ type: currentName, payload: currentValue });
  };

  const classNamesForInputNumber = cn(s.inputNumber, {
    [s.fee]: name === 'initial',
  });

  return (
    <div className={s.divRow}>
      <div className={s.inputNumberWrap}>
        <label className={s.label} htmlFor={name}>
          {text}
        </label>
        <input
          className={classNamesForInputNumber}
          name={name}
          type='text'
          min={minValue}
          max={maxValue}
          value={numberWithSpaces(initialValue)}
          onChange={handleChangeInput}
        />
        {name === 'price' && <i>&#8381;</i>}
        {name === 'initial' && (
          <input
            className={s.inputPercent}
            name='percent'
            type='text'
            min={minValue}
            max={maxValue}
            value={percentValue}
            onChange={handleChangeInput}
          />
        )}
        <input
          className={s.inputRange}
          type='range'
          name={name === 'initial' ? 'percent' : name}
          min={minValue}
          max={maxValue}
          step='1'
          value={value}
          onInput={handleChangeInputRange}
        />
      </div>
    </div>
  );
};

export default Input;
