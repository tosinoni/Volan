import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import Constants from "../../constants";

export class Research extends PureComponent {
  static navigationOptions = {
    header: props => <Header mode={Constants.SELLER} title="Research" />
  };

  render() {
    return (
      <View>
        <Text>Research</Text>
      </View>
    );
  }
}

export default Research;
