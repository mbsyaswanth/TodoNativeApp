import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import TodoItem from "../TodoItem";
import { observer } from "mobx-react";

@observer
class ItemContainer extends Component {
  displayList = () => {
    const { filteredList, filter, removeTodo } = this.props.store;
    if (filteredList.length === 0) {
      if (filter === "ALL") {
        return (
          <Text>
            No todo's are added! Add Some todo's using the '+' button below
          </Text>
        );
      }
      return <Text>No {filter} todo's</Text>;
    }
    return (
      <FlatList
        data={filteredList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <TodoItem todo={item} delete={removeTodo} />}
      />
    );
  };

  render() {
    const { filteredList, removeTodo } = this.props.store;
    return this.displayList();
  }
}

export default ItemContainer;
