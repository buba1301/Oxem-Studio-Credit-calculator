/* eslint-disable react/no-array-index-key */
import React, { useEffect, useReducer, useState } from 'react';
import Button from '../../shared/Button';
import Input from '../../shared/Input';

import {
  headerText,
  inputsLabels,
  numberAndButtonsLabels,
  buttonText,
} from '../../utils/elements';

import { getInitialState, reducer } from '../../store';
import { sendData } from '../../service/fetchData';

import s from './Container.module';
import Result from '../Result';

const Container = () => {
  const [state, dispatch] = useReducer(reducer, getInitialState(inputsLabels));
  const [isLoading, setIsLoading] = useState('idle');

  useEffect(() => {
    dispatch({ type: 'contractSum' });
    dispatch({ type: 'monhtlyPayment' });
  }, [state.price, state.initial, state.months]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setIsLoading('loading');

    const response = await sendData(state, 'postData');

    setIsLoading('success');

    console.log('Отправка!', response);
  };

  return (
    <form className={s.container} onSubmit={handleFormSubmit}>
      <div className={s.headerWrap}>
        <p>{headerText}</p>
      </div>
      <div className={s.inputContainer}>
        {inputsLabels.map((label, index) => (
          <Input
            label={label}
            key={index}
            dispatch={dispatch}
            initialValue={state[label.name]}
            percentValue={state.percent}
            isLoading={isLoading}
          />
        ))}
      </div>
      <div className={s.numbersAndBtnContainer}>
        {numberAndButtonsLabels.map(({ text, name }, index) => (
          <Result key={index} text={text} value={state[name]} name={name} />
        ))}
      </div>
      <Button text={buttonText} isLoading={isLoading} />
    </form>
  );
};

export default Container;
