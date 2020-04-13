import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import EditProfile from "../screens/EditProfile";

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
    Settings: { screen: Settings },
    EditProfile: { screen: EditProfile },
  },
  {
    initialRouteName: "Home"
  }
);

export default AppNavigation;
