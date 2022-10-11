/* eslint-disable react/no-array-index-key */
import React, { useEffect, useReducer, useState } from 'react';
import Input from '../../shared/Input';
import { getContractSum, getInitialSum, getMonthlyPayment } from '../../utils';

import s from './Container.module';

const inputsLabels = [
  {
    name: 'price',
    text: 'Желаемая сумма кредита',
    minValue: '1000000',
    maxValue: '6000000',
  },
  {
    name: 'initial',
    text: 'Первоначальный взнос',
    minValue: '10',
    maxValue: '60',
  },
  {
    name: 'months',
    text: 'Срок лизинга',
    minValue: '1',
    maxValue: '60',
  },
];

const numberAndButtonsLabels = [
  {
    name: 'contractSum',
    text: 'Сумма договора лизинга',
  },
  {
    name: 'monhtlyPayment',
    text: 'Первоначальный взнос',
  },
];

const getInitialState = (data) => {
  const [price, initial, months] = data;

  const initialPrice = price.maxValue / 2;
  const initialValue = ((initial.maxValue / 2 / 100) * price.maxValue) / 2;
  const initialMonths = months.maxValue / 2;
  const initialPercent = initial.maxValue / 2;
  const initialMonthlyPayment = getMonthlyPayment(
    initialPrice,
    initialValue,
    initialMonths
  );
  const initialContractSum = getContractSum(
    initialValue,
    initialMonths,
    initialMonthlyPayment
  );

  return {
    price: initialPrice,
    initial: initialValue,
    months: initialMonths,
    percent: initialPercent,
    contractSum: parseInt(initialContractSum, 10),
    monhtlyPayment: parseInt(initialMonthlyPayment, 10),
  };
};

const reducer = (state, action) => {
  const initialValue = parseInt(getInitialSum(action.payload, state.price), 10);

  switch (action.type) {
    case 'price':
      return {
        ...state,
        price: action.payload,
        initial: parseInt((action.payload / 100) * state.percent, 10),
      };
    case 'initial':
      return { ...state, initial: initialValue };
    case 'months':
      return { ...state, months: action.payload };
    case 'percent':
      return {
        ...state,
        initial: initialValue,
        percent: action.payload,
      };
    case 'contractSum':
      return {
        ...state,
        contractSum: parseInt(
          getContractSum(state.initial, state.months, state.monhtlyPayment),
          10
        ),
      };
    case 'monhtlyPayment':
      return {
        ...state,
        monhtlyPayment: parseInt(
          getMonthlyPayment(state.price, state.initial, state.months),
          10
        ),
      };
    default:
      throw new Error();
  }
};

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
          <div key={index} className={s.test}>
            <Input
              label={label}
              dispatch={dispatch}
              initialValue={state[label.name]}
              percentValue={state.percent}
            />
          </div>
        ))}
      </div>
      <div className={s.numbersAndBtnContainer}>
        {numberAndButtonsLabels.map(({ text, name }, index) => (
          <div key={index} className={s.test1}>
            <label className={s.label}>{text}</label>
            <input className={s.input} type='number' value={state[name]} />
          </div>
        ))}
      </div>
    </form>
  );
};

export default Container;
