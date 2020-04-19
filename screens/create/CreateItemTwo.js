import React, { Component } from "react";
import { View, Text } from "react-native";
import { Form, Item, Label, Input, Button } from "native-base";
import { styles } from "../../styles/screens/create/CreateItemTwo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CircularButtonList from "../../components/CircularButtonList";
import SelectDropDown from "../../components/SelectDropDown";
import CountInput from "../../components/CountInput";

const km = "km";
const mi = "mi";

const bodyTypes = [
  { label: "Convertible", value: "Convertible" },
  { label: "Coupe", value: "Coupe" },
  { label: "Hatchback", value: "Hatchback" },
  { label: "Sedan", value: "Sedan" },
  { label: "SUV", value: "SUV" }
];

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

const transmissions = [
  { label: "Automatic", value: "Automatic" },
  { label: "Manual", value: "Manual" }
];

const fuelTypes = [
  { label: "Diesel", value: "Diesel" },
  { label: "Electric", value: "Electric" },
  { label: "Electric Hybrid", value: "ElectricHybrid" },
  { label: "Flex Fuel", value: "FlexFuel" },
  { label: "Gasoline", value: "Gasoline" },
  { label: "Hydrogen", value: "hydrogen" },
  { label: "Natural Gas", value: "NaturalGas" },
  { label: "Propane", value: "Propane" }
];

const drivetrains = [
  { label: "4x4", value: "4x4" },
  { label: "AWD", value: "AWD" },
  { label: "FWD", value: "FWD" },
  { label: "RWD", value: "RWD" }
];

export class CreateItemTwo extends Component {
  state = {
    mileageType: km,
    bodyType: "",
    selectedExteriorColor: "",
    selectedInteriorColor: "",
    numberOfDoors: "",
    numberOfPassengers: "",
    transmission: "",
    drivetrain: "",
    displacement: "",
    numberOfCylinders: "",
    fueltype: ""
  };

  onInputChange = (key, value) => {
    this.setState({ [key]: value });
  };

  onExteriorColorSelected = item => {
    this.setState({ selectedExteriorColor: item.text });
  };
  onInteriorColorSelected = item => {
    this.setState({ selectedInteriorColor: item.text });
  };

  render() {
    const {
      numberOfCylinders,
      displacement,
      mileageType,
      bodyType,
      selectedExteriorColor,
      selectedInteriorColor,
      numberOfDoors,
      numberOfPassengers,
      transmission,
      drivetrain,
      fueltype
    } = this.state;
    const { mode } = this.props;

    const isKmSelected = mileageType === km;
    const isMiSelected = mileageType === mi;

    return (
      <KeyboardAwareScrollView viewIsInsideTabBar>
        <Form>
          <View style={styles.section}>
            <Text style={styles.sectionText}>MILEAGE</Text>
            <View style={styles.formSection}>
              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Vehicle Mileage</Label>
                <View style={styles.mileageInput}>
                  <Input style={styles.input} keyboardType="numeric"></Input>
                  <Button
                    rounded
                    style={
                      isKmSelected
                        ? styles.selectedMileageButton
                        : styles.unSelectedMileageButton
                    }
                    onPress={() => this.onInputChange("mileageType", km)}
                  >
                    <Text style={styles.text}>km</Text>
                  </Button>
                  <Button
                    rounded
                    danger
                    style={
                      isMiSelected
                        ? styles.selectedMileageButton
                        : styles.unSelectedMileageButton
                    }
                    onPress={() => this.onInputChange("mileageType", mi)}
                  >
                    <Text style={styles.text}>mi</Text>
                  </Button>
                </View>
              </Item>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionText}>BODY TYPE</Text>
            <View style={styles.formSection}>
              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Body Type</Label>
                <SelectDropDown
                  headerTitle="Select Body Type"
                  selectedValue={bodyType}
                  items={bodyTypes}
                  itemKey="bodyType"
                  onValueChange={this.onInputChange}
                  mode={mode}
                />
              </Item>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionText}>EXTERIOR COLOR</Text>
            <View style={styles.circularFormSection}>
              <CircularButtonList
                list={colors}
                isBadgeSelection
                selectedItem={selectedExteriorColor}
                onItemSelected={this.onExteriorColorSelected}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionText}>INTERIOR COLOR</Text>
            <View style={styles.circularFormSection}>
              <CircularButtonList
                list={colors}
                isBadgeSelection
                selectedItem={selectedInteriorColor}
                onItemSelected={this.onInteriorColorSelected}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionText}>OTHER</Text>
            <View style={styles.formSection}>
              <View style={styles.formItemsRow}>
                <Item stackedLabel style={styles.formItemLeft}>
                  <Label style={styles.inputLabel}>Number of Doors</Label>
                  <CountInput
                    itemKey="numberOfDoors"
                    value={numberOfDoors}
                    onValueChange={this.onInputChange}
                  />
                </Item>
                <Item stackedLabel style={styles.formItemRight}>
                  <Label style={styles.inputLabel}>Number of Passengers</Label>
                  <CountInput
                    itemKey="numberOfPassengers"
                    value={numberOfPassengers}
                    onValueChange={this.onInputChange}
                  />
                </Item>
              </View>
              <View style={styles.formItemsRow}>
                <Item stackedLabel style={styles.formItemLeft}>
                  <Label style={styles.inputLabel}>Transmission</Label>
                  <SelectDropDown
                    headerTitle="Select Transmission"
                    selectedValue={transmission}
                    items={transmissions}
                    itemKey="transmission"
                    onValueChange={this.onInputChange}
                    mode={mode}
                  />
                </Item>

                <Item stackedLabel style={styles.formItemRight}>
                  <Label style={styles.inputLabel}>Drivetrain</Label>
                  <SelectDropDown
                    headerTitle="Select Drivetrain"
                    itemKey="drivetrain"
                    selectedValue={drivetrain}
                    items={drivetrains}
                    onValueChange={this.onInputChange}
                    mode={mode}
                  />
                </Item>
              </View>
              <View style={styles.formItemsRow}>
                <Item stackedLabel style={styles.formItemLeft}>
                  <Label style={styles.inputLabel}>Displacement</Label>
                  <CountInput
                    itemKey="displacement"
                    increment={0.1}
                    decimals={1}
                    value={displacement}
                    onValueChange={this.onInputChange}
                  />
                </Item>
                <Item stackedLabel style={styles.formItemRight}>
                  <Label style={styles.inputLabel}>Number of Cylinders</Label>
                  <CountInput
                    itemKey="numberOfCylinders"
                    value={numberOfCylinders}
                    onValueChange={this.onInputChange}
                  />
                </Item>
              </View>
              <View style={styles.formItemsRow}>
                <Item stackedLabel style={styles.formItem}>
                  <Label style={styles.inputLabel}>Fuel Type</Label>
                  <SelectDropDown
                    headerTitle="Select Fuel Type"
                    itemKey="fueltype"
                    items={fuelTypes}
                    selectedValue={fueltype}
                    onValueChange={this.onInputChange}
                    mode={mode}
                  />
                </Item>
              </View>
            </View>
          </View>
        </Form>
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateItemTwo;
