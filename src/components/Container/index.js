import React from 'react';
import Input from '../../shared/Input';

import s from './Container.module.scss';

const inputsLabels = {
  carPrice: {
    text: 'Желаемая сумма кредита',
    minValue: '100000',
    maxValue: '6000000',
  },
  percentFee {
		'Первоначальный взнос',
    minValue: '10',
    maxValue: '60',
	},
	month: {
		'Срок лизинга',
		minValue: '1',
		maxValue: '60',
	}
};

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
};

export default Container;
