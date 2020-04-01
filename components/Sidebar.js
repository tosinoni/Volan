import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Drawer
} from "native-base";
import { DrawerActions } from "react-navigation-drawer";

const routes = ["Subscription", "Profile"];

export class Sidebar extends Component {
  onItemClickedInDrawer = data => {
    this.props.navigation.navigate(data);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  render() {
    return (
      <View>
        <Image
          source={{
            uri:
              "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
          }}
          style={{
            height: 120,
            width: "100%",
            alignSelf: "stretch",
            position: "absolute"
          }}
        />
        <Image
          square
          style={{
            height: 80,
            width: 70,
            position: "absolute",
            alignSelf: "center",
            top: 20
          }}
          source={{
            uri:
              "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
          }}
        />
        <List
          dataArray={routes}
          contentContainerStyle={{ marginTop: 120 }}
          renderRow={data => {
            return (
              <ListItem
                key={data}
                button
                onPress={() => this.onItemClickedInDrawer(data)}
              >
                <Text>{data}</Text>
              </ListItem>
            );
          }}
        />
      </View>
    );
  }
}

export default Sidebar;
