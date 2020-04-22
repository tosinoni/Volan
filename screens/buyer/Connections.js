import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import Header from "../../components/Header";
import Constants from "../../constants";

export class Connections extends PureComponent {
  static navigationOptions = {
    header: props => <Header mode={Constants.BUYER} title="Connections" />
  };

  render() {
    return (
      <View>
        <Text>Connections</Text>
      </View>
    );
  }
}

export default Connections;
