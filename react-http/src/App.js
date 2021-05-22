import React, { Component } from 'react';

import './App.css'

import PostForm from './components/PostForm';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
      </div>
    )
  }
}

export default App