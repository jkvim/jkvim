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
      <CheatSheet path="/"></CheatSheet>
      <KataDetail path="/kata-detail"></KataDetail>
    </Router>
  );
}

export default App;
