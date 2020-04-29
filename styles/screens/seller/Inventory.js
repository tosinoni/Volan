import { StyleSheet } from "react-native";
import { Colors } from "../../Colors";
import { genericStyles } from "../../generic";

export const styles = StyleSheet.create({
  ...genericStyles,
  container: {
    flex: 1,
  },

  tabs: {
    height: 45,
    backgroundColor: Colors.brightRed,
    borderColor: Colors.brightRed,
  },
  tabsUnderlineColor: {
    backgroundColor: Colors.white,
  },
  tab: {
    minWidth: 100,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: Colors.brightRed,
  },

  searchView: {
    backgroundColor: Colors.brightRed,
  },
  searchItem: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    borderBottomWidth: 0,
    marginLeft: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: Colors.white,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderRadius: 5,
  },

  searchInput: {
    top: 0,
    height: 30,
    fontSize: 14,
    color: "#87868a",
  },

  searchIcon: {
    color: "#87868a",
    fontSize: 17,
    justifyContent: "center",
  },

  tabText: {
    marginLeft: 10,
    color: Colors.white,
  },

  stateText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 11,
  },

  countText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
  },
});
