import React, { Component } from "react";
import "./Hand.css";

class Hand extends Component {
  render() {
    const degrees = (this.props.timePartValue/this.props.maxTimePartValue)*360 + 90;
    const transformValue = `rotate(${degrees}deg)`;
    const handStyle = {
        transfom: transformValue,
        WebkitTransform: transformValue
      };
    return (
    <div className="hand" style={handStyle} id={this.props.id}/>
    );
  }
}
export default Hand;
