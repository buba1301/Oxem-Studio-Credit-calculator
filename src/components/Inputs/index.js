import React, { useState } from 'react';

import s from './Inputs.module';
import { getNumberFromString, numberWithSpaces } from '../../utils';
import InputRange from '../../shared/InputRange';
import Input from '../../shared/Input';
import Maybe from '../MayBe';

const Inputs = ({
  name,
  text,
  min,
  max,
  dispatch,
  initialValue,
  percentValue,
  isLoading,
}) => {
  // const { text, minValue, maxValue, name } = label;

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
      moveDispatch(currentName, min);
    }
  };

  const hadndleBlur = (e) => {
    const currentName = e.target.name;
    const currentValue = getNumberFromString(e.target.value);

    const isValidValue = currentValue >= min && currentValue <= max;

    if (isValidValue) {
      moveDispatch(currentName, currentValue);
    } else if (currentValue < min) {
      moveDispatch(currentName, min);
    } else {
      moveDispatch(currentName, max);
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

  const disabled = isLoading === 'loading';

  return (
    <div className={s.divRow}>
      <div className={s.inputNumberWrap}>
        <Input
          name={name}
          type='text'
          text={text}
          min={min}
          max={max}
          value={numberWithSpaces(initialValue)}
          onChange={handleChangeInput}
          onFocus={handleFocus}
          onBlur={hadndleBlur}
          disabled={disabled}
        />

        <Maybe test={name !== 'initial'}>
          <span className={s.nameSpan}>&#8381;</span>
        </Maybe>
        <Maybe test={name === 'initial'}>
          <Input
            name='percent'
            type='text'
            min={min}
            max={max}
            value={percentValue}
            onChange={handleChangeInput}
            onFocus={handleFocus}
            disabled={disabled}
          />
          <span className={s.initialSpan}>&#8381;</span>
        </Maybe>

        <InputRange
          type='range'
          name={name === 'initial' ? 'percent' : name}
          min={min}
          max={max}
          step='1'
          value={value}
          onInput={handleChangeInputRange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default Inputs;
