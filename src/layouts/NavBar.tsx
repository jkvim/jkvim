import React from 'react'
import { Link } from "@reach/router";
import logo from '/@/assets/vim8.png';

import "./NavBar.css";

export default () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} className="navbar__logo-icon" />
      </div>
      <div className="navbar__links">
        <Link to="/cheat-sheet">快捷键清单</Link>
        <Link to="/kata-list">在线练习列表</Link>
      </div>
    </div>
  );
};