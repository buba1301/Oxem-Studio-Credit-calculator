import React from 'react';

import s from './Button.module';

const Button = ({ text }) => {
  return (
    <div className={s.btnContainer}>
      <button type='submit' className={s.button} disabled={true}>
        {text}
      </button>
    </div>
  );
};

export default Button;
