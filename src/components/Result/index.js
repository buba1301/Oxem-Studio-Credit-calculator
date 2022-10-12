import React from 'react';

import s from './Result.module';

import { numberWithSpaces } from '../../utils';

const Result = ({ text, value, name }) => (
  <div className={s.resultContainer}>
    <span className={s.label} htmlFor={name}>
      {text}
    </span>
    <span className={s.input} type='text' name={name}>
      {numberWithSpaces(value)}
      <span className={s.ruble}> &#8381;</span>
    </span>
  </div>
);

export default Result;
