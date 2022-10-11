import React from 'react';

import s from './Button.module';

const Button = ({ text }) => (
  <div className={s.btnContainer}>
    <button type='submit' className={s.button}>
      {text}
    </button>
  </div>
);

export default Button;
