import React from 'react';

import s from './Container.module.scss';

const Container = () => {
  return (
    <main className={s.container}>
      <div className={s.headerWrap}>
        <h1>Container</h1>
      </div>
      <div className={s.inputContainer}></div>
      <div className={s.numbersAndBtnContainer}></div>
    </main>
  );
};

export default Container;
