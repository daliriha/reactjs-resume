import React, { Component } from "react";

import MainApp from "./sections/MainApp";
import SnowStorm from "react-snowstorm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainApp />
        <SnowStorm />
      </div>
    );
  }
}

export default App;
