import { Colors } from "../../Colors";
import { StyleSheet } from "react-native";
import { genericStyles } from "../../generic";
import Constants from "../../../constants";

export const genericCreateItemStyles = StyleSheet.create({
  section: {
    marginTop: 10
  },
  formSection: {
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  circularFormSection: {
    backgroundColor: Colors.white
  },

  sectionText: {
    fontWeight: "bold",
    color: Colors.darkGrey,
    padding: 10,
    paddingHorizontal: 15
  },

  formItem: {
    borderBottomWidth: 0,
    marginLeft: 0,
    marginTop: 10
  },
  input: {
    height: 30,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 5,
    color: "#87868a",
    paddingLeft: 10
  },

  inputLabel: {
    marginBottom: 10,
    paddingTop: 0
  }
});

export const styles = props =>
  StyleSheet.create({
    ...genericStyles,
    content: {
      flex: 1,
      backgroundColor: Colors.brightGrey
    },
    footer: {
      backgroundColor:
        props.mode === Constants.BUYER ? Colors.brightBlue : Colors.brightRed,
      alignItems: "center"
    },

    nextButton: {
      flex: 1,
      justifyContent: "flex-end"
    },

    prevButton: {
      flex: 1,
      justifyContent: "flex-start"
    },

    buttonIcon: {
      color: Colors.white
    },
    iconDisabled: {
      opacity: 0.5
    }
  });
