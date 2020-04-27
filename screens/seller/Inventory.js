import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import Constants from "../../constants";
import DropdownAlert from "react-native-dropdownalert";

export class Inventory extends PureComponent {
  static navigationOptions = {
    header: (props) => <Header mode={Constants.SELLER} title="Inventory" />,
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
      <View>
        <Text>Inventory</Text>

        <DropdownAlert
          ref={(ref) => (this.dropDownAlertRef = ref)}
          showCancel
        />
      </View>
    );
  }
}

export default Inventory;
