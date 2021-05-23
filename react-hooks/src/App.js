import React, { Component } from 'react';

import './App.css'
import IntervalHookCounter from './components/IntervalHookCounter';
import IntervalClassCounter from './components/IntervalClassCounter';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <IntervalClassCounter />
        <IntervalHookCounter />
      </div>
    )
  }
}

export default App