import React, { useState, useCallback } from "react";
import { Controlled } from "@jkvim/react-codemirror2";
import Layout from "../../layouts/Layout";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";

import './style.css'
import KataBoard from "../../components/KataBoard";

export interface Step {
  description: string
  position: {
    line: number,
    ch: number
  }
}

export default (props) => {
  const header = <NavBar />;
  const footer = <Footer />;
  const body = <KataBoard />;

  return <Layout header={header} body={body} footer={footer} />;
};
