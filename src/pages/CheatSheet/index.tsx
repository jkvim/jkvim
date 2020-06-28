
import React from "react";
import NavBar from "/@/layouts/NavBar";
import Footer from "/@/layouts/Footer";
import Layout from "/@/layouts/Layout";

import "./index.css";

const CheatSheet = (props) => {
  const header = <NavBar />
  const body = (
    <div>
      <div className="cheat-sheet__banner">
        CheatSheet        
      </div>
    </div>
  );
  const footer = <Footer />

  return (
    <Layout header={header} body={body} footer={footer} />
  );
};

export default CheatSheet;
