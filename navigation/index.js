import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Initial from "../screens/Initial";
import DecisionNavigation from "./DecisionNavigation";
import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";
import IntroNavigation from "./IntroNavigation";
import BuyerNavigation from "./BuyerNavigation";
import SellerNavigation from "./seller";

const SwitchNavigator = createSwitchNavigator(
  {
    Initial: Initial,
    Auth: AuthNavigation,
    App: AppNavigation,
    Intro: IntroNavigation,
    Decision: DecisionNavigation,
    Buyer: BuyerNavigation,
    Seller: SellerNavigation
  },
  {
    initialRouteName: "Initial"
  }
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
