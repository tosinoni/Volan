import { Colors } from "../Colors";
import { StyleSheet } from "react-native";
import { genericStyles } from "../generic";

const options = {
  flex: 1,
  paddingTop: 15,
  justifyContent: "flex-start"
};
export const styles = StyleSheet.create({
  ...genericStyles,
  optionsContainer: {
    flex: 1,
    flexDirection: "row"
  },
  optionsLeft: {
    ...options,
    borderRightWidth: 1,
    borderColor: "#e6e6e6"
  },
  optionsRight: {
    ...options,
    borderLeftWidth: 1,
    borderColor: "#e6e6e6"
  },
  scrollViewContainer: {
    paddingVertical: 15
  },
  optionButton: {
    minHeight: 45,
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    marginTop: 10,
    backgroundColor: "#bfc4cc",
    borderRadius: 5,
    paddingHorizontal: 3,
    marginLeft: 10,
    marginRight: 20
  },
  icon: {
    color: Colors.white
  },
  title: {
    color: "#87868a",
    fontWeight: "500",
    marginLeft: 10
  },
  text: {
    flex: 1,
    color: Colors.white,
    opacity: 0.9
  }
});
