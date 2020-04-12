import React, { Component } from "react";
import { View, Text } from "react-native";
import { Form, Item, Label, Input, Button } from "native-base";
import { styles } from "../../styles/screens/create/CreateItemTwo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const km = "km";
const mi = "mi";

export class CreateItemTwo extends Component {
  state = {
    selectedMileageType: km
  };

  onMileageTypeSelected = selectedMileageType => {
    this.setState({ selectedMileageType });
  };
  render() {
    const { selectedMileageType } = this.state;
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
        </Form>
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateItemTwo;
