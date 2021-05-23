import React, { Component } from 'react';

import './App.css'
// import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ClassCounterOne /> */}
        <HookCounterOne />
      </div>
    )
  }
}

export default App

// useEffect

// The effect hook lets you perform side efeects in functional components
// It's a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount