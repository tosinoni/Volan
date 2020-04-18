import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import Constants from "../../constants";

export class Inventory extends Component {
  static navigationOptions = {
    header: props => <Header mode={Constants.SELLER} title="Inventory" />
  };

  render() {
    return (
      <View>
        <Text>Inventory</Text>
      </View>
    );
  }
}

export default Inventory;
