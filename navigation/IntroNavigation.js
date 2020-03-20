import { createStackNavigator } from "react-navigation-stack";
import Intro from "../screens/IntroScreen";

const IntroNavigation = createStackNavigator(
  {
    Intro: { screen: Intro, navigationOptions: { headerShown: false } }
  },
  {
    initialRouteName: "Intro"
  }
);

export default IntroNavigation;
