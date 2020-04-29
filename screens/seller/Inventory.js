import React, { PureComponent } from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import Constants from "../../constants";
import DropdownAlert from "react-native-dropdownalert";
import {
  Input,
  Tab,
  Tabs,
  ScrollableTab,
  TabHeading,
  Text,
  Item,
  Icon,
  Button,
} from "native-base";
import InventoryTab from "./tabs/Inventory";
import { styles } from "../../styles/screens/seller/Inventory";
import { VEHICLE_STATES } from "../../constants";

export class Inventory extends PureComponent {
  static navigationOptions = {
    header: (props) => (
      <Header mode={Constants.SELLER} title="Inventory" hasTabs={true} />
    ),
  };

  fetchInventory = () => {};
  showNotification = ({ type, msg, desc }) => {
    this.dropDownAlertRef.alertWithType(type, msg, desc);
  };

  componentDidMount() {
    this.fetchInventory();

    this.willFocusSubscription = this.props.navigation.addListener(
      "willFocus",
      () => {
        const { params = {} } = this.props.navigation.state;
        const { notification } = params;

        if (notification) {
          this.showNotification(notification);
        }
        this.fetchInventory();
      }
    );
  }

  componentWillUnmount() {
    this.willFocusSubscription.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchView}>
          <Item style={styles.searchItem}>
            <Icon name="search" style={styles.searchIcon} />
            <Input
              style={styles.searchInput}
              placeholder="Search All"
              placeholderTextColor={styles.inputColor.color}
            />
          </Item>
        </View>
        <Tabs
          renderTabBar={() => <ScrollableTab style={styles.tabs} />}
          tabBarUnderlineStyle={styles.tabsUnderlineColor}
        >
          {Object.keys(VEHICLE_STATES).map((state, index) => {
            return (
              <Tab
                key={index}
                heading={
                  <TabHeading
                    style={styles.tab}
                    activeTextStyle={styles.activeText}
                  >
                    <Text style={styles.countText}>0</Text>
                    <Text style={styles.stateText}>{state}</Text>
                  </TabHeading>
                }
              >
                <InventoryTab />
              </Tab>
            );
          })}
        </Tabs>
        <DropdownAlert
          ref={(ref) => (this.dropDownAlertRef = ref)}
          showCancel
        />
      </View>
    );
  }
}

export default Inventory;
