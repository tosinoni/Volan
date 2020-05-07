import { StyleSheet } from "react-native";
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
    flexDirection: "row",
    justifyContent: "space-between",
  },

  yearAndMake: {
    textAlign: "left",
    fontWeight: "500",
  },

  price: {
    textAlign: "right",
    fontWeight: "500",
    color: Colors.orange,
  },

  modelAndTrim: {
    textAlign: "left",
  },

  mileage: {
    textAlign: "right",
  },
});
