import { createBottomTabNavigator } from "react-navigation-tabs";
import WishList from "../screens/buyer/WishList";
import Matches from "../screens/buyer/Matches";
import Connections from "../screens/buyer/Connections";
import BuyerBottomNav from "../components/BuyerBottomNav";
import { createDrawerNavigator } from "react-navigation-drawer";
import Subscription from "../screens/Subscription";
import { createStackNavigator } from "react-navigation-stack";
import Sidebar from "../components/Sidebar";
import CreateItem from "../screens/create/CreateItemOne";

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
    tabBarComponent: BuyerBottomNav
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
  Subscription: { screen: Subscription },
  Create: { screen: CreateItem }
});

export default BuyerNavigation;
