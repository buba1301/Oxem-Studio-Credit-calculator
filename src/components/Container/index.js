/* eslint-disable react/no-array-index-key */
import React, { useEffect, useReducer, useState } from 'react';
import Button from '../../shared/Button';
import Inputs from '../Inputs';

// TODO: убрать useEffect

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
  const [state, dispatch] = useReducer(
    reducer,
    getInitialState(inputsLabels)
  );

  const [isLoading, setIsLoading] = useState('idle');

  useEffect(() => {
    dispatch({ type: 'monhtlyPayment' });
    dispatch({ type: 'contractSum' });
  }, [state.price, state.initial, state.months]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setIsLoading('loading');

    await sendData(state, 'postData');

    setIsLoading('success');
  };

  return (
    <form className={s.container} onSubmit={handleFormSubmit}>
      <div className={s.headerWrap}>
        <p>{headerText}</p>
      </div>
      <div className={s.inputContainer}>
        {inputsLabels.map((label) => (
          <Inputs
            name={label.name}
            text={label.text}
            min={label.minValue}
            max={label.maxValue}
            key={label.name}
            dispatch={dispatch}
            initialValue={state[label.name]}
            percentValue={state.percent}
            isLoading={isLoading}
          />
        ))}
      </div>
      <div className={s.numbersAndBtnContainer}>
        {numberAndButtonsLabels.map(({ text, name }) => (
          <Result
            key={name}
            text={text}
            value={state[name]}
            name={name}
          />
        ))}
      </div>
      <Button text={buttonText} isLoading={isLoading} />
    </form>
  );
};

export default Container;
