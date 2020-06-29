import React, { useState } from "react";
import NavBar from '../../layouts/NavBar'
import Footer from '../../layouts/Footer'
import Layout from '../../layouts/Layout'
import KataBoard from "../../components/KataBoard";

import "./style.css";
import ShortcutList from "../../components/ShortcutList";
import CheatSheet from "../CheatSheet";

const Home = (props) => {
  const header = <NavBar />;
  const body = (
    <div className="home__body">
      {/* <ul className="kata-list">
        <li className="kata-item">
          <div className="kata-title">快速移动</div>
          <div className="kata-description">学习如何在vim中快速移动</div>
          <div className="kata-tags">
            <span className="kata-tags-item">#移动</span>
          </div>
          <KataBoard />
        </li>
      </ul> */}
    </div>
  );
  const footer = <Footer />;

  return null
};

export default Home;
