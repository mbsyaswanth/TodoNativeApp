import React, { Component } from "react";
import { View, FlatList } from "react-native";
import TodoItem from "../TodoItem";
import { observer } from "mobx-react";

@observer
class ItemContainer extends Component {
  render() {
    const { filteredList, removeTodo } = this.props.store;
    return (
      <FlatList
        data={filteredList}
        renderItem={({ item }) => <TodoItem todo={item} delete={removeTodo} />}
      />
    );
  }
}

export default ItemContainer;
