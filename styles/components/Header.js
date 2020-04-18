import { Colors } from "../Colors";
import Constants from "../../constants";
import { StyleSheet } from "react-native";
import { genericStyles } from "../generic";

export const styles = props =>
  StyleSheet.create({
    ...genericStyles,
    container: {
      backgroundColor:
        props.mode === Constants.BUYER ? Colors.brightBlue : Colors.brightRed
    },

    iconsView: {
      flex: 0,
      alignItems: "center",
      justifyContent: "space-around"
    },

    titleView: {
      flex: 1
    },

    title: {
      color: Colors.white,
      fontWeight: "bold"
    },

    switchView: {
      justifyContent: "center"
    },
    switch: {
      transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
      marginLeft: 5,
      marginTop: 0,
      marginBottom: 0,
      borderColor: Colors.white
    }
  });
