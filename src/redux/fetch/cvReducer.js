import axios from 'axios';

const API = 'https://data.covid19india.org/v4/min/data.min.json';
const GET_DATA = 'GET_DATA';

const fetchData = () => (dispatch) => {
  axios.get(API).then((res) => {
    const covidData = res.data;
    const cvData = Object.keys(covidData).map((key) => (
      Object.assign(covidData[key], { state: key })
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
    default:
      return state;
  }
};

export default dataReducer;
export { fetchData };
