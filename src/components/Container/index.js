/* eslint-disable react/no-array-index-key */
import React, { useEffect, useReducer, useState } from 'react';
import Input from '../../shared/Input';

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
  'Сумма договора лизинга',
  'Первоначальный взнос',
  'Оставить заявку',
];

const getInitialState = (data) => {
  const [price, initial, months] = data;

  return {
    price: price.maxValue / 2,
    initial: ((initial.maxValue / 2 / 100) * price.maxValue) / 2,
    months: months.maxValue / 2,
    percent: initial.maxValue / 2,
  };
};

const reducer = (state, action) => {
  const initialValue = parseInt((action.payload / 100) * state.price, 10);

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
    default:
      throw new Error();
  }
};

const Container = () => {
  const [state, dispatch] = useReducer(reducer, getInitialState(inputsLabels));
  return (
    <main className={s.container}>
      <div className={s.headerWrap}>
        <p>Расчитайте стоимость автомобиля в лизинг</p>
      </div>
      <form className={s.inputContainer}>
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
      </form>
      <div className={s.numbersAndBtnContainer}>
        {numberAndButtonsLabels.map((elem, index) => (
          <div key={index} className={s.test1}>
            {elem}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Container;
