import { AiFillCaretLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';
import { BsGear, BsMic } from 'react-icons/bs';
import { removeFilter } from '../../redux/Home/cvReducerRedux';
import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(removeFilter());
  };
  return (
    <div className="header p-4 d-flex justify-content-between">
      <div>
        <Link to="/" onClick={handelClick} className="back">
          <AiFillCaretLeft />
        </Link>
      </div>
      <div>
        <BsMic />
        <BsGear />
      </div>
    </div>
  );
}

export default Header;
