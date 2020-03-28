import { createStackNavigator } from "react-navigation-stack";
import Seller from "../screens/Seller";

const SellerNavigation = createStackNavigator(
  {
    Seller: { screen: Seller }
  },
  {
    initialRouteName: "Seller"
  }
);

export default SellerNavigation;
