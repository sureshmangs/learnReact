import React, { Component } from 'react';

import './App.css'
import MouseContainer from './components/MouseContainer';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <MouseContainer />
      </div>
    )
  }
}

export default App