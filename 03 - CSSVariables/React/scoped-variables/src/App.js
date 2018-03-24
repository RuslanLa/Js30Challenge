import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img from "./black-and-white-tiles-clean-corridor.jpg";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Update CSS Variables with JS EXAMPLE</h2>
        <div class="controls">
          <div>
            <label for="spacing">Spacing:</label>
            <input id="spacing" type="range" name="img-border" min="10" max="200" value="10" data-sizing="px" />
          </div>
          <div>
            <label for="blur">Blur:</label>
            <input id="blur" type="range" name="img-filter-blur" min="0" max="25" value="10" data-sizing="px" />
          </div>
          <div>
            <label for="base">Base Color:</label>
            <input id="base" type="color" name="img-border-color" value="#ffc600" />
          </div>
        </div>
        <div class="img-container">
          <img class="scaled" src={img}></img>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
