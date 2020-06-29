import React from 'react'
import { Router } from '@reach/router'

import Home from './pages/Home/index'
import CheatSheet from './pages/CheatSheet/index'
import KataList from './pages/KataList/index';

import './App.css';
import './styles/root.css'
import KataDetail from './pages/KataDetail/index';

function App() {
  return (
    <Router>
      <Home path="/" />
      <CheatSheet path="/cheat-sheet"></CheatSheet>
      <KataList path="/kata-list"></KataList>
      <KataDetail path="/kata-detail/:id"></KataDetail>
    </Router>
  );
}

export default App;
