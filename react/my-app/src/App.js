import React, { Component } from 'react';
import './App.css';
import List from "./components/list";

class App extends Component {
  render() {
    return (
        <div>
            <span>some text</span>
            <List/>
        </div>
    );
  }
}

export default App;
