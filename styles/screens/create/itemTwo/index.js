import { StyleSheet } from "react-native";
import { genericStyles } from "../../../generic";
import { genericCreateItemStyles } from "../index";

export const styles = StyleSheet.create({
  ...genericStyles,
  ...genericCreateItemStyles,
  input: {
    ...genericCreateItemStyles.input,
    borderWidth: 0
  }
});
