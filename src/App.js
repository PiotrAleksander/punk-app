import React, { Component } from "react";

import Beers from "./components/Beers";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Beers />
      </div>
    );
  }
}

export default App;
