import React from "react";
import NavBar from "/@/layouts/NavBar";
import Footer from "/@/layouts/Footer";
import Layout from "/@/layouts/Layout";

import "./style.css";

const Home = (props) => {
  const header = <NavBar />
  const body = (
    <div>
      <div className="home__banner">
      </div>
    </div>
  );
  const footer = <Footer />

  return (
    <Layout header={header} body={body} footer={footer} />
  );
};

export default Home;
