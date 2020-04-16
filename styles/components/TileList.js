import { Colors } from "../Colors";
import { StyleSheet } from "react-native";
import { genericStyles } from "../generic";

export const styles = StyleSheet.create({
  ...genericStyles,
  tile: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderStyle: "dashed",
    height: 100,
    width: 100,
    borderRadius: 10
  },

  button: {
    height: "auto"
  },

  icon: {
    color: "#393e47",
    fontSize: 40
  },

  text: {
    color: "#575757"
  }
});
