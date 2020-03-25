import { createStackNavigator } from "react-navigation-stack";
import IntroScreen from "../screens/IntroScreen";

const IntroNavigation = createStackNavigator(
  {
    Intro: { screen: IntroScreen }
  },
  {
    initialRouteName: "Intro",
    headerMode: "none"
  }
);

export default IntroNavigation;
