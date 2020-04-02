import { Colors } from "../Colors";
import Constants from "../../constants";
import { StyleSheet } from "react-native";
import { genericStyles } from "../generic";

export const styles = props =>
  StyleSheet.create({
    ...genericStyles,

    footer: {
      shadowColor: "grey",
      shadowOpacity: 0.5,
      shadowRadius: 20,
      shadowOffset: { width: 2, height: 2 },
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    },
    footerTab: {
      flex: 1,
      justifyContent: "space-around",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: Colors.white
    },
    button: {
      flex: 0
    },
    createButton: {
      height: 50,
      width: 50,
      bottom: 30,
      borderWidth: 1,
      flex: 0,
      borderColor: "lightgrey",
      borderRadius: 25,
      backgroundColor:
        props.mode === Constants.BUYER ? Colors.brightBlue : Colors.brightRed
    },
    createIcon: {
      color: Colors.white
    },
    badge: {
      backgroundColor:
        props.mode === Constants.BUYER ? Colors.orange : Colors.orange
    }
  });
