import { StyleSheet } from "react-native";
import { genericStyles } from "../../generic";
import { genericCreateItemStyles } from "./index";

export const styles = StyleSheet.create({
  ...genericStyles,
  ...genericCreateItemStyles,

  carfaxContainer: {
    borderColor: "#e6e6e6",
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderRadius: 5,
    padding: 5
  },
  carfaxLogo: {
    width: 80,
    height: 20
  },

  carfaxInput: {
    height: 30
  }
});
