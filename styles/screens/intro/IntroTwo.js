import { StyleSheet } from "react-native";
import { genericStyles } from "../../generic";
import { Colors } from "../../Colors";
import { styles as introComponentStyles } from "../../components/Intro";

export const styles = StyleSheet.create({
  ...genericStyles,
  ...introComponentStyles,
  slide: {
    ...introComponentStyles.slide,
    backgroundColor: Colors.brightBlue
  },
  navigateText: {
    ...introComponentStyles.navigateText,
    color: Colors.brightBlue
  },
  currentScreen: {
    ...introComponentStyles.circle,
    opacity: 1,
    width: 40,
    backgroundColor: Colors.white
  },
  skipText: {
    ...introComponentStyles.skipText,
    color: Colors.brightBlue
  }
});
