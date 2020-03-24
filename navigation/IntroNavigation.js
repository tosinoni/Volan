import { createStackNavigator } from "react-navigation-stack";
import IntroOne from "../screens/intro/IntroOne";
import IntroTwo from "../screens/intro/IntroTwo";
import IntroThree from "../screens/intro/IntroThree";

const IntroNavigation = createStackNavigator(
  {
    IntroOne: { screen: IntroOne },
    IntroTwo: { screen: IntroTwo },
    IntroThree: { screen: IntroThree }
  },
  {
    initialRouteName: "IntroOne",
    headerMode: "none"
  }
);

export default IntroNavigation;
