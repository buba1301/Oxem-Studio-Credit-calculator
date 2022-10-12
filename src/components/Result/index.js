import React from 'react';

import s from './Result.module';

import { numberWithSpaces } from '../../utils';

const Result = ({ text, value, name }) => (
  <div className={s.resultContainer}>
    <label className={s.label} htmlFor={name}>
      {text}
    </label>
    <input
      className={s.input}
      type='text'
      name={name}
      value={numberWithSpaces(value) + '₽'}
    />
  </div>
);

export default Result;
