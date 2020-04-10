import React, { Component } from "react";
import { View, Text } from "react-native";
import Constants from "../../constants";
import { Colors } from "../../styles/Colors";

export class CreateItemOne extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    const isBuyer = params.mode === Constants.BUYER;
    return {
      title: isBuyer ? "Add Wishlist" : "Add Inventory",
      headerStyle: {
        backgroundColor: isBuyer ? Colors.brightBlue : Colors.brightRed
      },
      headerTintColor: Colors.white
    };
  };

  render() {
    return (
      <View>
        <Text>Create</Text>
      </View>
    );
  }
}

export default CreateItemOne;
