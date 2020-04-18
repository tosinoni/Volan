import { StyleSheet, StatusBar } from "react-native";
import { genericStyles } from "../generic";
import { Colors } from "../Colors";

export const styles = StyleSheet.create({
  ...genericStyles,
  container: {
    flex: 1
  },
  image: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    right: 0,
    width: 100,

    height: 70,
    resizeMode: "contain"
  },
  buttonView: {
    flex: 1
  },
  button: {
    width: "100%",
    height: "100%"
  },
  buyer: {
    backgroundColor: Colors.brightBlue,
    borderTopLeftRadius: 400,
    borderBottomLeftRadius: 400
  },
  seller: {
    backgroundColor: Colors.brightRed,
    borderTopRightRadius: 400,
    borderBottomRightRadius: 400
  },
  text: {
    color: Colors.white,
    fontSize: 40,
    fontWeight: "300"
  },
  icon: {
    color: Colors.white,
    fontWeight: "200"
  },
  bold: {
    fontWeight: "bold"
  }
});
