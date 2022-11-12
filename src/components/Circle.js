import React from 'react';

const Circle = () => (
  <div className="circleCon flex-row">
    <div className="circle-wrap">
      <div className="circle">
        <div className="mask full">
          <div className="fill" />
        </div>
        <div className="mask half">
          <div className="fill" />
        </div>
        <div className="inside-circle" />
      </div>
    </div>
    <div className="progress">
      <p className="percentage">75%</p>
      <p className="completed">Completed</p>
    </div>
  </div>
);

export default Circle;
