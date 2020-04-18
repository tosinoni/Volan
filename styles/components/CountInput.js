import { Colors } from "../Colors";
import { StyleSheet } from "react-native";
import { genericStyles } from "../generic";
import { genericCreateItemStyles } from "../screens/create";

export const styles = StyleSheet.create({
  ...genericStyles,
  inputView: {
    flex: 1,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    ...genericCreateItemStyles.input,
    alignSelf: "center",
    borderWidth: 0,
    textAlign: "center"
  },
  icon: {
    color: "#bfc4cc"
  }
});
