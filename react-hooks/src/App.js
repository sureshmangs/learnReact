import React from 'react';

import './App.css'
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';


function App() {
  return (
    <div className="App">
      <DocTitleOne />
      <DocTitleTwo />
    </div>
  )
}

export default App

// Custom Hook
// A custom hook is basically a JavaScript function whose name starts with "use"
// A custom hook can also call other hooks if required

// Why ?
// Share logic - Alternative to HOCs and Render Props