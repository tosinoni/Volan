import { Colors } from "../Colors";
import { StyleSheet } from "react-native";

const circle = {
  height: 1,
  width: 10,
  backgroundColor: "white",
  opacity: 0.5,
  borderRadius: 20,
  marginRight: 5
};

export const styles = StyleSheet.create({
  tracker: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  circle,
  currentScreen: {
    ...circle,
    opacity: 1,
    width: 40,
    backgroundColor: Colors.white
  }
});
