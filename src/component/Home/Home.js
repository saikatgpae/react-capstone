import './Home.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, React } from 'react';
import { fetchData } from '../../redux/Home/cvReducerRedux';
import StateWiseData from '../stateWiseData/StateWiseData';

export default function Home() {
  const dispatch = useDispatch();
  const states = useSelector((presentState) => presentState.dataReducer);
  // console.log(states);
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
        <h2 className="p-2">
          Total confirm Corona Virus Cases in India :
          {allTotal}
        </h2>
      </div>
      <div className="select-dropdown">
        <select name="filter-state" id="state-filter" onChange={handelChange}>
          <option value="select">Select all State</option>
          {states.map((state) => (
            <option key={uuidv4()}>{state.state_name}</option>
          ))}
        </select>
      </div>
      <div className="state">
        {states.map((state) => (
          <StateWiseData
            key={states.indexOf(state)}
            stateName={state.state_name}
            total={state.total.confirmed}
            deceased={state.total.deceased}
            recovered={state.total.recovered}
          />
        ))}
      </div>
    </div>
  );
}
