import React from 'react';

import s from './Result.module';

import { numberWithSpaces } from '../../utils';

const Result = ({ text, value }) => (
  <div className={s.resultContainer}>
    <label className={s.label}>{text}</label>
    <input className={s.input} type='text' value={numberWithSpaces(value)} />
    <i>&#8381;</i>
  </div>
);

export default Result;
