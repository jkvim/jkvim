import React from "react";
import NavBar from "/@/layouts/NavBar";
import Footer from "/@/layouts/Footer";
import Layout from "/@/layouts/Layout";
import logo from '/@/assets/vim8.png';

import "./style.css";

const Home = () => {
  const header = <NavBar />
  const body = (
    <div>
      <div className="home__banner">
        <img src={logo} className="home__logo" />
      </div>
    </div>
  );
  const footer = <Footer />

  return (
    <Layout header={header} body={body} footer={footer} />
  );
};

export default Home;
