import { Colors } from "../../Colors";
import { StyleSheet } from "react-native";
import { genericStyles } from "../../generic";
import Constants from "../../../constants";

export const styles = props =>
  StyleSheet.create({
    ...genericStyles,

    footer: {
      backgroundColor:
        props.mode === Constants.BUYER ? Colors.brightBlue : Colors.brightRed,
      alignItems: "center"
    },

    nextButton: {
      flex: 1,
      justifyContent: "flex-end"
    },

    prevButton: {
      flex: 1,
      justifyContent: "flex-start"
    },

    buttonIcon: {
      color: Colors.white
    },
    iconDisabled: {
      opacity: 0.5
    }
  });
