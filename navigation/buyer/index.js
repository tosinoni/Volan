import { createBottomTabNavigator } from "react-navigation-tabs";
import WishList from "../../screens/buyer/WishList";
import Matches from "../../screens/buyer/Matches";
import Connections from "../../screens/buyer/Connections";
import TabBar from "../../components/TabBar";

const BuyerNavigation = createBottomTabNavigator(
  {
    WishList: { screen: WishList },
    Matches: { screen: Matches },
    Connections: { screen: Connections }
  },
  {
    initialRouteName: "WishList",
    tabBarComponent: TabBar
  }
);

export default BuyerNavigation;
