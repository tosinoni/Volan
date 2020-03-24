import { Colors } from "../Colors";
import { StyleSheet } from "react-native";

export const introStyles = {
  headerText: {
    color: Colors.white
  }
};

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    color: Colors.white
  },
  headerText: {
    fontWeight: "500",
    fontSize: 30,
    textAlign: "center",
    color: Colors.white
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: "contain"
  },
  descriptionView: {
    paddingHorizontal: 32
  },
  text: {
    fontSize: 40,
    padding: 16,
    lineHeight: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.white
  },
  subText: {
    fontSize: 18,
    fontWeight: "200",
    lineHeight: 26,
    textAlign: "center",
    color: Colors.white
  },
  navigateButton: {
    alignSelf: "center",
    width: 200
  },
  navigateText: {
    fontWeight: "bold"
  },
  tracker: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 80
  },
  circle: {
    height: 1,
    width: 10,
    backgroundColor: "white",
    opacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  skipButton: {
    width: 80,
    justifyContent: "center",
    alignSelf: "flex-end",
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  skipText: {
    fontWeight: "600"
  }
});
