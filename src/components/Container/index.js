/* eslint-disable react/no-array-index-key */
import React, { useEffect, useReducer, useState } from 'react';
import Button from '../../shared/Button';
import Input from '../../shared/Input';
import { numberWithSpaces } from '../../utils';

import {
  inputsLabels,
  numberAndButtonsLabels,
  buttonText,
} from '../../utils/elements';

import { getInitialState, reducer } from '../../store';

import s from './Container.module';

const Container = () => {
  const [state, dispatch] = useReducer(reducer, getInitialState(inputsLabels));

  useEffect(() => {
    dispatch({ type: 'contractSum' });
    dispatch({ type: 'monhtlyPayment' });
  }, [state.price, state.initial, state.months]);

  return (
    <form className={s.container}>
      <div className={s.headerWrap}>
        <p>Расчитайте стоимость автомобиля в лизинг</p>
      </div>
      <div className={s.inputContainer}>
        {inputsLabels.map((label, index) => (
          <Input
            label={label}
            key={index}
            dispatch={dispatch}
            initialValue={state[label.name]}
            percentValue={state.percent}
          />
        ))}
      </div>
      <div className={s.numbersAndBtnContainer}>
        {numberAndButtonsLabels.map(({ text, name }, index) => (
          <div key={index} className={s.resultContainer}>
            <label className={s.label}>{text}</label>
            <input
              className={s.input}
              type='text'
              value={numberWithSpaces(state[name])}
            />
            <i>&#8381;</i>
          </div>
        ))}
      </div>
      <Button text={buttonText} />
    </form>
  );
};

export default Container;
