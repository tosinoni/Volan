import React, { PureComponent } from "react";
import { VEHICLE_TYPES } from "../../../constants";
import CarItemOne from "./Car";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Form } from "native-base";
import { styles } from "../../../styles/screens/create/itemOne";
import { View, Text } from "react-native";
import CircularButtonList from "../../../components/CircularButtonList";
import { Label } from "native-base";
import SelectDropDown from "../../../components/SelectDropDown";
import { withCreateItemHOC } from "../context";

const vehicleTypes = [
  {
    text: VEHICLE_TYPES.CAR,
    icon: require("../../../assets/images/vehicles/car.png"),
  },
  {
    text: VEHICLE_TYPES.BICYCLE,
    icon: require("../../../assets/images/vehicles/bicycle.png"),
  },
  {
    text: VEHICLE_TYPES.MOTORCYCLE,
    icon: require("../../../assets/images/vehicles/motorcycle.png"),
  },
  {
    text: VEHICLE_TYPES.TRUCK,
    icon: require("../../../assets/images/vehicles/truck.png"),
  },
  {
    text: VEHICLE_TYPES.TRAILER,
    icon: require("../../../assets/images/vehicles/trailer.png"),
  },
  {
    text: VEHICLE_TYPES.BUS,
    icon: require("../../../assets/images/vehicles/bus.png"),
  },
  {
    text: VEHICLE_TYPES.BOAT,
    icon: require("../../../assets/images/vehicles/boat.png"),
  },
  {
    text: VEHICLE_TYPES.AIRCRAFT,
    icon: require("../../../assets/images/vehicles/aircraft.png"),
  },
];

const years = [
  { label: "2019", value: "2019" },
  { label: "2018", value: "2018" },
  { label: "2017", value: "2017" },
  { label: "2016", value: "2016" },
  { label: "2015", value: "2015" },
  { label: "2014", value: "2014" },
];

export class CreateItemOne extends PureComponent {
  getDefaultView = () => {
    const { year, mode, onInputChange } = this.props.createItem;

    return (
      <View style={styles.section}>
        <Text style={styles.sectionText}>MAKE / MODEL</Text>
        <View style={styles.formSection}>
          <View style={styles.formItem}>
            <Label style={styles.inputLabel}>Year</Label>
            <SelectDropDown
              itemKey="year"
              headerTitle="Select Year"
              selectedValue={year}
              items={years}
              onValueChange={onInputChange}
              mode={mode}
            />
          </View>
        </View>
      </View>
    );
  };

  renderViewType = (selectedVehicleType) => {
    switch (selectedVehicleType) {
      case VEHICLE_TYPES.CAR:
        return <CarItemOne />;
      default:
        return this.getDefaultView();
    }
  };

  onVehicleTypeSelected = (item) => {
    const { onVehicleTypeChanged } = this.props.createItem;
    const selectedVehicleType = item.text;

    onVehicleTypeChanged(selectedVehicleType);
  };

  render() {
    const { selectedVehicleType } = this.props.createItem;
    return (
      <KeyboardAwareScrollView viewIsInsideTabBar>
        <Form>
          <View style={styles.section}>
            <Text style={styles.sectionText}>VEHICLE TYPE</Text>
            <View style={styles.circularFormSection}>
              <CircularButtonList
                list={vehicleTypes}
                isButtonSelection
                selectedItem={selectedVehicleType}
                onItemSelected={this.onVehicleTypeSelected}
              />
            </View>
          </View>
          {this.renderViewType(selectedVehicleType)}
        </Form>
      </KeyboardAwareScrollView>
    );
  }
}

export default withCreateItemHOC(CreateItemOne);
