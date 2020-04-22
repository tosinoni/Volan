import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import Header from "../../components/Header";
import Constants from "../../constants";

export class WishList extends PureComponent {
  static navigationOptions = {
    header: props => <Header mode={Constants.BUYER} title="Wishlist" />
  };

  render() {
    return (
      <View>
        <Text>Wish list</Text>
      </View>
    );
  }
}

export default WishList;
