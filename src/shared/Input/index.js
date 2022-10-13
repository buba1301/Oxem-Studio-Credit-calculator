import React, { useState } from 'react';
import cn from 'classnames';

import s from './Input.module';
import { getNumberFromString, numberWithSpaces } from '../../utils';

const Input = ({ label, dispatch, initialValue, percentValue, isLoading }) => {
  const { text, minValue, maxValue, name } = label;

  const [value, setValue] = useState('');

  const handleFocus = (e) => {
    const currentName = e.target.name;

    if (currentName === 'price') {
      dispatch({ type: currentName, payload: '' });
      setValue(minValue);
    } else {
      dispatch({ type: currentName, payload: minValue });
      setValue(minValue);
    }
  };

  const hadndleBlur = (e) => {
    const currentName = e.target.name;
    const currentValue = getNumberFromString(e.target.value);

    const isValidValue = currentValue >= minValue && currentValue <= maxValue;

    if (isValidValue) {
      dispatch({ type: currentName, payload: currentValue });
      setValue(currentValue);
    } else if (currentValue < minValue) {
      dispatch({ type: currentName, payload: minValue });
      setValue(minValue);
    } else {
      dispatch({ type: currentName, payload: maxValue });
      setValue(maxValue);
    }
  };

  const handleChangeInput = (e) => {
    const currentValue = getNumberFromString(e.target.value);
    const currentName = e.target.name;

    const minMonth = 1;

    if (currentValue < minMonth && currentName === 'months') {
      setValue(minMonth);
      dispatch({ type: currentName, payload: minMonth });
      return;
    }

    setValue(currentValue);
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
          onFocus={handleFocus}
          onBlur={hadndleBlur}
          disabled={isLoading === 'loading'}
        />
        {name === 'price' && <span className={s.nameSpan}>&#8381;</span>}
        {name === 'initial' && (
          <input
            className={s.inputPercent}
            name='percent'
            type='text'
            min={minValue}
            max={maxValue}
            value={percentValue}
            onChange={handleChangeInput}
            onFocus={handleFocus}
            disabled={isLoading === 'loading'}
          />
        )}
        {name === 'initial' && <span className={s.initialSpan}>&#8381;</span>}
        <input
          className={s.inputRange}
          type='range'
          name={name === 'initial' ? 'percent' : name}
          min={minValue}
          max={maxValue}
          step='1'
          value={value}
          onInput={handleChangeInputRange}
          disabled={isLoading === 'loading'}
        />
      </div>
    </div>
  );
};

export default Input;
