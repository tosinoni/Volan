import { StyleSheet, StatusBar, Platform } from "react-native";
import { Colors } from "./Colors";
export const genericStyles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  bold: {
    fontWeight: "bold",
  },
  text: {
    color: Colors.white,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  inputColor: {
    color: "#87868a",
  },
});
