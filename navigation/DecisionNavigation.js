import { createStackNavigator } from "react-navigation-stack";
import Decision from "../screens/Decision";

const DecisionNavigation = createStackNavigator(
  {
    Decision: { screen: Decision }
  },
  {
    initialRouteName: "Decision",
    headerMode: "none"
  }
);

export default DecisionNavigation;
