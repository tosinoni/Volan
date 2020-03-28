import { createStackNavigator } from "react-navigation-stack";
import Buyer from "../screens/Buyer";

const BuyerNavigation = createStackNavigator(
  {
    Buyer: { screen: Buyer }
  },
  {
    initialRouteName: "Buyer"
  }
);

export default BuyerNavigation;
