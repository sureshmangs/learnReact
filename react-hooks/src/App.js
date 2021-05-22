import React, { Component } from 'react';

import './App.css'

export class App extends Component {
  render() {
    return (
      <div className="App">
        Learn React Hooks
      </div>
    )
  }
}

export default App


// Hooks
// Hooks are new feature additionin React which allows you to use React features without having to write a class
// Ex; State of a component
// Hooks don't work inside classes

// Why Hooks

// Reason Set 1

// Understand how this keyword works in JS
// Remember to bind event handlers in class component
// Classes don't minify very well and make hot reloading very unreliable

// Reason Set 2 
// There is no particular way to reuse stateful component logic
// HOC and render props patternsdo address this problem
// Makes the code harder to follow
// There is a need to share stateful logic in a better way

// reason Set 3
// Create component for complex scenarios such as data fetching and subscribing to events
// Related code is not organised in one place
// Ex. Data Fetching - in componentDidMount and componentDidUpdate
// Ex. Event Listeners - in componentDidMount and componentWillUnmount
// Because of stateful logic - Cannot break into smaller ones