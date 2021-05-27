import React from 'react';

import './App.css'
import UserFormOne from './components/UserFormOne';
import UserFormTwo from './components/UserFormTwo';



function App() {
  return (
    <div className="App">
      <UserFormOne />
      <UserFormTwo />
    </div>
  )
}

export default App

// Custom Hook
// A custom hook is basically a JavaScript function whose name starts with "use"
// A custom hook can also call other hooks if required

// Why ?
// Share logic - Alternative to HOCs and Render Props