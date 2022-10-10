/* eslint-disable react/no-array-index-key */
import React from 'react';
import Input from '../../shared/Input';

import s from './Container.module';

const inputsLabels = [
  {
    carPrice: {
      text: 'Желаемая сумма кредита',
      minValue: '100000',
      maxValue: '6000000',
    },
  },
  {
    percentFee: {
      text: 'Первоначальный взнос',
      minValue: '10',
      maxValue: '60',
    },
  },
  {
    month: {
      text: 'Срок лизинга',
      minValue: '1',
      maxValue: '60',
    },
  },
];

const numberAndButtonsLabels = [
  'Сумма договора лизинга',
  'Первоначальный взнос',
  'Оставить заявку',
];

const Container = () => (
  <main className={s.container}>
    <div className={s.headerWrap}>
      <p>Расчитайте стоимость автомобиля в лизинг</p>
    </div>
    <form className={s.inputContainer}>
      {inputsLabels.map(({ label }, index) => (
        <div key={index} className={s.test}>
          <Input label={label} />
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

export default Container;
