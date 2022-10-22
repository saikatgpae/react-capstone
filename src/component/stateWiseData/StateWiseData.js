import { Link } from 'react-router-dom';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { filterData } from '../../redux/Home/cvReducerRedux';
import './StateWiseData.css';

export default function StateWiseData(props) {
  const dispatch = useDispatch();
  const {
    // eslint-disable-next-line react/prop-types
    stateName, total, deceased, recovered,
  } = props;
  const handelClick = () => {
    dispatch(filterData(stateName));
  };
  return (
    <div className="each-state p-3" id={stateName}>
      <div className="details-arrow">
        <Link to="/detalis" onClick={handelClick}>
          <BiRightArrowCircle className="arrow-icon" />
        </Link>
      </div>
      <h6>
        State name :
        {stateName}
      </h6>
      <small>
        Total Confirmed case :
        {total}
      </small>
      <small>
        Total deceased :
        {deceased}
      </small>
      <small>
        Total recovered :
        {recovered}
      </small>
    </div>
  );
}
