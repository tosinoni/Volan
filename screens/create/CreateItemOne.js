import React, { Component } from "react";
import { View, Text } from "react-native";
import { Form, Item, Label, Input } from "native-base";
import { styles } from "../../styles/screens/create/CreateItemOne";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LocationInput from "../../components/LocationInput";
import SelectDropDown from "../../components/SelectDropDown";
import CircularButtonList from "../../components/CircularButtonList";

const years = [
  { label: "2019", value: "2019" },
  { label: "2018", value: "2018" },
  { label: "2017", value: "2017" },
  { label: "2016", value: "2016" },
  { label: "2015", value: "2015" },
  { label: "2014", value: "2014" }
];

const makes = [
  { label: "Audi", value: "Audi" },
  { label: "Toyota", value: "Toyota" },
  { label: "Nissan", value: "Nissan" },
  { label: "Mercedez Benz", value: "Mercedez Benz" },
  { label: "BMW", value: "BMW" },
  { label: "Honda", value: "Honda" },
  { label: "Hyundai", value: "Hyundai" },
  { label: "Lexus", value: "Lexus" }
];

const vehicleTypes = [
  { text: "Car", icon: require("../../assets/images/vehicles/car.png") },
  {
    text: "Bicycle",
    icon: require("../../assets/images/vehicles/bicycle.png")
  },
  {
    text: "Motorcycle",
    icon: require("../../assets/images/vehicles/motorcycle.png")
  },
  { text: "Truck", icon: require("../../assets/images/vehicles/truck.png") },
  {
    text: "Trailer",
    icon: require("../../assets/images/vehicles/trailer.png")
  },
  { text: "Bus", icon: require("../../assets/images/vehicles/bus.png") },
  { text: "Boat", icon: require("../../assets/images/vehicles/boat.png") },
  {
    text: "Aircraft",
    icon: require("../../assets/images/vehicles/aircraft.png")
  }
];

export class CreateItemOne extends Component {
  state = {
    year: "",
    make: "",
    model: "",
    submodel: "",
    trim: "",
    selectedVehicleType: "Car"
  };

  onInputChange = (key, value) => {
    this.setState({ [key]: value });
  };

  onVehicleTypeSelected = item => {
    this.setState({ selectedVehicleType: item.text });
  };

  render() {
    const {
      year,
      make,
      model,
      submodel,
      trim,
      selectedVehicleType
    } = this.state;
    const { mode } = this.props;

    return (
      <KeyboardAwareScrollView viewIsInsideTabBar>
        <Form>
          <View style={styles.section}>
            <Text style={styles.sectionText}>LOCATION</Text>
            <View style={styles.formSection}>
              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Current Location</Label>
                <LocationInput style={styles.input} />
              </Item>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionText}>VIN</Text>
            <View style={styles.formSection}>
              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>VIN</Label>
                <Input style={styles.input} />
              </Item>
            </View>
          </View>

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

          <View style={styles.section}>
            <Text style={styles.sectionText}>MAKE / MODEL</Text>
            <View style={styles.formSection}>
              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Year</Label>
                <SelectDropDown
                  itemKey="year"
                  headerTitle="Select Year"
                  selectedValue={year}
                  items={years}
                  onValueChange={this.onInputChange}
                  mode={mode}
                />
              </Item>

              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Make</Label>
                <SelectDropDown
                  headerTitle="Select Make"
                  itemKey="make"
                  selectedValue={make}
                  items={makes}
                  onValueChange={this.onInputChange}
                  mode={mode}
                />
              </Item>

              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Model</Label>
                <SelectDropDown
                  itemKey="model"
                  headerTitle="Select Model"
                  selectedValue={model}
                  onValueChange={this.onInputChange}
                  mode={mode}
                />
              </Item>

              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Submodel</Label>
                <SelectDropDown
                  itemKey="submodel"
                  headerTitle="Select Submodel"
                  selectedValue={submodel}
                  onValueChange={this.onInputChange}
                  mode={mode}
                />
              </Item>

              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Trim</Label>
                <SelectDropDown
                  headerTitle="Select Trim"
                  itemKey="trim"
                  selectedValue={trim}
                  onValueChange={this.onInputChange}
                  mode={mode}
                />
              </Item>
            </View>
          </View>
        </Form>
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateItemOne;
