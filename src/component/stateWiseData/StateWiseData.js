import { Link } from 'react-router-dom';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { filterData } from '../../redux/Home/cvReducerRedux';
import './StateWiseData.css';

export default function StateWiseData(props) {
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const { stateName, total } = props;
  const handelClick = () => {
    dispatch(filterData(stateName));
  };
  return (
    <div className="each-state" id={stateName}>
      <h6>
        State name :
        {stateName}
      </h6>
      <small>
        Total Confirmed case :
        {total}
      </small>
      <div className="details-arrow">
        <Link to="/detalis" onClick={handelClick}>
          <BiRightArrowCircle />
        </Link>
      </div>
    </div>
  );
}
