import { Colors } from "../Colors";
import { StyleSheet } from "react-native";

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
  },
  badge: {
    alignSelf: "flex-end",
    paddingTop: 0,
    paddingBottom: 0,
    height: 25,
    width: 25,
    borderRadius: 12.5,
    borderWidth: 2,
    borderColor: Colors.white,
    paddingLeft: 3,
    paddingRight: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  badgeIcon: {
    color: Colors.white,
    fontSize: 15
  },
  iconView: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  icon: {
    width: 35,
    height: 35,
    tintColor: "white"
  }
});
