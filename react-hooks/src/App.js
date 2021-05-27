import React from 'react';

import './App.css'
import ParentComponent from './components/ParentComponent';


function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  )
}

export default App

// useCallback Hook

// useCallback is a hook that will return a memoized version of the callback
// function that only changes if one of the dependencies has changed

// It is ueful when passing callbacks to optimized child components that rely 
// on reference equality to prevent unnecessary renders