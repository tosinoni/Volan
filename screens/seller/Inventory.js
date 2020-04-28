import React, { PureComponent } from "react";
import { View, Image } from "react-native";
import Header from "../../components/Header";
import Constants from "../../constants";
import DropdownAlert from "react-native-dropdownalert";
import { Tab, Tabs, ScrollableTab, TabHeading, Text } from "native-base";
import InventoryTab from "./tabs/Inventory";
import { styles } from "../../styles/screens/seller/Inventory";
import { VEHICLE_TYPES_WITH_ICONS } from "../../constants";

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
      <View style={{ flex: 1 }}>
        <Tabs
          renderTabBar={() => <ScrollableTab style={styles.tabs} />}
          tabBarUnderlineStyle={styles.tabsUnderlineColor}
        >
          {VEHICLE_TYPES_WITH_ICONS.map(({ text, icon }, index) => {
            return (
              <Tab
                key={index}
                heading={
                  <TabHeading
                    style={styles.tab}
                    activeTextStyle={styles.activeText}
                  >
                    <View style={styles.iconView}>
                      <Image source={icon} style={styles.tabImage} />
                    </View>
                    <Text style={styles.tabText}>{text}</Text>
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
