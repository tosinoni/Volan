import { Colors } from "../Colors";
import Constants from "../../constants";
import { StyleSheet } from "react-native";
import { genericStyles } from "../generic";

export const styles = StyleSheet.create({
  ...genericStyles,
  userInfoView: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 250,
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    marginTop: 15,
    color: Colors.white
  }
});
