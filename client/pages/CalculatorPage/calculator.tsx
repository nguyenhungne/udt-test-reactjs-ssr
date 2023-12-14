import React from 'react';
import { observer } from 'mobx-react';
import './calculatorPage.scss';
const CalculatorPage = () => {
  return (
    <div className={'container'}>
      <div className={'wrapper'}>
          <button className={'button-top button-red'}></button>
          <button className={'button-top button-orange'}></button>
          <button className={'button-top button-green'}></button>
        <div className={'screen'}>
          {/* input */}
          <div>0</div>
        </div>
        <p>dsadsadjhsajdjhsajdsakdsakjdsajd</p>
      </div>
    </div>
  );
};

export default observer(CalculatorPage);
