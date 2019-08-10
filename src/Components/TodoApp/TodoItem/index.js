import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Checkbox, IconToggle, Icon } from "react-native-material-ui";
import { observer } from "mobx-react";

@observer
class TodoItem extends Component {
  styles = StyleSheet.create({
    item: {
      flexDirection: "row",
      alignItems: "center"
    },
    delete: {
      padding: 5
    }
  });

  onCheck = () => {
    this.props.todo.toggleCompleted();
  };

  delete = () => {
    // alert("delete?");
    console.log("in alert");
    Alert.alert(
      "Warning!",
      "Do you really want to delete?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Delete", onPress: () => this.props.delete(this.props.todo) }
      ],
      { cancelable: false }
    );
  };

  render() {
    const { description, id, isCompleted } = this.props.todo;
    return (
      <>
        <View style={this.styles.item}>
          <Checkbox
            label={description}
            value={id}
            checked={isCompleted}
            onCheck={this.onCheck}
          />
          <IconToggle
            style={this.styles.delete}
            onPress={this.delete}
            name="delete"
          />
        </View>
      </>
    );
  }
}

export default TodoItem;
