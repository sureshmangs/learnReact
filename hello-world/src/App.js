import React, { Component } from 'react';

import './App.css';

import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends Component {

  render() {
    return (
      <div className="App">
        <UserProvider value="Suresh">
          <ComponentC />
        </UserProvider>
      </div>
    )
  }
}

export default App

// Context
          //      App
          // (A)   B     C 
          //      (D)    E
          //            (F) 
          // Passing props from App to A, D, F 
          // Here to pass props to F we also need to pass it to C and E who might not need them.

// Context provides a way to pass data through the compponent tree without 
// having to passprops down manually at every level.
