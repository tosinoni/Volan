import { createBottomTabNavigator } from "react-navigation-tabs";
import Inventory from "../screens/seller/Inventory";
import Research from "../screens/seller/Research";
import Connections from "../screens/seller/Connections";
import SellerBottomNav from "../components/SellerBottomNav";
import { createDrawerNavigator } from "react-navigation-drawer";
import Subscription from "../screens/Subscription";
import { createStackNavigator } from "react-navigation-stack";
import Sidebar from "../components/Sidebar";
import CreateItem from "../screens/create";
import ImageBrowser from "../screens/ImageBrowser";

const InventoryNavigatorStack = createStackNavigator({
  Inventory: {
    screen: Inventory
  }
});

const ResearchNavigatorStack = createStackNavigator({
  Research: {
    screen: Research
  }
});

const ConnectionsNavigatorStack = createStackNavigator({
  Connections: {
    screen: Connections
  }
});

const SellerBottomNavigation = createBottomTabNavigator(
  {
    InventoryPage: InventoryNavigatorStack,
    ResearchPage: ResearchNavigatorStack,
    ConnectionsPage: ConnectionsNavigatorStack
  },
  {
    initialRouteName: "InventoryPage",
    tabBarComponent: SellerBottomNav
  }
);

const DrawerNavigation = createDrawerNavigator(
  {
    Tabs: SellerBottomNavigation
  },
  {
    contentComponent: Sidebar,
    drawerPosition: "right"
  }
);

const SellerNavigation = createStackNavigator({
  Drawer: {
    screen: DrawerNavigation,
    navigationOptions: {
      headerShown: false
    }
  },
  Subscription: { screen: Subscription },
  Create: { screen: CreateItem },
  ImageBrowser: {
    screen: ImageBrowser
  }
});

export default SellerNavigation;
