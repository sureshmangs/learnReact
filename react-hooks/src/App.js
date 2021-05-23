import React, { Component } from 'react';

import './App.css'
// import ClasssMouse from './components/ClasssMouse';
import HookMouse from './components/HookMouse';


export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ClasssMouse /> */}
        <HookMouse />
      </div>
    )
  }
}

export default App