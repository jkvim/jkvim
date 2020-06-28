import React, { useState } from 'react';
import Home from '/@/pages/Home/index'

import './App.css';
import '/@/styles/root.css'

const RouterContext = React.createContext(null);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterContext.Provider value={null}>
        <Home />
      </RouterContext.Provider>
    </div>
  );
}

export default App;
