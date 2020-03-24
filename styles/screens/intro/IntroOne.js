import { StyleSheet } from "react-native";
import { genericStyles } from "../../generic";
import { Colors } from "../../Colors";
import { styles as introComponentStyles } from "../../components/Intro";
export const styles = StyleSheet.create({
  ...genericStyles,
  ...introComponentStyles,
  slide: {
    ...introComponentStyles.slide,
    backgroundColor: Colors.brightRed
  },
  navigateText: {
    ...introComponentStyles.navigateText,
    color: Colors.brightRed
  },
  currentScreen: {
    ...introComponentStyles.circle,
    opacity: 1,
    width: 40,
    backgroundColor: Colors.white
  }
});
