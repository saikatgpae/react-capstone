import React from 'react';
// import { Link } from 'react-router-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { BsGear, BsMic } from 'react-icons/bs';
import { AiFillCaretLeft } from 'react-icons/ai';

function Header() {
  return (
    <BrowserRouter>
      <div className="header p-4 d-flex justify-content-between">
        <div>
          <Link to="/" className="back">
            <AiFillCaretLeft />
          </Link>
        </div>
        <div>
          <BsMic />
          <BsGear />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Header;
