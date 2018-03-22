import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

class Hand extends Component {
  render() {
    return (
      <View
        style={this.styles(this.props.config, this.props.timeConfig).hand}
      />
    );
  }
  styles = (config, timeConfig) => {
    debugger;
    const calculateDegrees = timeConfig =>
      timeConfig.timePartValue / timeConfig.maxTimePartValue * 360 + 90;
    return StyleSheet.create({
      hand: {
        width: 0,
        height: 0,
        position: "absolute",
        backgroundColor: "white",
        top: config.clockSize / 2,
        left: config.clockSize / 2,
        marginTop: -(config.secondHandLength / 2),
        marginHorizontal: -config.secondHandWidth,
        paddingTop: config.secondHandLength,
        paddingHorizontal: config.secondHandWidth,
        borderTopLeftRadius: config.secondHandCurved
          ? config.secondHandWidth
          : 0,
        borderTopRightRadius: config.secondHandCurved
          ? config.secondHandWidth
          : 0,
        transform: [
          { rotate: calculateDegrees(timeConfig) + "deg" },
          {
            translateY: -(config.secondHandOffset + config.secondHandLength / 2)
          }
        ]
      }
    });
  };
}
export default Hand;
