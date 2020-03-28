import { Colors } from "../Colors";
import Constants from "../../constants";
import { StyleSheet } from "react-native";
import { genericStyles } from "../generic";
export const styles = props =>
  StyleSheet.create({
    ...genericStyles,
    content: {
      backgroundColor:
        props.mode === Constants.BUYER ? Colors.brightBlue : Colors.brightRed,
      justifyContent: "space-evenly",
      alignItems: "center",
      borderRadius: 4,
      borderColor: "rgba(0, 0, 0, 0.1)",
      paddingTop: 10,
      paddingBottom: 22
    },
    contentTitle: {
      color: Colors.white,
      fontSize: 20,
      marginBottom: 12
    },
    imageView: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      borderBottomColor: Colors.white,
      borderBottomWidth: 2,
      marginBottom: 10
    },
    image: {
      height: 70,
      width: 200,
      resizeMode: "contain"
    },
    actionsView: {
      width: "100%",
      justifyContent: "space-evenly",
      flexDirection: "row",
      borderTopColor: Colors.white,
      borderTopWidth: 2,
      paddingTop: 10
    },

    actionsButton: {
      width: 80,
      height: 45
    },

    noButton: {
      backgroundColor:
        props.mode === Constants.BUYER ? Colors.brightRed : Colors.brightBlue
    },

    text: {
      color: Colors.white
    }
  });
