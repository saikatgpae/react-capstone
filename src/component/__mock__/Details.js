import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function Details() {
  const object = [
    {
      state_name: 'AP',
      confirmed: 385,
      tested: 39848,
      vaccinated1: 20497,
    },
  ];

  return (
    <BrowserRouter>
      <h3>state COVID information details.</h3>
      <div>
        <h4>
          State name :
          {object.state_name}
        </h4>
        <h3>Delta</h3>
        <small className="p-2">
          confirmed :
          {object.confirmed}
        </small>
        <small className="p-2">
          tested :
          {object.tested}
        </small>
        <small className="p-2">
          vaccinated :
          {object.vaccinated1}
        </small>
      </div>
    </BrowserRouter>
  );
}

export default Details;
