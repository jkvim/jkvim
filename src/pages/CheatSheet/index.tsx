
import React from "react";
import NavBar from "/@/layouts/NavBar";
import Footer from "/@/layouts/Footer";
import Layout from "/@/layouts/Layout";

import "./index.css";
import ShortcutList from "/@/components/ShortcutList/ShortcutList";

const CheatSheet = (props) => {
  const groups = [
    {
      name: "",
      shortcuts: [{
        key: ":qa",
        description: "Close all files"
      }, {
        key: ":qa!",
        description: "Close all files, abandon changes"
      }]
    }
  ]

  const header = <NavBar />
  const body = (
    <div>
      <div className="cheat-sheet__banner">
        <ShortcutList title="Exiting" groups={groups} />        
      </div>
    </div>
  );
  const footer = <Footer />

  return (
    <Layout header={header} body={body} footer={footer} />
  );
};

export default CheatSheet;
