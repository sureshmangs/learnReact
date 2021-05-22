import React, { Component } from 'react';

import './App.css'

import HookCounterTwo from './components/HookCounterTwo'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <HookCounterTwo />
      </div>
    )
  }
}

export default App