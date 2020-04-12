import { Colors } from "../Colors";
import Constants from "../../constants";
import { StyleSheet } from "react-native";
import { genericStyles } from "../generic";

export const styles = StyleSheet.create({
  buttonList: {
    flexDirection: "row",
    paddingVertical: 15
  },
  buttonView: {
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 30,
    width: 60,
    height: 60,
    backgroundColor: "#393e47",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginHorizontal: 15
  }
});
