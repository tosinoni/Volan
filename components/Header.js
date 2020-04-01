import React, { Component } from "react";
import {
  Switch,
  Header as HeaderNativeBase,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
import { View } from "react-native";
import Constants from "../constants";
import { Colors } from "../styles/Colors";

import { styles as Stylesheet } from "../styles/components/Header";

export class Header extends Component {
  render() {
    const { mode, title, isSearchDisabled } = this.props;

    const styles = Stylesheet(this.props);
    const isEnabled = mode === Constants.SELLER;

    return (
      <HeaderNativeBase style={styles.container}>
        <Left style={styles.titleView}>
          <Title style={styles.title}>{title}</Title>
        </Left>
        <Body></Body>
        <Right style={styles.iconsView}>
          {!isSearchDisabled && (
            <Button transparent light>
              <Icon name="search" />
            </Button>
          )}
          <View style={styles.switchView}>
            <Switch
              value={isEnabled}
              style={styles.switch}
              trackColor={{ false: Colors.white, true: Colors.white }}
              thumbColor={isEnabled ? Colors.brightRed : Colors.brightBlue}
              ios_backgroundColor={Colors.white}
            />
          </View>
        </Right>
      </HeaderNativeBase>
    );
  }
}

export default Header;
