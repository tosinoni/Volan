import { createBottomTabNavigator } from "react-navigation-tabs";
import WishList from "../screens/buyer/WishList";
import Matches from "../screens/buyer/Matches";
import Connections from "../screens/buyer/Connections";
import TabBar from "../components/TabBar";
import { createDrawerNavigator } from "react-navigation-drawer";
import Subscription from "../screens/Subscription";
import { createStackNavigator } from "react-navigation-stack";
import Sidebar from "../components/Sidebar";

const WishListNavigatorStack = createStackNavigator({
  WishList: {
    screen: WishList
  }
});

const MatchesNavigatorStack = createStackNavigator({
  Matches: {
    screen: Matches
  }
});

const ConnectionsNavigatorStack = createStackNavigator({
  Connections: {
    screen: Connections
  }
});

const BuyerBottomNavigation = createBottomTabNavigator(
  {
    WishListPage: WishListNavigatorStack,
    MatchesPage: MatchesNavigatorStack,
    ConnectionsPage: ConnectionsNavigatorStack
  },
  {
    initialRouteName: "WishListPage",
    tabBarComponent: TabBar
  }
);

const DrawerNavigation = createDrawerNavigator(
  {
    Tabs: BuyerBottomNavigation
  },
  {
    contentComponent: Sidebar,
    drawerPosition: "right"
  }
);

const BuyerNavigation = createStackNavigator({
  Drawer: {
    screen: DrawerNavigation,
    navigationOptions: {
      headerShown: false
    }
  },
  Subscription: { screen: Subscription }
});

export default BuyerNavigation;
