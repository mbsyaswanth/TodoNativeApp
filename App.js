import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button, SectionList } from "react-native";
import TodoApp from "./src/Components/TodoApp";

export default class App extends Component {
  render() {
    return <TodoApp />;
  }
}
