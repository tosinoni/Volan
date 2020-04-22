import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import Constants from "../../constants";

export class Connections extends PureComponent {
  static navigationOptions = {
    header: props => <Header mode={Constants.SELLER} title="Connections" />
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
