import React, { Component } from "react";
import BottomNav from "./BottomNav";
import { ActionButton } from "react-native-material-ui";
import { View, StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";

class TodoApp extends Component {
  styles = StyleSheet.create({
    container: {
      flex: 1
    },
    add: {
      bottom: 60
    },
    headerText: {
      textAlign: "center",
      color: "white"
    },
    header: {
      backgroundColor: "blue",
      height: 40,
      color: "white",
      justifyContent: "center",
      marginTop: StatusBar.currentHeight
    }
  });
  render() {
    return (
      <View style={this.styles.container}>
        <View style={this.styles.header}>
          <Text style={this.styles.headerText}>Todo App</Text>
        </View>

        <ActionButton style={{ positionContainer: this.styles.add }} />
        <BottomNav />
      </View>
    );
  }
}

export default TodoApp;
