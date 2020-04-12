import { Colors } from "../Colors";
import Constants from "../../constants";
import { StyleSheet } from "react-native";
import { genericStyles } from "../generic";

export const styles = props =>
  StyleSheet.create({
    pickerContainer: {
      width: "100%",
      borderWidth: 1,
      borderColor: "#e6e6e6",
      borderColor: "#e6e6e6",
      borderRadius: 5,
      height: 40
    },
    picker: {
      paddingTop: 0,
      paddingBottom: 0,
      borderColor: "#e6e6e6",
      borderRadius: 10,
      height: 40
    },
    header: {
      backgroundColor:
        props.mode === Constants.BUYER ? Colors.brightBlue : Colors.brightRed
    },
    pickerTextStyle: {
      color: "#87868a",
      paddingLeft: 10
    },
    pickerIconStyle: {
      color: "#87868a"
    }
  });
