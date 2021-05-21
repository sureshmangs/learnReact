import React, { Component } from 'react';

import './App.css';

import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
//import User from './components/User';
import CounterTwo from './components/CounterTwo';

class App extends Component {

  render() {
    return (
      <div className="App">
        <CounterTwo render={(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)} />
        <CounterTwo render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />} />


        {/* Method 2 -> Can also be done in this way */}

        {/* <CounterTwo>
          {(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)}
        </CounterTwo> */}


        {/* Read User.js Component fro better understanding */}
        {/* <User render={(isLoggedIn) => isLoggedIn ? "Suresh" : "Guest"} /> */}
      </div>
    )
  }
}

export default App

// Render Props
// The term "Render Prop" refers to a technique for sharing code between
// React Component using a propwhose value is a function