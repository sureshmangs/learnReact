import React, { Component } from 'react';

import './App.css';

import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* Props will go to the HOC component from there we can pass them as props to wrapped components */}
        <ClickCounter name="Suresh" />
        <HoverCounter />
      </div>
    )
  }
}

export default App