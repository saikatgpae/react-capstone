import React from 'react';

export default function StateWiseData(props) {
  // eslint-disable-next-line react/prop-types
  const { state, total } = props;
  return (
    <div>
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
