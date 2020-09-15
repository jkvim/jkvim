import React from 'react'
import { Link } from "@reach/router";
import logo from '../assets/vim8.png';

import "./NavBar.css";

export default () => {
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "active navbar__links" } : {}
  }

  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo"> JKVIM </Link>
      <Link to="/kata-detail" className="navbar__links" getProps={isActive}>
        在线练习
      </Link>
    </div>
  );
};