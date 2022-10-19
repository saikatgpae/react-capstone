import './Home.css';
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
  // console.log(states);
  const allTotal = states.map((state) => state.total.confirmed).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0,
  );
  // console.log(allTotal);

  return (
    <div>
      {/* <IndiaMap /> */}
      <h2>
        Total confirm Corona Virus Case in India :
        {allTotal}
      </h2>
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
