import React, { Component } from "react";
import "./Clock.css";
import Hand from "./Hand.js";

class Clock extends Component {
  getTimeParts() {
    const date = new Date();
    return {
      seconds: date.getSeconds(),
      minutes: date.getMinutes(),
      hours: date.getHours()
    };
  }
  setTime = () =>
    this.setState({
      timeParts: this.getTimeParts()
    });
  constructor() {
    super();
    this.state = {
      timeParts: this.getTimeParts()
    };
    this.maxTimePartValues = {
      seconds: 60,
      minutes: 60,
      hours: 12
    };
    setInterval(this.setTime, 1000);
  }
  render() {
    const hands = Object.keys(this.state.timeParts).map(k => {
      return (
        <Hand key={k} id={k}
          timePartValue={this.state.timeParts[k]}
          maxTimePartValue={this.maxTimePartValues[k]}
        />
      );
    });
    return (
      <div className="clock">
        <div className="clock-face">{hands}</div>
      </div>
    );
  }
}
export default Clock;
