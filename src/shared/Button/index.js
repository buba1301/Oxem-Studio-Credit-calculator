import React from 'react';
import cn from 'classnames';

import s from './Button.module';

const Button = ({ text, isLoading }) => (
  <div className={s.btnContainer}>
    <button
      type='submit'
      className={s.button}
      disabled={isLoading === 'loading'}
    >
      {text}
    </button>
  </div>
);

export default Button;
