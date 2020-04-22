import React, { PureComponent } from "react";
import { Image } from "react-native";
import { View, Text, Button } from "native-base";

export class Intro extends PureComponent {
  render() {
    const {
      handleSkip,
      isSkipButton,
      handleCircleClick,
      screenIndex,
      styles,
      isWelcomeText,
      image,
      text,
      subText,
      navigateText,
      handleNextClick
    } = this.props;

    return (
      <View style={styles.slide}>
        <View>
          {isWelcomeText && <Text style={styles.headerText}>Welcome!</Text>}
        </View>

        {isSkipButton && (
          <Button light style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </Button>
        )}

        <View>
          <Image source={image} style={styles.image} />
        </View>

        <View style={styles.descriptionView}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>

        <View style={styles.tracker}>
          {[0, 1, 2].map(value => {
            const isCurrentScreen = value == screenIndex;
            const circle = isCurrentScreen
              ? styles.currentScreen
              : styles.circle;
            return (
              <Button
                onPress={() => {
                  handleCircleClick(value);
                }}
                style={circle}
                disabled={isCurrentScreen}
                key={value}
              />
            );
          })}
        </View>

        <Button
          block
          rounded
          light
          style={styles.navigateButton}
          onPress={handleNextClick}
        >
          <Text style={styles.navigateText}>{navigateText}</Text>
        </Button>
      </View>
    );
  }
}

export default Intro;
