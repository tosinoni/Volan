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

  tileDisabled: {
    borderColor: Colors.brightGrey,
    borderStyle: "solid"
  },

  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },

  icon: {
    color: "#393e47",
    fontSize: 40
  },
  iconDisabled: {
    opacity: 0.4
  },
  text: {
    color: "#575757"
  },
  image: {
    width: 100,
    height: 100
  }
});
