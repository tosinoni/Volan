import React, { PureComponent } from "react";
import { Button } from "native-base";
import { View } from "react-native";
import { styles } from "../styles/components/FooterPageNavButtons";

export class FooterPageNavButtons extends PureComponent {
  render() {
    const { numOfButtons = 0, screenIndex, handleCircleClick } = this.props;
    const arrayOfButtons = [];

    for (let i = 0; i < numOfButtons; i++) {
      arrayOfButtons.push(i);
    }

    return arrayOfButtons.map((value, key) => {
      const isCurrentScreen = value == screenIndex;
      const circle = isCurrentScreen ? styles.currentScreen : styles.circle;
      return (
        <View style={styles.tracker} key={key}>
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
