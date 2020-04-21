import { StyleSheet } from "react-native";
import { styles as ItemTwoStyles } from "./index";
import { Colors } from "../../../Colors";

const mileageButton = {
  marginRight: 5,
  width: 30,
  height: 25,
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 0,
  paddingBottom: 0
};

export const styles = StyleSheet.create({
  ...ItemTwoStyles,
  mileageInput: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  selectedMileageButton: {
    ...mileageButton,
    backgroundColor: Colors.brightBlue
  },
  unSelectedMileageButton: {
    ...mileageButton,
    backgroundColor: "#bfc4cc"
  }
});
