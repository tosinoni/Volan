import { StyleSheet } from "react-native";
import { Colors } from "../../Colors";

export const styles = StyleSheet.create({
  tabs: {
    borderColor: Colors.brightRed,
  },
  tabsUnderlineColor: {
    backgroundColor: Colors.white,
  },
  tab: {
    backgroundColor: Colors.brightRed,
    justifyContent: "space-around",
  },

  tabText: {
    marginLeft: 10,
    color: Colors.white,
    fontSize: 15,
  },

  activeText: {
    fontWeight: "bold",
  },

  tabImage: {
    width: 15,
    height: 15,
    tintColor: "white",
  },
});
