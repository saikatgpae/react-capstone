import React from 'react';
import { useSelector } from 'react-redux';
import './Details.css';

export default function Details() {
  document.querySelector('.back').style.display = 'block';
  const states = useSelector((presentState) => presentState.dataReducer);
  const filtered = states.filter((element) => element.filtered === 'true');
  const object = filtered[0];
  return (
    <div className="state-details p-5" data-testid="state-details-information">
      <h1 className="p-1 text-center p-4">
        {object.state_name}
        . state COVID information details.
      </h1>
      <h4 className="p-4">
        State name :
        {object.state_name}
      </h4>
      <div className="data p-4">
        <div className="delta p-4">
          <h3>Delta</h3>
          <small className="p-2">
            confirmed :
            {object.delta.confirmed}
          </small>
          <small className="p-2">
            tested :
            {object.delta.tested}
          </small>
          <small className="p-2">
            vaccinated :
            {object.delta.vaccinated1}
          </small>
        </div>
        <div className="delta7 p-4">
          <h3>Delta7</h3>
          <small className="p-2">
            confirmed :
            {object.delta7.confirmed}
          </small>
          <small className="p-2">
            tested :
            {object.delta7.tested}
          </small>
          <small className="p-2">
            vaccinated :
            {object.delta7.vaccinated1}
          </small>
        </div>
        <div className="total-case p-4">
          <h3>Total no of cases</h3>
          <small className="p-2">
            confirmed :
            {object.total.confirmed}
          </small>
          <small className="p-2">
            <br />
            deceased :
            {object.total.deceased}
          </small>
          <small className="p-2">
            <br />
            recovered :
            {object.total.recovered}
          </small>
          <small className="p-2">
            <br />
            tested :
            {object.total.tested}
          </small>
          <small className="p-2">
            <br />
            vaccinated1 :
            {object.total.vaccinated1}
          </small>
          <small className="p-2">
            vaccinated2 :
            {object.total.vaccinated2}
          </small>
        </div>
      </div>
    </div>
  );
}
