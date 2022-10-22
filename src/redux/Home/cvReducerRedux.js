import axios from 'axios';

const API = 'https://data.covid19india.org/v4/min/data.min.json';
const GET_DATA = 'GET_DATA';
const FILTER_DATA = 'FILTER_DATA';
const REMOVE_FILTER = 'REMOVE_FILTER';

const filterData = (stateName) => (dispatch) => {
  dispatch({ type: FILTER_DATA, stateName });
};

const removeFilter = () => (dispatch) => {
  dispatch({ type: REMOVE_FILTER });
};

const fetchData = () => (dispatch) => {
  axios.get(API).then((res) => {
    const covidData = res.data;
    const cvData = Object.keys(covidData).map((key) => (
      Object.assign(covidData[key], { state_name: key, filtered: '' })
    ));
    dispatch({
      type: GET_DATA,
      cvData,
    });
  });
};

const initialState = [];
// eslint-disable-next-line default-param-last
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [
        ...action.cvData,
      ];
    case FILTER_DATA:
      return [
        ...state.map((element) => {
          if (element.state_name === action.stateName) {
            return { ...element, filtered: 'true' };
          }
          return { ...element };
        }),
      ];
    case REMOVE_FILTER:
      return [
        ...state.map((element) => ({ ...element, filtered: '' })),
      ];
      // return { ...element, filtered: 'true' };
    default:
      return state;
  }
};

export default dataReducer;
export { fetchData, filterData, removeFilter };
