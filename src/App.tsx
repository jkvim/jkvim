import React from 'react'
import { Router } from '@reach/router'

import Home from '/@/pages/Home/index'
import CheatSheet from '/@/pages/CheatSheet/index'
import KataList from './pages/KataList/index';

import './App.css';
import '/@/styles/root.css'

function App() {
  return (
    <Router>
      <Home path="/" />
      <CheatSheet path="/cheat-sheet"></CheatSheet>
      <KataList path="/kata-list"></KataList>
    </Router>
  );
}

export default App;
