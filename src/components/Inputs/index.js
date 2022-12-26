import React, { useState } from 'react';
import cn from 'classnames';

import s from './Inputs.module';
import { getNumberFromString, numberWithSpaces } from '../../utils';
import InputRange from '../../shared/InputRange';
import Input from '../../shared/Input';
import Maybe from '../MayBe';

const Inputs = ({
  label,
  dispatch,
  initialValue,
  percentValue,
  isLoading,
}) => {
  const { text, minValue, maxValue, name } = label;

  const [value, setValue] = useState('');

  const moveDispatch = (type, payload) => {
    dispatch({ type, payload });
    setValue(payload);
  };

  const handleFocus = (e) => {
    const currentName = e.target.name;

    if (currentName === 'price') {
      moveDispatch(currentName, 0);
    } else {
      moveDispatch(currentName, minValue);
    }
  };

  const hadndleBlur = (e) => {
    const currentName = e.target.name;
    const currentValue = getNumberFromString(e.target.value);

    const isValidValue =
      currentValue >= minValue && currentValue <= maxValue;

    if (isValidValue) {
      moveDispatch(currentName, currentValue);
    } else if (currentValue < minValue) {
      moveDispatch(currentName, minValue);
    } else {
      moveDispatch(currentName, maxValue);
    }
  };

  const handleChangeInput = (e) => {
    const currentValue = getNumberFromString(e.target.value);
    const currentName = e.target.name;

    const minMonth = 1;

    if (currentValue < minMonth && currentName === 'months') {
      moveDispatch(currentName, minMonth);
      return;
    }

    moveDispatch(currentName, currentValue);
  };

  const handleChangeInputRange = (e) => {
    const currentValue = e.target.value;
    const currentName = e.target.name;

    moveDispatch(currentName, currentValue);
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
        <Input
          // className={classNamesForInputNumber}
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

        <Maybe test={name !== 'initial'}>
          <span className={s.nameSpan}>&#8381;</span>
        </Maybe>
        <Maybe test={name === 'initial'}>
          <Input
            // className={s.inputPercent}
            name='percent'
            type='text'
            min={minValue}
            max={maxValue}
            value={percentValue}
            onChange={handleChangeInput}
            onFocus={handleFocus}
            disabled={isLoading === 'loading'}
          />
          <span className={s.initialSpan}>&#8381;</span>
        </Maybe>

        <InputRange
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

export default Inputs;
