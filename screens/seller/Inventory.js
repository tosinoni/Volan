import React, { PureComponent } from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import Constants from "../../constants";
import DropdownAlert from "react-native-dropdownalert";
import {
  Input,
  Tab,
  Tabs,
  TabHeading,
  Text,
  Item,
  Icon,
  Button,
} from "native-base";
import { styles } from "../../styles/screens/seller/Inventory";
import { VEHICLE_STATES } from "../../constants";
import { withFirebaseHOC } from "../../config/Firebase";
import { withUserHOC } from "../../providers/user";
import VehicleInfoCardList from "../../components/cards/VehicleInfoCardList";

export class Inventory extends PureComponent {
  state = {
    inventories: [],
  };

  static navigationOptions = {
    header: (props) => (
      <Header mode={Constants.SELLER} title="Inventory" hasTabs={true} />
    ),
  };

  fetchInventory = async () => {
    const { uid } = this.props.user || {};

    if (uid) {
      const inventories = await this.props.firebase.getAllInventories(uid);

      this.setState({ inventories });
    }
  };

  getDataGivenInventoryState = (inventoryState) => {
    const { inventories } = this.state;

    if (inventoryState === VEHICLE_STATES.ALL) return inventories;

    return inventories.filter(({ state }) => state === inventoryState);
  };

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

  componentDidUpdate(prevProps) {
    if (prevProps.user.uid !== this.props.user.uid) {
      this.fetchInventory();
    }
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
        <Tabs tabBarUnderlineStyle={styles.tabsUnderlineColor}>
          {Object.keys(VEHICLE_STATES).map((state, index) => {
            const data = this.getDataGivenInventoryState(state);

            return (
              <Tab
                key={index}
                heading={
                  <TabHeading
                    style={styles.tab}
                    activeTextStyle={styles.activeText}
                  >
                    <Text style={styles.countText}>{data.length}</Text>
                    <Text style={styles.stateText}>{state}</Text>
                  </TabHeading>
                }
              >
                <VehicleInfoCardList data={data} />
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

export default withFirebaseHOC(withUserHOC(Inventory));
