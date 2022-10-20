import React from 'react';

export default function StateWiseData(props) {
  // eslint-disable-next-line react/prop-types
  const { state, total } = props;
  return (
    <div className="each-state p-2" id={state}>
      <h3>
        State name :
        {state}
      </h3>
      <h2>
        Total Confirmed case :
        {total}
      </h2>
    </div>
  );
}
