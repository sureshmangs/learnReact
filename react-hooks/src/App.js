import React from 'react';

import './App.css'
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';


function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
    </div>
  )
}

export default App

// Custom Hook
// A custom hook is basically a JavaScript function whose name starts with "use"
// A custom hook can also call other hooks if required

// Why ?
// Share logic - Alternative to HOCs and Render Props