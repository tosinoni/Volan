import { StyleSheet, StatusBar, Platform } from "react-native";

export const genericStyles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  bold: {
    fontWeight: "bold"
  }
});
