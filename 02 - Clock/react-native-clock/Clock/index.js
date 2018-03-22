import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Hand from "./Hand";
class Clock extends Component {
  setTime = () =>
    this.setState({
      timeParts: this.getTimeParts()
    });
  constructor(){
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

  getTimeParts() {
    const date = new Date();
    return {
      seconds: date.getSeconds(),
      minutes: date.getMinutes(),
      hours: date.getHours()
    };
  }
  render() {
    const hands = Object.keys(this.state.timeParts).map(k => {
      const timeConfig = {
        timePartValue: this.state.timeParts[k],
        maxTimePartValue: this.maxTimePartValues[k]
      };
      return (
        <Hand config={this.props.config} key={k} id={k}
          timeConfig={timeConfig}
        />
      );
    });
    const style = this.styles(this.props.config);
    return (
      <View style={style.main}>
        <View style={style.clockFrame}>
          <View style={style.clockHolder}>
            {hands}
          </View>
        </View>
      </View>
    );
  }

  styles = config =>
    StyleSheet.create({
      clockFrame: {
        width: config.clockSize,
        height: config.clockSize,
        position: "relative",
        borderColor: "white",
        borderWidth: config.clockBorderWidth,
        borderRadius: config.clockSize / 2
      },
      clockHolder: {
        width: config.clockSize,
        height: config.clockSize,
        right: -config.clockBorderWidth,
        bottom: -config.clockBorderWidth,
        position: "absolute"
      },
      main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "rgba(73,165,191,1)"
      }
    });
}
export default Clock;
