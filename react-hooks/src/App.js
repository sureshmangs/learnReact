import React from 'react';

import './App.css'
import ClassTimer from './components/ClassTimer'
import HookTimer from './HookTimer';

function App() {
  return (
    <div className="App">
      <ClassTimer />
      <HookTimer />
    </div>
  )
}

export default App