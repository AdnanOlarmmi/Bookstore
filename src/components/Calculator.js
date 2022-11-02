/*eslint-disable*/
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const { total, next, operation } = state;

  const calculateValues = (e) => {
    const calcButton = e.target.innerHTML;
    const values = state;
    setState(calculate(values, calcButton));
  };

  return (
    <main className="calculator">
      <h4>Let's do some Math</h4>
      <table className="input" cellSpacing={0}>
        <tr>
          <td className="output" colSpan={4}>
            { next || operation || total || 0 }
          </td>
        </tr>
        <tr>
          <td onClick={calculateValues}>AC</td>
          <td onClick={calculateValues}>+/-</td>
          <td onClick={calculateValues}>%</td>
          <td onClick={calculateValues}>÷</td>
        </tr>
        <tr>
          <td onClick={calculateValues}>7</td>
          <td onClick={calculateValues}>8</td>
          <td onClick={calculateValues}>9</td>
          <td onClick={calculateValues}>x</td>
        </tr>
        <tr>
          <td onClick={calculateValues}>4</td>
          <td onClick={calculateValues}>5</td>
          <td onClick={calculateValues}>6</td>
          <td onClick={calculateValues}>-</td>
        </tr>
        <tr>
          <td onClick={calculateValues}>1</td>
          <td onClick={calculateValues}>2</td>
          <td onClick={calculateValues}>3</td>
          <td onClick={calculateValues}>+</td>
        </tr>
        <tr>
          <td colSpan={2} onClick={calculateValues}>0</td>
          <td onClick={calculateValues}>.</td>
          <td onClick={calculateValues}>=</td>
        </tr>
      </table>
    </main>
  );
};

export default Calculator;
