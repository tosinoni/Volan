import { StyleSheet } from "react-native";
import { genericStyles } from "../../generic";
import { genericCreateItemStyles } from "./index";
import { Colors } from "../../Colors";

export const styles = StyleSheet.create({
  ...genericStyles,
  ...genericCreateItemStyles,
  tileList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  tile: {
    marginVertical: 10
  }
});
