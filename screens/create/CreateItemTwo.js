import React, { Component } from "react";
import { View, Text } from "react-native";
import { Form, Item, Label, Input, Button } from "native-base";
import { styles } from "../../styles/screens/create/CreateItemTwo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CircularButtonList from "../../components/CircularButtonList";

const km = "km";
const mi = "mi";

const bodyTypes = [
  { text: "Convertible" },
  { text: "Coupe" },
  { text: "Hatchback" },
  { text: "Sedan" },
  { text: "SUV" }
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

export class CreateItemTwo extends Component {
  state = {
    selectedMileageType: km,
    selectedBodyType: "",
    selectedExteriorColor: "",
    selectedInteriorColor: ""
  };

  onMileageTypeSelected = selectedMileageType => {
    this.setState({ selectedMileageType });
  };

  onBodyTypeSelected = item => {
    this.setState({ selectedBodyType: item.text });
  };
  onExteriorColorSelected = item => {
    this.setState({ selectedExteriorColor: item.text });
  };
  onInteriorColorSelected = item => {
    this.setState({ selectedInteriorColor: item.text });
  };

  render() {
    const {
      selectedMileageType,
      selectedBodyType,
      selectedExteriorColor,
      selectedInteriorColor
    } = this.state;
    const isKmSelected = selectedMileageType === km;
    const isMiSelected = selectedMileageType === mi;

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
                    onPress={() => this.onMileageTypeSelected(km)}
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
                    onPress={() => this.onMileageTypeSelected(mi)}
                  >
                    <Text style={styles.text}>mi</Text>
                  </Button>
                </View>
              </Item>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionText}>BODY TYPE</Text>
            <View style={styles.circularFormSection}>
              <CircularButtonList
                list={bodyTypes}
                isButtonSelection
                selectedItem={selectedBodyType}
                onItemSelected={this.onBodyTypeSelected}
              />
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
        </Form>
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateItemTwo;
