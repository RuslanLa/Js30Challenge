import React from "react";
import Clock from "./Clock";
import { StyleSheet, Text, View } from "react-native";
const config = {
  clockSize: 270,
  clockBorderWidth: 30,
  hourHandColor: "black",
  secondHandColor: "black",
  secondHandCurved: true,
  secondHandLength: 120,
  secondHandWidth: 2,
  secondHandOffset: 0
};
export default class App extends React.Component {
  render() {
    return <Clock config={config} />;
  }
}
