import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import { Colors } from "../../styles/Colors";
import Header from "../../components/Header";
import Constants from "../../constants";

export class Matches extends PureComponent {
  static navigationOptions = {
    header: props => (
      <Header mode={Constants.BUYER} title="Matches" isSearchDisabled />
    )
  };

  render() {
    return (
      <View>
        <Text>Matches</Text>
      </View>
    );
  }
}

export default Matches;
