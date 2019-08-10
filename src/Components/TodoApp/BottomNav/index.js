import React, { Component } from "react";
import { BottomNavigation } from "react-native-material-ui";
import { View, Text, StyleSheet, Dimensions } from "react-native";
class BottomNav extends Component {
  state = {
    active: "all"
  };

  styles = StyleSheet.create({
    container: {
      flex: 1
    },
    add: {
      bottom: 70
    },
    bottomNav: {
      position: "absolute",
      bottom: 0,
      width: Dimensions.get("window").width,
      backgroundColor: "yellow"
    }
  });

  render() {
    return (
      <View style={this.styles.bottomNav}>
        <BottomNavigation active={this.state.active} hidden={false}>
          <BottomNavigation.Action
            key="all"
            icon="list"
            label="all"
            onPress={() => this.setState({ active: "all" })}
          />
          <BottomNavigation.Action
            key="active"
            icon="lock-open"
            label="Active"
            onPress={() => this.setState({ active: "active" })}
          />
          <BottomNavigation.Action
            key="completed"
            icon="check-circle"
            label="Completed"
            onPress={() => this.setState({ active: "completed" })}
          />
        </BottomNavigation>
      </View>
    );
  }
}

export default BottomNav;
