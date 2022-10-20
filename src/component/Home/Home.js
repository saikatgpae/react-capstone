import './Home.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, React } from 'react';
import { fetchData } from '../../redux/fetch/cvReducer';
import StateWiseData from '../stateData/StateWiseData';
// import IndiaMap from '../IndiaMap/IndiaMap';

export default function Home() {
  const dispatch = useDispatch();
  const states = useSelector((presentState) => presentState.dataReducer);
  useEffect(() => {
    if (states.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, states.length]);
  const allTotal = states.map((state) => state.total.confirmed).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0,
  );
  const handelChange = (e) => {
    const divId = e.target.value;
    if (divId === 'select') {
      document.querySelectorAll('.each-state').forEach((element) => {
        // eslint-disable-next-line no-param-reassign
        element.style.display = 'block';
      });
    } else {
      const currentDiv = document.getElementById(divId);
      document.querySelectorAll('.each-state').forEach((element) => {
      // eslint-disable-next-line no-param-reassign
        element.style.display = 'none';
      });
      currentDiv.style.display = 'block';
    }
  };
  return (
    <div className="">
      <div className="country p-4">
        <div className="map">
          India Map
        </div>
        <h2 className="p-5">
          Total confirm Corona Virus Case in India :
          {allTotal}
        </h2>
      </div>
      <select name="filter-state" id="state-filter" onChange={handelChange}>
        <option value="select">Select all State</option>
        {states.map((state) => (
          <option key={uuidv4()}>{state.state}</option>
        ))}
      </select>
      <div className="state">
        {states.map((state) => (
          <StateWiseData
            key={states.indexOf(state)}
            state={state.state}
            total={state.total.confirmed}
          />
        ))}
      </div>
    </div>
  );
}
