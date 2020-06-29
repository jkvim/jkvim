import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import Layout from "../../layouts/Layout";
import ShortcutList from "../../components/ShortcutList/index";

import { generalShortcut, operators, textObjects, misc } from "./cheatsheet";

import "./index.css";

const CheatSheet = (props) => {
  const header = <NavBar />;
  console.log(generalShortcut);
  const body = (
    <div>
      <div className="cheat-sheet__section">
        <div className="cheat-sheet__section-body">
          {generalShortcut.map((table, index) => (
            <ShortcutList
              title={table.title}
              groups={table.groups}
              index={index}
              key={table.title}
              bottomTips={table.bottomTips}
            />
          ))}
        </div>
      </div>
      <div className="cheat-sheet__section">
        <div className="cheat-sheet__section-title">Operator</div>
        <div className="cheat-sheet__section-body">
          {operators.map((table, index) => (
            <ShortcutList
              title={table.title}
              groups={table.groups}
              index={index}
              key={table.title}
              bottomTips={table.bottomTips}
            />
          ))}
        </div>
      </div>
      <div className="cheat-sheet__section">
        <div className="cheat-sheet__section-title">Text objects</div>
        <div className="cheat-sheet__section-body">
          {textObjects.map((table, index) => (
            <ShortcutList
              title={table.title}
              groups={table.groups}
              index={index}
              key={table.title}
              bottomTips={table.bottomTips}
            />
          ))}
        </div>
      </div>
      <div className="cheat-sheet__section">
        <div className="cheat-sheet__section-title">Misc</div>
        <div className="cheat-sheet__section-body">
          {misc.map((table, index) => (
            <ShortcutList
              title={table.title}
              groups={table.groups}
              index={index}
              key={table.title}
              bottomTips={table.bottomTips}
            />
          ))}
        </div>
      </div>
      <div className="cheat-sheet__section">
        <div className="cheat-sheet__section-title">Reference</div>
        <div className="cheat-sheet__section-body">
          <ul>
            <li>
              <a href="https://devhints.io/vim">Vim CheatSheet</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  const footer = <Footer />;

  return <Layout header={header} body={body} footer={footer} />;
};

export default CheatSheet;
