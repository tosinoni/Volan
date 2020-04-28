import React, { PureComponent } from "react";
import {
  Switch,
  Header as HeaderNativeBase,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from "native-base";
import { View } from "react-native";
import Constants from "../constants";
import { Colors } from "../styles/Colors";
import ToggleModal from "./ToggleModal";

import { styles as Stylesheet } from "../styles/components/Header";

export class Header extends PureComponent {
  state = {
    showModal: false,
    selectedMode: "",
  };

  onToggleSelected = () => {
    const { mode } = this.props;

    const switchedMode =
      mode === Constants.BUYER ? Constants.SELLER : Constants.BUYER;
    this.setState({ selectedMode: switchedMode, showModal: true });
  };

  onClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { mode, title, isSearchDisabled, hasTabs = false } = this.props;
    const { selectedMode, showModal } = this.state;

    const styles = Stylesheet(this.props);
    const isEnabled = mode === Constants.SELLER;

    return (
      <HeaderNativeBase style={styles.container} hasTabs={hasTabs}>
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
              onValueChange={this.onToggleSelected}
            />
          </View>
        </Right>

        <ToggleModal
          showModal={showModal}
          mode={selectedMode}
          onClose={this.onClose}
        />
      </HeaderNativeBase>
    );
  }
}

export default Header;
