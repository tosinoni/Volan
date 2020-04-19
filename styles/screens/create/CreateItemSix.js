import { StyleSheet } from "react-native";
import { genericStyles } from "../../generic";
import { genericCreateItemStyles } from "./index";
import { Colors } from "../../Colors";

export const styles = StyleSheet.create({
  ...genericStyles,
  ...genericCreateItemStyles,

  textArea: {
    flex: 1,
    borderRadius: 5,
    height: "100%",
    borderColor: "#e6e6e6",
    marginTop: 15
  },

  saveButton: {
    borderRadius: 5,
    backgroundColor: "#60bea3"
  }
});
