import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

@observer
class Login extends Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ecf0f1"
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: "black",
      marginBottom: 10
    }
  });

  @observable username = "";
  @observable password = "";

  onLogin = () => {
    console.log("pressed login");
    this.props.login();
  };

  render() {
    return (
      <View style={this.styles.container}>
        <Text>Username</Text>
        <TextInput
          value={this.username}
          style={this.styles.input}
          onChangeText={username => (this.username = username)}
          placeholder={"Username"}
        />
        <Text>Password</Text>
        <TextInput
          value={this.password}
          style={this.styles.input}
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={password => (this.username = password)}
        />
        <Button title={"Login"} onPress={this.onLogin} />
      </View>
    );
  }
}

export default Login;
