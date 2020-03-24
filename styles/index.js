import { StyleSheet } from "react-native";
import { componentStyles } from "./components";
import { screenStyles } from "./screens";

const baseStyles = {
  ...componentStyles,
  ...screenStyles
};
export const styles = StyleSheet.create({
  ...baseStyles
});

export const lightThemeStyles = StyleSheet.create({
  ...baseStyles
});

export const darkThemeStyles = StyleSheet.create({
  ...baseStyles
});

export function getStyleSheet(useDarkTheme) {
  return useDarkTheme ? darkThemeStyles : lightThemeStyles;
}
