import React, { Component } from "react";
import { VEHICLE_TYPES } from "../../../constants/";
import CarItemTwo from "./Car";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Form } from "native-base";
import { styles } from "../../../styles/screens/create/itemTwo";
import { View, Text } from "react-native";
import CircularButtonList from "../../../components/CircularButtonList";

const colors = [
  { text: "Black", color: "black" },
  { text: "Blue", color: "blue" },
  { text: "Brown", color: "brown" },
  { text: "Gray", color: "grey" },
  { text: "Gold", color: "gold" },
  { text: "Red", color: "red" },
  { text: "White", color: "white" },
  { text: "Pink", color: "pink" },
  { text: "Green", color: "green" },
  { text: "Beige", color: "beige" }
];

export class CreateItemTwo extends Component {
  getDefaultView = () => {
    const { selectedExteriorColor, onInputChange } = this.props;

    return (
      <View style={styles.section}>
        <Text style={styles.sectionText}>EXTERIOR COLOR</Text>
        <View style={styles.circularFormSection}>
          <CircularButtonList
            list={colors}
            isBadgeSelection
            selectedItem={selectedExteriorColor}
            onItemSelected={item =>
              onInputChange("selectedExteriorColor", item.text)
            }
          />
        </View>
      </View>
    );
  };

  renderViewType = selectedVehicleType => {
    switch (selectedVehicleType) {
      case VEHICLE_TYPES.CAR:
        return <CarItemTwo {...this.props} mileageType="km" />;
      default:
        return this.getDefaultView();
    }
  };

  render() {
    const { selectedVehicleType } = this.props;

    return (
      <KeyboardAwareScrollView viewIsInsideTabBar>
        <Form>{this.renderViewType(selectedVehicleType)}</Form>
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateItemTwo;
