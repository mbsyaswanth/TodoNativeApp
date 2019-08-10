import React, { Component } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Alert
} from "react-native";
import { Checkbox, Icon } from "react-native-material-ui";

class TodoItem extends Component {
  state = {
    isChecked: false
  };

  styles = StyleSheet.create({
    item: {
      flexDirection: "row"
    }
  });

  onCheck = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  delete = () => {
    alert("delete?");
    Alert.alert(
      "Warning!",
      "Do you really want to delete?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <View style={this.styles.item}>
        <Checkbox
          label="I Agree"
          value="agree"
          checked={this.state.isChecked}
          onCheck={this.onCheck}
        />
        <TouchableNativeFeedback onPress={this.delete}>
          <Icon name="delete" />
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default TodoItem;
