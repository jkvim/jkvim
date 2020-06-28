import React from 'react'
import { Link } from "@reach/router";

import "./NavBar.css";

export default () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">JKVIM</Link>
      </div>
      <div className="navbar__links">
        <Link to="/cheat-sheet">快捷键清单</Link>
        <Link to="/kata-list">在线练习列表</Link>
      </div>
    </div>
  );
};