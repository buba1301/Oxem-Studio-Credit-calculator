import React from 'react';

import s from './Container.module.scss';

const inputsLabels = [
  'Желаемая сумма кредита',
  'Первоначальный взнос',
  'Срок лизинга',
];

const numberAndButtonsLabels = [
  'Сумма договора лизинга',
  'Первоначальный взнос',
  'Оставить заявку',
];

const Container = () => {
  return (
    <main className={s.container}>
      <div className={s.headerWrap}>
        <p>Расчитайте стоимость автомобиля в лизинг</p>
      </div>
      <div className={s.inputContainer}>
        {inputsLabels.map((elem, index) => (
          <div key={index} className={s.test}>
            <span>{elem}</span>
          </div>
        ))}
      </div>
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
