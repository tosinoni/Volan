import { StyleSheet, Platform } from "react-native";
import { Colors } from "../../Colors";
export const styles = StyleSheet.create({
  flatList: {
    margin: 10,
    flex: 1,
  },

  card: {
    borderRadius: 10,
  },

  cardItem: {
    borderRadius: 10,
  },

  cardBody: {
    flexDirection: "column",
    justifyContent: "space-between",
  },

  textBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  yearAndMake: {
    textAlign: "left",
    fontWeight: Platform.OS === "android" ? "bold" : "600",
    fontSize: 13,
  },

  price: {
    textAlign: "right",
    fontWeight: Platform.OS === "android" ? "bold" : "600",
    color: Colors.orange,
    fontSize: 13,
  },

  modelAndTrim: {
    textAlign: "left",
    fontSize: 12,
  },

  mileage: {
    textAlign: "right",
    fontSize: 12,
  },
});
