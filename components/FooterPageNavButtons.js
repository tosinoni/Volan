import React, { Component } from "react";
import { Button } from "native-base";
import { View } from "react-native";
import { styles } from "../styles/components/FooterPageNavButtons";

export class FooterPageNavButtons extends Component {
  render() {
    const { numOfButtons = 0, screenIndex, handleCircleClick } = this.props;
    const arrayOfButtons = [];

    for (let i = 0; i < numOfButtons; i++) {
      arrayOfButtons.push(i);
    }

    return arrayOfButtons.map(value => {
      const isCurrentScreen = value == screenIndex;
      const circle = isCurrentScreen ? styles.currentScreen : styles.circle;
      return (
        <View style={styles.tracker}>
          <Button
            onPress={() => {
              handleCircleClick(value);
            }}
            style={circle}
            disabled={isCurrentScreen}
            key={value}
          />
        </View>
      );
    });
  }
}

export default FooterPageNavButtons;
