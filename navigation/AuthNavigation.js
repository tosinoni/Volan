import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import ForgotPassword from "../screens/ForgotPassword";
import Intro from "../screens/IntroScreen";

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login, navigationOptions: { headerShown: false } },
    Intro: { screen: Intro },
    Signup: { screen: SignUp },
    ForgotPassword: { screen: ForgotPassword }
  },
  {
    initialRouteName: "Login"
  }
);

export default AuthNavigation;
