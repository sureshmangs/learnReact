import React, { Component } from 'react';

import './App.css'

import HookCounterFour from './components/HookCounterFour'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <HookCounterFour />
      </div>
    )
  }
}

export default App