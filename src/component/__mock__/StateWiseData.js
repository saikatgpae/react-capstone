import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { BiRightArrowCircle } from 'react-icons/bi';

function StateWiseData() {
  const object = [
    {
      state_name: 'AP',
      total: 34598,
      confirmed: 385,
      tested: 39848,
      vaccinated1: 20497,
      deceased: 34987,
      recovered: 348965,
    },
  ];

  return (
    <BrowserRouter>
      <div>
        <div className="details-arrow">
          <Link to="/detalis">
            <BiRightArrowCircle className="arrow-icon" />
          </Link>
        </div>
        <h6>
          State name :
          {object.stateName}
        </h6>
        <small>
          Total Confirmed case :
          {object.total}
        </small>
        <small>
          Total deceased :
          {object.deceased}
        </small>
        <small>
          Total recovered :
          {object.recovered}
        </small>
      </div>
    </BrowserRouter>
  );
}

export default StateWiseData;
